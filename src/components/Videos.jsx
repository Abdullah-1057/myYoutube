import React from "react";
import { Stack, Box } from "@mui/material";
import { ChannelCard, VideoCard,Loader } from ".";
const Videos = ({ videos,direction }) => {
  {
    if(videos) {return (
      <Stack direction={direction||"row"} flexWrap="wrap" justifyContent="start" gap={2}>
        {videos.map((item, index) => (
          <Box key={index}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard ChannelDetail={item} />}
          </Box>
        ))}
      </Stack>
    )} 
    return (
      <>
      <Loader/>
      </>
    );
  }
};

export default Videos;
