import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import Header from '~navigation/header'
import { RootStackScreenProps } from '~types'
import AvatarCard from '~components/AvatarCard'
import { fontStyle } from '~config/styles'
import Contacts, {Contact as IContact} from 'react-native-contacts';
import PhoneCard from './PhoneCard'
import EmailCard from './EmailCard'
import AddressCard from './AddressCard'

const Contact = ({
    navigation, route: { params: { recordID } }
}: RootStackScreenProps<'Contact'>) => {
  const [contact, setContact] = useState<IContact>()

  const name =
      contact?.displayName ? contact?.displayName :
        `${contact?.givenName} ${contact?.familyName}`;

  const getContactById = async (id: string) => {
    const contact = await Contacts.getContactById(id)
    setContact(contact)
  }

  useEffect(() => {
    getContactById(recordID)
  }, [recordID])

  return (
    <SafeAreaView style={styles.screen}>
      <Header navigation={navigation} />
      {
        contact && (
          <View style={styles.centered}>
            <AvatarCard
              givenName={contact.givenName}
              familyName={contact.familyName}
              cardStyle={styles.avatar}
              nameStyle={styles.avatarName}
            />
          </View>
        )
      }
      <Text style={[fontStyle.bodyMedium, styles.centeredText, styles.name, styles.label]}>
        {name}
      </Text>
      <Text style={[fontStyle.bodyRegular, styles.label, styles.centeredText]}>
        {contact?.phoneNumbers[0].number}
      </Text>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.details}>
        <View style={[styles.section]}>
          <Text style={[fontStyle.bodyBig, styles.label]}>Phone number</Text>
          {
            contact?.phoneNumbers.map((phone, index) => {
              const {label, number } = phone;
              return (
                <PhoneCard key={index} label={label} number={number} />
              )
            })
          }
        </View>
        {
          contact?.emailAddresses.length !== 0 && 
          <View style={styles.section}>
              <Text style={[fontStyle.bodyBig, styles.label]}>Email Address</Text>
              {
                contact?.emailAddresses.map((_email, index) => {
                  const { label, email} = _email;
                  return <EmailCard key={index} label={label} email={email}  />
                })
              }
          </View>
        }
        {
          contact?.postalAddresses.length !== 0 && (
            <View style={styles.section}>
              <Text style={[fontStyle.bodyBig, styles.label]}>Postal Address</Text>
              {contact?.postalAddresses.map((address, index) => {
                  const { label, street, city, state, postCode, country } = address;
                  return (
                    <AddressCard
                      key={index}
                      label={label}
                      street={street}
                      state={state}
                      city={city}
                      postCode={postCode}
                      country={country}
                    />
                  )
                })
              }
            </View>
          )
        }
      </ScrollView>
    </SafeAreaView>
  )
}

export default Contact;