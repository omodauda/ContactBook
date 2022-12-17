import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
import { RFPercentage } from 'react-native-responsive-fontsize';

export const hp = (val: number) => {
  // get scaled height equivalent of design height
  const num = val / 8.12;
  return heightPercentageToDP(num);
}

export const wp = (val: number) => {
  // get scaled height equivalent of design width
  const num = val / 3.75;
  return widthPercentageToDP(num);
};

export const fontSz = (val: number) => RFPercentage(val / 8.12);