import { SetStateAction } from 'react'

export const API_URL = 'https://boolean-uk-api-server.fly.dev/th0jensen/contact'

export type Contact = {
    id: number
    firstName: string
    lastName: string
    street: string
    city: string
    email?: string
    favouriteColor?: string
    gender?: string
    jobTitle?: string
    latitude?: number
    longitude?: number
    profileImage?: string
}

export type DashboardProps = {
    setContacts: React.Dispatch<SetStateAction<Contact[]>>
} & ContactListProps

export type ContactListProps = {
    contacts: Contact[]
}

export type ContactListItemProps = {
    contact: Contact
}

export type DetailsProps = ContactListProps
export type DetailsItemProps = ContactListItemProps
