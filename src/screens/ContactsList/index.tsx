import {Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { RootStackScreenProps } from '~types'
import { SafeAreaView } from 'react-native-safe-area-context'

const ContactsList = ({}: RootStackScreenProps<'ContactsList'>) => {
  return (
    <SafeAreaView>
      <View style={[styles.header]}>
        <Text>Contacts</Text>
        <View />
      </View>
    </SafeAreaView>
  )
}

export default ContactsList;