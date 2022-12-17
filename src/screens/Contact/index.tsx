import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import Header from '~navigation/header'
import { RootStackScreenProps } from '~types'
import AvatarCard from '~components/AvatarCard'
import {fontStyle } from '~config/styles'

const Contact = ({
    navigation, route: { params: { contact } }
}: RootStackScreenProps<'Contact'>) => {
  console.log(contact.item.emailAddresses)
  const { item: { displayName, phoneNumbers, emailAddresses } } = contact;
  const phone = phoneNumbers[0];
  return (
    <SafeAreaView style={styles.screen}>
      <Header navigation={navigation} />
      <View style={styles.centered}>
        <AvatarCard
          name={displayName}
          cardStyle={styles.avatar}
          nameStyle={styles.avatarName}
        />
      </View>
      <Text
        style={[
        fontStyle.bodyMedium,
        styles.centeredText,
        styles.name,
        styles.label
      ]}>
        {displayName}
      </Text>
      <Text
        style={[
          fontStyle.bodyRegular,
          styles.label,
          styles.centeredText
        ]}>
        {phoneNumbers[0].number}
      </Text>

      <View style={styles.details}>
        <View style={[styles.section]}>
          <Text style={[fontStyle.bodyBig, styles.label]}>Phone numbers</Text>
          {
            phoneNumbers.map(phone => {
              return (
                <View style={styles.subSection}>
                  <Text style={[fontStyle.bodyMedium, styles.label]}>{phone.label}</Text>
                  <Text style={[fontStyle.bodyBig, styles.digits]}>{phone.number}</Text>
                </View>
              )
            })
          }
        </View>
        {
          emailAddresses.length !== 0 && 
          <View style={styles.section}>
              <Text style={[fontStyle.bodyBig, styles.label]}>Email Addresses</Text>
              {
                emailAddresses.map((_email, index) => {
                  const { label, email } = _email;
                  return (
                    <View key={index} style={styles.subSection}>
                      <Text style={[fontStyle.bodyMedium, styles.label]}>{label}</Text>
                      <Text style={[fontStyle.bodyBig, styles.digits]}>{email}</Text>
                    </View>
                  )
                })
              }
          </View>
        }
      </View>
    </SafeAreaView>
  )
}



export default Contact;