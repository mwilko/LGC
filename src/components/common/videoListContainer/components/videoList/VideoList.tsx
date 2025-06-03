import { VideoItem } from '../video/Video';
import './VideoList.css';

type Props = {
  videos: {
    id: string;
    title: string;
    thumbnail: string;
    url: string;
  }[];
};

export const VideoList = ({ videos }: Props) => {
  return (
    <div className="video-list">
      {videos.map((video) => (
        <VideoItem key={video.id} video={video} />
      ))}
    </div>
  );
};
