import * as React from "react"; // react 를 import
import { useEffect } from "react";
import { Override, Data } from "framer";

// 가장 기본형의 Override
// Frame0 은 이 Override 의 이름 // 첫문자는 대문자!
export function Frame0(): Override {
  return {
    // animation 의 시작점
    initial: {
      background: "blue",
    },
    background: "red",
    width: 300,
    height: 20,
    radius: 3,
    animate: {
      width: 100,
      height: 500,
      background: "green",
      top: 0,
    },
    transition: {
      duration: 3,
      ease: "easeInOut",
      delay: 2,
    },
  };
}

// 원하는 트리거와 함께 실행시킬때 useAnimation Override
var frame2Control;
export function Frame2(): Override {
  frame2Control = useAnimation();
  return {
    onTap: () => {
      // trigger
      frame2Control.start({
        // response 는 항상 trigger 안에
        scale: 1.5,
        background: "red",
        transition: {
          duration: 3,
        },
      });
    },
    animate: frame2Control,
  };
}

// 다른 frame 이 trigger 를 실행
var boxControl;
export function box(): Override {
  boxControl = useAnimation();
  return {
    animate: boxControl,
  };
}
export function Button(props): Override {
  return {
    onTap: () => {
      boxControl.start({
        scale: 2,
        background: "red",
      });
    },
  };
}

// onStart (복잡하고, 잘 안쓰지만)
var frame3Control;
export function Frame3(): Override {
  frame3Control = useAnimation();
  useEffect(() => {
    const doSomethingAtStart = async () => {
      frame3Control.start({
        width: 400,
        height: 500,
      });
    };
    doSomethingAtStart();
  }, []);
  return {
    animate: Frame3Control,
  };
}

// Learn more: https://framer.com/docs/overrides/
const appState = Data({
  taps: 0,
});
export function TapFrame(props): Override {
  return {
    borderRadius: 12,
    whileTap: {
      scale: 0.9,
    },
    onTap: () => {
      appState.taps += 1;
    },
  };
}
export function RotateFrame(props): Override {
  return {
    animate: {
      rotate: appState.taps * 90,
    },
  };
}
export function TextElement(props): Override {
  return {
    text: appState.taps,
  };
}
