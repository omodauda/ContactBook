import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AvatarCard from './AvatarCard'
import {fontStyle} from '~config/styles'
import Profile from '../../assets/svg/profile.svg'
import { wp } from '~config'


const CustomHeader = () => {
  return (
    <View style={[styles.header]}>
        <AvatarCard style={styles.avatar}>
          <Profile />
        </AvatarCard>
        <Text style={[fontStyle.titleBold]}>Contacts</Text>
        <View />
      </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(16)
  },
  avatar: {
    width: wp(40),
    height: wp(40),
    // backgroundColor: 'gray'
  }
})

export default CustomHeader;