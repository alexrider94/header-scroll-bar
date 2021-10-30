import React, { useState } from 'react';
import {
  GestureResponderEvent,
  PanResponder,
  PanResponderGestureState,
  View,
} from 'react-native';
import { HeaderType, ScrollType } from './type';

export default ({ children }: HeaderType) => {
  /*
  scroll type
  0 - up
  1 - down
  2 - hold
  */
  const [scrollType, setScrollType] = useState<ScrollType>(2);

  const onMoveHandler = (
    _event: GestureResponderEvent,
    gestureState: PanResponderGestureState,
  ) => {
    const moveStartY = gestureState.dy;
    if (moveStartY > 0) {
      setScrollType(0);
    } else if (moveStartY < 0) {
      setScrollType(1);
    }
  };

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderGrant: () => {},
    onPanResponderMove: onMoveHandler,
  });

  return <View {...panResponder.panHandlers}>{children}</View>;
};
