export default async function handler(req, res) {
  try {
    const q = (req.query.q || req.body?.q || "").toString().trim();
    if (!q) return res.status(400).json({ error: "Missing q" });

    const url = "https://www.youtube.com/feeds/videos.xml?search_query=" + encodeURIComponent(q);
    const r = await fetch(url, { headers: { "User-Agent": "BroSmartfarm/1.0" } });
    if (!r.ok) return res.status(500).json({ error: "Upstream error", status: r.status });

    const xml = await r.text();

    // Tiny XML parse (title + videoId)
    const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].slice(0, 8).map(m => {
      const block = m[1];
      const idMatch = block.match(/<yt:videoId>([^<]+)<\/yt:videoId>/);
      const titleMatch = block.match(/<title>([^<]+)<\/title>/);
      const videoId = idMatch ? idMatch[1] : null;
      const title = titleMatch ? titleMatch[1] : "";
      return { videoId, title };
    }).filter(v => v.videoId);

    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=600");
    return res.status(200).json({ items: entries });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Server error" });
  }
}
This uses YouTube’s public search feed. It’s simple and free, but if YouTube changes the feed format or rate-limits, results may be limited. If that happens, we can swap to another provider later.

Step 2) Add a mini player UI to your index.html
Open index.html, scroll to just before </body>, and add this block (you can put it inside your existing drawer, or anywhere on the page):

html
복사
편집
<div id="mini-yt" style="padding:10px;">
  <div style="display:flex;gap:8px;align-items:center;">
    <input id="ytQuery" placeholder="Search YouTube…" style="flex:1;padding:10px;border-radius:10px;border:1px solid #e5e7eb;">
    <button id="ytBtn" style="padding:10px 14px;border:none;border-radius:10px;background:#22c55e;color:#fff;cursor:pointer;">Search</button>
  </div>
  <div id="ytResults" style="margin-top:12px;"></div>
</div>

<script>
async function ytSearch() {
  const q = document.getElementById("ytQuery").value.trim();
  if (!q) return;
  const box = document.getElementById("ytResults");
  box.innerHTML = "Searching…";
  try {
    const r = await fetch(`/api/youtube?q=${encodeURIComponent(q)}`);
    const data = await r.json();
    if (!data.items?.length) { box.innerHTML = "No results."; return; }
    box.innerHTML = data.items.map(v => `
      <div style="margin-bottom:14px;">
        <iframe
          width="100%" height="200"
          src="https://www.youtube-nocookie.com/embed/${v.videoId}"
          title="${v.title.replace(/"/g,'&quot;')}"
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen loading="lazy"></iframe>
        <div style="font:14px/1.3 system-ui;margin-top:6px;">${v.title}</div>
      </div>
    `).join("");
  } catch (e) {
    console.error(e);
    box.innerHTML = "Error loading results.";
  }
}
document.getElementById("ytBtn").addEventListener("click", ytSearch);
document.getElementById("ytQuery").addEventListener("keydown", e => { if (e.key === "Enter") ytSearch(); });
</script>
