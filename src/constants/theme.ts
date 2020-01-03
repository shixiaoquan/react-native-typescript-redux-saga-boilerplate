import {Easing, Animated} from 'react-native';
import {moderateScale} from 'util/device';
import {SceneInterpolatorProps} from 'react-navigation-stack/lib/typescript/types';

export default {
  primaryColor: '#192749',
  subPrimaryColor: '#12203F',
  itemGradientColor: ['#3AECFF', '#2B78FF'],
  buttonGradientColor: ['#202753', '#0C1326'],
  hotGradientColor: ['#FF204E', '#FF7037'],
  backgroundGradientColor: ['#10152D', '#010205'],
  subTextColor: '#55739D',
  selectedColor: '#5BBFD4',
  dividerColor: '#384873',
  fieldBorderColor: '#4260AB',
  oddsRiseColor: '#44C21E',
  oddsFallColor: '#FF5955',
  placeholderColor: '#476084',
  fieldTextColor: '#39e8ff',

  borderColor: '#A7A7AA',
  underlayColor: '#f5f5f5',
  iconSize: moderateScale(22),
  iconColor: '#999',
  tabLabelColor: 'rgba(140, 140, 140, 1)',
  accentColor: '#fff',
  inactiveColor: '#999',
  dangerColor: '#D85653',
  warningColor: '#EFAE57',
  textColor: '#282828',
  textFieldHeight: moderateScale(40),
  backdropColor: 'rgba(0, 0, 0, 0.1)',
  timeLabelColor: '#A6A6A6',
  gradientColors: ['#15D1F9', '#18D1F9', '#5378F7'],
  avatarSize: moderateScale(50),
  headerHeight: moderateScale(45),
  collapsedHeaderHeight: moderateScale(35),
  headerZIndex: 9999,
  headerElevation: 2,
  extraListItemColor: '#FAFAFA',
  disabledInputBorderColor: '#dcdcdc',
  disabledInputContentColor: '#fbfbfb',
  guideDotColor: '#D7D7D7',
  guideSelectedDotColor: '#F8D04A',
  primaryFontFamily: 'PingFang SC',
  // primaryFontFamily: 'system font',
  prominentFontFamily: 'Handel Gothic ITC W02',
  pointsFontFamily: 'HandelGothicITCW02-BoldIt',

  fontSize30: moderateScale(30),
  fontSize25: moderateScale(25),
  fontSize20: moderateScale(20),
  fontSize19: moderateScale(19),
  fontSize18: moderateScale(18),
  fontSize16: moderateScale(16),
  fontSize15: moderateScale(15),
  fontSize14: moderateScale(14),
  fontSize13: moderateScale(13),
  fontSize12: moderateScale(12),
  fontSize11: moderateScale(11),
  fontSize10: moderateScale(10),
  sizeOf: (size: number) => moderateScale(size),
  fontSizeMixins: (size: number) => moderateScale(size),
  transitionConfig: () => ({
    transitionSpec: {
      duration: 200,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: (sceneProps: SceneInterpolatorProps) => {
      const {layout, position, scene} = sceneProps;

      const thisSceneIndex = scene.index;
      const width = layout.initWidth;

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0],
      });

      return {transform: [{translateX}]};
    },
  }),
};
