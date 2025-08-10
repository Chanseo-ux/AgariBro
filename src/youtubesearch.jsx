import React, { useState } from "react";

export default function YouTubeSearch() {
  const [query, setQuery] = useState("");
  const [videos, setVideos] = useState([]);

  const searchVideos = async () => {
    try {
      const res = await fetch(`/api/youtube?q=${encodeURIComponent(query)}`);
      const data = await res.json();
      setVideos(data.items || []);
    } catch (err) {
      console.error("Error fetching videos", err);
    }
  };

  return (
    <div style={{ marginTop: "50px", padding: "20px" }}>
      <h2>YouTube Search</h2>
      <input
        type="text"
        placeholder="Search for videos..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchVideos}>Search</button>

      <div style={{ marginTop: "20px" }}>
        {videos.map((video) => (
          <div key={video.id.videoId} style={{ marginBottom: "20px" }}>
            <iframe
              width="320"
              height="180"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              allowFullScreen
            />
            <p>{video.snippet.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
