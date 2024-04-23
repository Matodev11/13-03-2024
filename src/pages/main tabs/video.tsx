import IconPlayVideo from "../../assets/iconplayvideo";
import { videoDataType, videoData } from "../main";

const Video = () => {
  return (
    <>
      {" "}
      <div className="profileinfo__video">
        {videoData.map((video: videoDataType, index) => (
          <div className="profileinfo__video--div" key={index}>
            <img
              className="profileinfo__video--img"
              src={video.img}
              alt={video.img}
            />
            <IconPlayVideo/>
          </div>
        ))}
      </div>
    </>
  );
};

export default Video;
