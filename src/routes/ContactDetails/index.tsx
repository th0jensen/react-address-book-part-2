import { useEffect, useState } from 'react'
import { ContactListProps } from '../Dashboard/components/ContactList'
import { useParams } from 'react-router-dom'
import { Contact } from '../../types'
import DetailsItem from './components/DetailsItem'

type DetailsProps = ContactListProps

export default function ContactDetails({ contacts }: DetailsProps) {
    const [contact, setContact] = useState<Contact>()
    const { id } = useParams()

    useEffect(() => {
        if (contacts && id) {
            const matchingContact = contacts.find(
                (contact: Contact) => contact.id === parseInt(id)
            )
            setContact(matchingContact)
        }
    }, [contacts, id])

    if (!contact) return <span>Loading ...</span>
    else return <DetailsItem contact={contact} />
}
