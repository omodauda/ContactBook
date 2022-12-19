import { Text, View } from 'react-native'
import React from 'react'
import styles from '../styles';
import { fontStyle } from '~config/styles';

interface EmailProps {
  label: string;
  email: string;
}

const EmailCard = ({label, email}: EmailProps) => {
  return (
    <View style={styles.subSection}>
      <Text style={[fontStyle.bodyMedium, styles.label]}>{label}</Text>
      <Text style={[fontStyle.bodyBig, styles.digits]}>{email}</Text>
    </View>
  )
}

export default EmailCard;