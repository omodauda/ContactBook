import { StyleSheet } from "react-native";
import { fontSz, hp, wp } from "~config";
import { colors } from "~config/styles";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background
  },
  centered: {
    alignSelf: 'center',
  },
  avatar: {
    width: wp(100),
    height: wp(100),
    borderRadius: wp(30),
    backgroundColor: colors.black
  },
  avatarName: {
    fontSize: fontSz(32),
  },
  centeredText: {
    textAlign: 'center'
  },
  label: {
    color: colors.gray,
  },
  name: {
    marginTop: hp(10),
    marginBottom: hp(5)
  },
  digits: {
    color: colors.black
  },
  favBtn: {
    marginTop: hp(8)
  },
  details: {
    marginTop: hp(30)
  },
  section: {
    marginHorizontal: wp(16),
    marginVertical: hp(10),
    borderWidth: 0.5,
    padding: wp(8),
    borderColor: colors.gray,
    borderRadius: wp(8)
  },
  subSection: {
    marginVertical: hp(4)
  }
})

export default styles