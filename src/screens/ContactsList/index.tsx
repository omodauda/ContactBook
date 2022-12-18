import {Platform, Text, View, PermissionsAndroid, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import styles from './styles'
import { RootStackScreenProps } from '~types'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from '~components/CustomHeader'
import Contacts, {requestPermission} from 'react-native-contacts'
import { colors, fontStyle } from '~config/styles'
import { FavouriteContactContext } from '~context'
import ContactCard from './ContactCard'
import FavContact from './FavContact'
import { List, Contact } from '~interface'

const ContactsList = ({navigation}: RootStackScreenProps<'ContactsList'>) => {
  const [contacts, setContacts] = useState<Contact[]>()
  const {favContact} = useContext(FavouriteContactContext)

  const requestContactPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
          title: 'Contacts',
          message: 'Contact Book requires contact permission',
          buttonPositive: 'OK'
        });
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('permission granted')
          await getContacts();
        } else {
          console.log('permission rejected')
        }
      } else {
        await getContacts();
      }
    } catch (err) {
      console.warn(err)
    }
  }

  const getContacts = async () => {
    const contacts = await Contacts.getAll();
    const formattedContacts = contacts.filter(c => c.givenName !== null)
    const sortedContacts = formattedContacts.sort((a, b) => a.givenName?.localeCompare(b.givenName))
    setContacts(sortedContacts)
  }

  useEffect(() => {
    requestContactPermission()
  }, [])

  const renderItem = ({ item }: List) => {
    return (
      <ContactCard
        recordID={item.recordID}
        displayName={item.displayName}
        givenName={item.givenName}
        familyName={item.familyName}
        phoneNumber={item.phoneNumbers[0].number}
        navigation={navigation}
      />
    )
  }
  
  return (
    <SafeAreaView style={styles.screen}>
      <CustomHeader />
      {
        favContact !== undefined && (
          <View>
            <Text style={[fontStyle.bodyMedium, { color: colors.black }]}>Favourite</Text>
            <FavContact
              recordID={favContact?.recordID}
              displayName={favContact?.displayName}
              givenName={favContact?.givenName}
              familyName={favContact?.familyName}
              phoneNumber={favContact?.phoneNumbers[0].number}
              navigation={navigation}
            />
          </View>
        )
      }
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        data={contacts}
        keyExtractor={item => item.recordID}
        renderItem={renderItem}
      />
    </SafeAreaView>
  )
}

export default ContactsList;