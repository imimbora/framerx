import * as React from "react";
import { useAnimation } from "framer";
import { useAnimatedState } from "framer";

// 만약에 origin 을 도중에 바꾼다면

var videoControl;
var data, setData;
export function Video(): Override {
  videoControl = useAnimation();
  [data, setData] = useAnimatedState({
    x: 1,
  });
  return {
    originX: data.x,
    originY: data.x,
    animate: videoControl,
  };
}

var profileControl;
export function Profile(): Override {
  profileControl = useAnimation();
  return {
    onTap: async () => {
      setData({
        x: 0,
        transition: {
          type: "spring",
        },
      });
    },

    animate: profileControl,
  };
}
