import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { wp } from '~config';

interface Props{
  children: any;
  style: object
}

const AvatarCard: React.FC<Props> = ({children, style}) => {
  return (
    <View style={[styles.card, style]}>
      {
        children
      }
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(16)
  }
})

export default AvatarCard;