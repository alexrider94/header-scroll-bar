import React, { useState } from "react";
import {
  GestureResponderEvent,
  PanResponder,
  PanResponderGestureState,
  View
} from "react-native";
import { HeaderType, ScrollType } from "./type";

export default (props: HeaderType) => {
  const [scrollType, setScrollType] =
    useState<ScrollType>();

  const onMoveHandler = (
    event: GestureResponderEvent,
    gestureState: PanResponderGestureState
  ) => {
    const moveStartY = gestureState.dy;
    if (moveStartY > 0) {
    }
  };

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderGrant: () => {},
    onPanResponderMove: onMoveHandler
  });

  return (
    <View {...panResponder.panHandlers}>
      {props.children}
    </View>
  );
};
