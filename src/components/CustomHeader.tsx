import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AvatarCard from './AvatarCard'
import {colors, fontStyle} from '~config/styles'
import Profile from '../../assets/svg/profile.svg'
import { hp, wp } from '~config'


const CustomHeader = () => {
  return (
    <View style={[styles.header]}>
        <Profile />
        <Text style={[fontStyle.titleBold, styles.title]}>Contacts</Text>
        <View />
      </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: hp(20)
  },
  avatar: {
    width: wp(40),
    height: wp(40),
    // backgroundColor: 'gray'
  },
  title: {
    color: colors.black
  }
})

export default CustomHeader;