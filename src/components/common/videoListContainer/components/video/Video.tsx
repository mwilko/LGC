import './Video.css';

type Props = {
  video: {
    id: string;
    title: string;
    thumbnail: string;
    url: string;
  };
};

export const VideoItem = ({ video }: Props) => {
  const { id, title, thumbnail, url } = video;

  return (
    <div className="video-card" key={id}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="vc-thumbnail">
          <img src={thumbnail} alt={title} />
          <div className="vc-overlay">
            <span>Watch</span>
          </div>
        </div>
        <div className="vc-title">
          <h4>{title}</h4>
        </div>
      </a>
    </div>
  );
};
