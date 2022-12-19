import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles';
import { fontStyle } from '~config/styles';
import { IContactCard } from '~interface';
import IsFav from '../../../../assets/svg/isFavourite.svg';

const FavContact = ({
    recordID,
    displayName,
    givenName,
    familyName,
    phoneNumber,
    navigation
}: IContactCard) => {
  const name = displayName !== undefined ? displayName :
        `${givenName} ${familyName}`;
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Contact', {recordID: recordID})}>
      <View style={[styles.favView]}>
        <IsFav />
        <View style={[styles.favDetails]}>
          <Text style={[styles.name, fontStyle.bodyMedium]}>{name}</Text>
          <Text style={[styles.number, fontStyle.bodyRegular]}>{phoneNumber}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default FavContact