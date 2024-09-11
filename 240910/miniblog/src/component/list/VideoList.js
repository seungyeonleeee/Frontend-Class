// 36 , // 46 useRef
import React, { useRef } from "react";
// 39
import styled from "styled-components";

// 40
const Wrapper = styled.div`
  width: 168px;
  height: 108px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
`;

// 42
const VideoContent = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

// 43
const ImageContent = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const VideoList = ({ onClick, videoUrl, thumbnailUrl }) => {
  // 47
  const videoRef = useRef();
  // 49
  // console.log(videoRef); // 마운트 시점에서는 undefined // current > style = css 제어 가능

  // 52
  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.style.opacity = 1;
      videoRef.current.play();
    }
  };
  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.style.opacity = 0;
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <Wrapper
      // 50
      onClick={onClick}
      // 51
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <VideoContent
        // 48
        ref={videoRef}
        // 44
        src={videoUrl}
        // 53
        muted
      />
      <ImageContent
        // 45
        src={thumbnailUrl}
        alt="Thumbnail"
      />
    </Wrapper>
  );
};

export default VideoList;
