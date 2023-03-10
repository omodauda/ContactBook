import { fontSz } from "~config";

const fontStyle = {
  titleBold: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: fontSz(18),
  },
  bodyBig: {
    fontFamily: 'GeneralSans-Medium',
    fontSize: fontSz(18),
  },
  bodyMedium: {
    fontFamily: 'GeneralSans-Medium',
    fontSize: fontSz(16),
  },
  bodySmall: {
    fontFamily: 'GeneralSans-Medium',
    fontSize: fontSz(12),
  },
  bodyRegular: {
    fontFamily: 'GeneralSans-Regular',
    fontSize: fontSz(14),
  }
}

const colors = {
  background: '#FFFFFF',
  black: '#000000',
  gray: '#6E7191'
}

export {
  fontStyle,
  colors
};