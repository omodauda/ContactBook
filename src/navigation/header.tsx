import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Caret from '../../assets/svg/caret-back.svg';
import { hp, wp } from '~config';
import { colors } from '~config/styles';

interface Props {
  navigation: any;
  title?: string;
}

const Header: React.FC<Props> = ({navigation}) => {
  return (
    <View style={[styles.header]}>
      <Pressable onPress={navigation.goBack}>
        <View style={styles.backButton}>
          <Caret />
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: hp(20),
    paddingHorizontal: wp(16),
  },
  backButton: {
    width: wp(34),
    height: wp(34),
    borderRadius: wp(10),
    borderWidth: wp(1),
    borderColor: colors.gray,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Header