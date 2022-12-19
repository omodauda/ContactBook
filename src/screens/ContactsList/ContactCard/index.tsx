import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles'
import { fontStyle } from '~config/styles';
import AvatarCard from '~components/AvatarCard';
import { IContactCard } from '~interface';

const ContactCard = ({
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
        <View style={styles.contactView}>
        <AvatarCard
          givenName={givenName}
          familyName={familyName}
          cardStyle={styles.avatar}
        />
          <View style={styles.contactDetails}>
            <Text style={[styles.name, fontStyle.bodyMedium]}>{name}</Text>
            <Text style={[styles.number, fontStyle.bodyRegular]}>{phoneNumber}</Text>
          </View>
        </View>
    </TouchableOpacity>
  )
}

export default ContactCard