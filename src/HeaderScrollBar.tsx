import React, { useState } from 'react';
import {
  GestureResponderEvent,
  PanResponder,
  PanResponderGestureState,
  StyleSheet,
  View,
} from 'react-native';
import { HeaderType, ScrollType } from './type';
import useInterval from './util/useInterval';

function HeaderScrollBar({
  children,
  height,
  scrollPosition,
  visible,
  isRepeatable,
  time,
}: HeaderType) {
  const [scrollType, setScrollType] = useState<ScrollType>(2);
  const [event, setEvent] = useInterval(time, isRepeatable);

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

  const styles = StyleSheet.create({
    header: {
      flex: 1,
      position: 'absolute',
      width: '100%',
      height,
    },
    topPosition: {
      top: 0,
    },
    bottomPosition: {
      bottom: 0,
    },
  });

  return visible ? (
    <View
      style={[
        styles.header,
        scrollPosition === 'top' ? styles.topPosition : styles.bottomPosition,
      ]}
      {...panResponder.panHandlers}
    >
      {children}
    </View>
  ) : null;
}

export default HeaderScrollBar;
