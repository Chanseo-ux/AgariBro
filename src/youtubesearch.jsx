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
        style={{ padding: "10px", width: "300px" }}
      />
      <button
        onClick={searchVideos}
        style={{
          padding: "10px",
          marginLeft: "10px",
          background: "green",
          color: "white",
        }}
      >
        Search
      </button>

      <div style={{ marginTop: "20px" }}>
        {videos.length > 0 ? (
          videos.map((video) => (
            <div key={video.videoId} style={{ marginBottom: "20px" }}>
              <h3>{video.title}</h3>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${video.videoId}`}
                title={video.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          ))
        ) : (
          <p>No results yet.</p>
        )}
      </div>
    </div>
  );
}

