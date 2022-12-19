import {Platform, Text, View, PermissionsAndroid, FlatList, TouchableOpacity, Alert } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import styles from './styles'
import { RootStackScreenProps } from '~types'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from '~components/CustomHeader'
import Contacts, {checkPermission} from 'react-native-contacts'
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
          title: 'Permission required',
          message: 'ContactBook requires contact read permission',
          buttonPositive: 'OK'
        });
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          await getContacts();
        } else {
          permissionAlert()
        }
      } else if (Platform.OS === 'ios') {
        const permission = await checkPermission();
        if (permission === 'denied') {
          permissionAlert()
        }
        await getContacts();
      } else {
        await getContacts();
      }
    } catch (err) {
      // console.warn(err)
    }
  }

  const permissionAlert = () => {
    const defaultMessage = 'Allow ContactBook access to contacts'
    const androidMessage = 'settings > Apps > ContactBook > Permissions> Not Allowed > Contacts> Allow';
    const iosMessage = 'settings > ContactBook > Allow Access > Contacts';
    const message = 
      Platform.OS === 'android' ? androidMessage :
      Platform.OS === 'ios' ? iosMessage : defaultMessage;
    
    Alert.alert(
      'Contact read permission required',
      `Follow this steps to allow permission: ${message}`,
      [],
      {cancelable: false}
    )
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