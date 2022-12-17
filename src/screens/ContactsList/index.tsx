import {Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { RootStackScreenProps } from '~types'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from '~components/CustomHeader'

const ContactsList = ({}: RootStackScreenProps<'ContactsList'>) => {
  return (
    <SafeAreaView style={styles.screen}>
      <CustomHeader />
      
    </SafeAreaView>
  )
}

export default ContactsList;