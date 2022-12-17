import {Platform, Text, View, PermissionsAndroid, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { RootStackScreenProps } from '~types'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from '~components/CustomHeader'
import Contacts, {requestPermission} from 'react-native-contacts'
import AvatarCard from '~components/AvatarCard'
import { fontStyle } from '~config/styles'
import { Contact } from '~intefaces/Contact'

const ContactsList = ({ }: RootStackScreenProps<'ContactsList'>) => {
  const [contacts, setContacts] = useState<any>()

  const requestContactPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'Contact Book requires contact permission',
        buttonPositive: 'OK'
      });
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('permission granted')
        const _contacts = await getContacts();
        setContacts(_contacts)
      } else {
        console.log('permission rejected')
      }
    } catch (err) {
      console.warn(err)
    }
  }

  const getContacts = async () => {
    const contacts = await Contacts.getAll();
    const formattedContacts = contacts.filter(c => c.displayName !== null).map((c, index) => {
      return {
        id: index,
        displayName: c.displayName,
        phoneNumbers: c.phoneNumbers,
      }
    })
    const sortedContacts = formattedContacts.sort((a, b) => a.displayName?.localeCompare(b.displayName))
    return sortedContacts
  }

  useEffect(() => {
    requestContactPermission()
  }, [])

  // console.log('contacts', contacts[72])

  const RenderItem = ({item}: Contact) => {
    return (
      <TouchableOpacity>
        <View style={styles.contactView}>
          <AvatarCard name={item.displayName} style={styles.avatar} />
          <View style={styles.contactDetails}>
            <Text style={[styles.name, fontStyle.bodyMedium]}>{item.displayName}</Text>
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
        keyExtractor={item => item.id}
        renderItem={({item}) => <RenderItem item={item} />}
      />
    </SafeAreaView>
  )
}

export default ContactsList;