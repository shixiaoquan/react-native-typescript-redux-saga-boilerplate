/*
 * @Author: ShiQuan
 * @Date: 2020-01-02 13:48:06
 * @Last Modified by: ShiQuan
 * @Last Modified time: 2020-01-02 13:51:52
 *
 * format
 */

import {Platform, Dimensions, StatusBar} from 'react-native';

/**
 * device info
 */
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const platform = Platform.OS;

const isAndroid = platform === 'android';

/**
 * Device scale
 * Ported from https://blog.solutotlv.com/size-matters/
 */
// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = (size: number) =>
  Math.ceil((deviceWidth / guidelineBaseWidth) * size);
const verticalScale = (size: number) =>
  Math.ceil((deviceHeight / guidelineBaseHeight) * size);
// const moderateScale = (size: number, factor: number = 0.5) => {
//   if (size < 3) {
//     return size;
//   }
//   return Math.ceil(size + (scale(size) - size) * factor);
// };

const moderateScale = (size: number) => size;

/**
 * check if device is iphone X
 */
const isIphoneX = () =>
  platform === 'ios' && deviceHeight >= 812 && deviceWidth >= 375;

/**
 * get header Tool Bar height
 */
const getToolBarHeight = () => {
  if (platform === 'ios') {
    if (isIphoneX()) {
      return 89;
    }
    return 64;
  }
  return 56;
};

/**
 * get footer (action bar , tab bar .etc) height
 */
const getFooterHeight = () => {
  if (isIphoneX()) {
    return 89;
  }
  return 55;
};

const getBottomPadding = () => {
  if (isIphoneX()) {
    return 34;
  }
  return 0;
};

/**
 * get StatusBar Height
 */
const getStatusBarHeight = () => {
  if (platform === 'ios') {
    if (isIphoneX()) {
      return 44;
    }
    return 20;
  }
  return StatusBar.currentHeight;
};

export {
  isIphoneX,
  isAndroid,
  deviceWidth,
  deviceHeight,
  getToolBarHeight,
  getFooterHeight,
  getStatusBarHeight,
  getBottomPadding,
  scale,
  verticalScale,
  moderateScale,
};
