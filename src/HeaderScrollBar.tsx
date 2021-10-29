import React from "react";
import {
  GestureResponderEvent,
  PanResponder,
  PanResponderGestureState,
  View
} from "react-native";
import { HeaderType } from "./type";

export default (props: HeaderType) => {
  const move = (
    event: GestureResponderEvent,
    gestureState: PanResponderGestureState
  ) => {};

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderGrant: () => {},
    onPanResponderMove: move
  });

  return (
    <View {...panResponder.panHandlers}>
      {props.children}
    </View>
  );
};
