import { StyleSheet } from 'react-native';
import { hp, wp } from '~config';
import { colors } from '~config/styles';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: hp(15)
  },
  list: {
    marginHorizontal: wp(16),
    paddingVertical: hp(16)
  },
  contactView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(12)
  },
  avatar: {
    width: wp(53),
    height: wp(53),
    backgroundColor: colors.black
  },
  contactDetails: {
    marginLeft: wp(13),
    borderBottomWidth: 0.5,
    borderColor: colors.gray,
    width: '100%',
    paddingVertical: hp(10)
  },
  name: {
    color: colors.black,
    marginBottom: hp(5)
  },
  number: {
    color: colors.gray
  }
})

export default styles;