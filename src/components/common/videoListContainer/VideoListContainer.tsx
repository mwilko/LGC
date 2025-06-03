import { useEffect, useState } from 'react';
// Components
import { VideoList } from './components/videoList/VideoList';
// Data
import { videos as videoData } from 'data/videos';
// Interfaces
import { Video } from 'interfaces/video';
import './VideoListContainer.css';

type VideoListContainerProps = {
  limit?: number;
};

export const VideoListContainer = ({ limit }: VideoListContainerProps) => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      // Shuffle videos randomly on each mount
      const shuffledVideos = [...videoData].sort(() => 0.5 - Math.random());

      setVideos(shuffledVideos);
      setError(shuffledVideos.length === 0);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div className="video-loader">Loading...</div>;
  }

  if (error) {
    return (
      <div className="video-error">
        <p>Videos failed to load.</p>
      </div>
    );
  }

  // Limit videos if 'limit' prop is provided
  const displayedVideos = limit ? videos.slice(0, limit) : videos;

  return <VideoList videos={displayedVideos} />;
};
