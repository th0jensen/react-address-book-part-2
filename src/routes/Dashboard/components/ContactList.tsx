import { Contact } from '../../../types'
import ContactListItem from './ContactListItem'

export type ContactListProps = {
    contacts: Contact[]
}

export default function ContactList({ contacts }: ContactListProps) {
    return (
        <div>
            {contacts.map((contact) => (
                <ContactListItem key={contact.id} contact={contact} />
            ))}
        </div>
    )
}
