export interface Contact {
  item: {
    company: string;
    department: string;
    displayName: string;
    emailAddresses: EmailAddress[],
    phoneNumbers: Phone[];
    familyName: string;
    givenName: string;
    hasThumbnail: boolean;
    imAddresses: ImAddress[],
    isStarred: boolean;
    jobTitle: string;
    middleName: string;
    note: string | null,
  }
}

interface EmailAddress {
  label: string;
  email: string;
}

interface Phone {
  label: string;
  number: string;
}

interface ImAddress {
  username: string;
  service: string;
}