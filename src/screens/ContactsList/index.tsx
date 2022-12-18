import {Platform, Text, View, PermissionsAndroid, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { RootStackScreenProps } from '~types'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from '~components/CustomHeader'
import Contacts, {requestPermission} from 'react-native-contacts'
import AvatarCard from '~components/AvatarCard'
import { fontStyle } from '~config/styles'

const ContactsList = ({navigation}: RootStackScreenProps<'ContactsList'>) => {
  const [contacts, setContacts] = useState<any>()

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

  // console.log('contacts', contacts[60])

  const renderItem = ({ item }) => {
    const name =
      item.displayName ? item.displayName :
        `${item.givenName} ${item.familyName}`;
  
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Contact', {recordID: item.recordID})}>
        <View style={styles.contactView}>
          <AvatarCard givenName={item.givenName} familyName={item.familyName} cardStyle={styles.avatar} />
          <View style={styles.contactDetails}>
            <Text style={[styles.name, fontStyle.bodyMedium]}>{name}</Text>
            <Text style={[styles.number, fontStyle.bodyRegular]}>{item.phoneNumbers[0].number}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  
  return (
    <SafeAreaView style={styles.screen}>
      <CustomHeader />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        data={contacts}
        keyExtractor={item => item.recordID}
        renderItem={renderItem}
      />
    </SafeAreaView>
  )
}

export default ContactsList;