import { View, Text } from 'react-native'
import React from 'react'
import { fontStyle } from '~config/styles';
import styles from '../styles';

interface AddressProps {
  label: string;
  street: string;
  city: string;
  postCode: string;
  country: string;
  state: string;
}

const AddressCard = ({
    label,
    street,
    city,
    state,
    postCode,
    country
  }: AddressProps) => {
    return (
      <View style={styles.subSection}>
        <Text style={[fontStyle.bodyMedium, styles.label]}>{label}</Text>
        <Text style={[fontStyle.bodyBig, styles.digits]}>
          {street}
        </Text>
        <Text style={[fontStyle.bodyBig, styles.digits]}>
          {city} {state} {postCode}
        </Text>
        <Text style={[fontStyle.bodyBig, styles.digits]}>
          {country}
        </Text>
      </View>
    )
}

export default AddressCard;