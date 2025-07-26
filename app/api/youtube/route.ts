
export async function searchYouTube(query: string) {
  const apiKey = process.env.YOUTUBE_API_KEY!;
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=1&q=${encodeURIComponent(query)}&key=${apiKey}`
  );
  const data = await res.json();
  const video = data.items?.[0];
  if (!video) return null;

  return {
    title: video.snippet.title,
    url: `https://www.youtube.com/watch?v=${video.id.videoId}`,
    thumbnail: video.snippet.thumbnails.high.url,
  };
}

