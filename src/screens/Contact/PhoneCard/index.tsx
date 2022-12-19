import { Text, View } from 'react-native'
import React from 'react'
import { fontStyle } from '~config/styles';
import styles from '../styles';

interface PhoneProps {
  label: string;
  number: string;
}

const PhoneCard = ({ label, number}: PhoneProps) => {
    return (
      <View style={styles.subSection}>
        <Text style={[fontStyle.bodyMedium, styles.label]}>{label}</Text>
        <Text style={[fontStyle.bodyBig, styles.digits]}>{number}</Text>
      </View>
    )
}

export default PhoneCard;