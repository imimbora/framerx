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

// if + props + toggle
var handleControl;
export function Handle(): Override {
  handleControl = useAnimation();
  return {
    animate: handleControl,
  };
}

var isToggleOn = 0;
var bgControl;
export function Bg(props): Override {
  bgControl = useAnimation();
  return {
    animate: bgControl,
    onTap: () => {
      if (isToggleOn === 0) {
        isToggleOn = 1;
        handleControl.start({
          left: 55,
        });
        bgControl.start({
          background: "red",
        });
      } else if (isToggleOn === 1) {
        isToggleOn = 0;
        handleControl.start({
          left: 5,
        });
        bgControl.start({
          background: props.background,
        });
      }
    },
  };
}
