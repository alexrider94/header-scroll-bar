import React, { useRef, useState } from 'react';
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
  const [event, setEvent] = useInterval(time, isRepeatable);
  const headerRef = useRef<View | null>(null);

  const onMoveHandler = (
    _event: GestureResponderEvent,
    gestureState: PanResponderGestureState,
  ) => {
    const { dy } = gestureState;
    console.log(dy);
    if (dy > 0) {
    } else if (dy < 0) {
    } else {
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
      backgroundColor: '#f05959',
    },
    topPosition: {
      top: 0,
      borderBottomRightRadius: 15,
      borderBottomLeftRadius: 15,
    },
    bottomPosition: {
      bottom: 0,
      borderTopRightRadius: 15,
      borderTopLeftRadius: 15,
    },
    bar: {
      position: 'absolute',
      backgroundColor: '#797979',
      width: '80%',
      height: 8,
      borderRadius: 30,
      alignSelf: 'center',
    },
    barTopPos: {
      top: height - 20,
    },
    barBottomPos: {
      bottom: height,
    },
  });

  return visible ? (
    <View
      ref={headerRef}
      style={[
        styles.header,
        scrollPosition === 'top' ? styles.topPosition : styles.bottomPosition,
      ]}
    >
      {scrollPosition === 'bottom' && (
        <View style={[styles.bar, styles.barBottomPos]} {...panResponder.panHandlers} />
      )}
      {children}
      {scrollPosition === 'top' && (
        <View style={[styles.bar, styles.barTopPos]} {...panResponder.panHandlers} />
      )}
    </View>
  ) : null;
}

export default HeaderScrollBar;
