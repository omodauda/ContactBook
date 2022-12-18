export interface List {
  item: Contact
}

export interface Contact {
  recordID: string;
  displayName: string | undefined;
  givenName: string;
  familyName: string;
  phoneNumbers: Phone[];
}

interface Phone {
  label: string;
  number: string;
}

export interface IContactCard {
  recordID: string;
  displayName: string | undefined;
  givenName: string;
  familyName: string;
  phoneNumber: string;
  navigation: any;
}


