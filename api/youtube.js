// /api/youtube.js
export default async function handler(req, res) {
  try {
    const q = (req.query.q || req.body?.q || "").toString().trim();
    if (!q) return res.status(400).json({ error: "Missing q" });

    const key = process.env.YOUTUBE_API_KEY;
    if (!key) return res.status(500).json({ error: "Missing YOUTUBE_API_KEY" });

    const url =
      `https://www.googleapis.com/youtube/v3/search?` +
      new URLSearchParams({
        part: "snippet",
        type: "video",
        maxResults: "6",
        q,
        key,
      });

    const r = await fetch(url);
    const data = await r.json();
    if (!r.ok) return res.status(500).json({ error: "YouTube error", details: data });

    // Normalize for your UI
    const items = (data.items || []).map(v => ({
      videoId: v.id?.videoId,
      title: v.snippet?.title || "",
      thumb: v.snippet?.thumbnails?.medium?.url || "",
      channel: v.snippet?.channelTitle || "",
    })).filter(v => v.videoId);

    res.setHeader("Cache-Control", "s-maxage=120, stale-while-revalidate=300");
    return res.status(200).json({ items });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Server error" });
  }
}

