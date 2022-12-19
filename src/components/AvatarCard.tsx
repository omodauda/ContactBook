import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { wp } from '~config';
import { fontStyle, colors } from '~config/styles';

interface Props{
  cardStyle: object
  givenName: string;
  familyName: string;
  nameStyle?: object;
}

const AvatarCard: React.FC<Props> = ({ givenName, familyName, cardStyle, nameStyle }) => {
  const first = givenName.split('')[0].toUpperCase();
  const second = familyName !== '' ? familyName.split('')[0].toUpperCase() : '';
  const initials = `${first}${second}`
  return (
    <View style={[styles.card, cardStyle]}>
      <Text style={[fontStyle.bodySmall, nameStyle, {color: colors.background}]}>{initials}</Text>
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