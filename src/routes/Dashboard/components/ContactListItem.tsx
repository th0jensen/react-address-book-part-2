import { Link } from 'react-router-dom'
import { Contact } from '../../../types'

export type ContactListItemProps = {
    contact: Contact
}

export default function ContactListItem({ contact }: ContactListItemProps) {
    return (
        <div className='contact-wrapper'>
            <Link to={`/view/${contact.id}`} className='contact'>
                <span>
                    {contact.firstName} {contact.lastName}
                </span>
            </Link>
        </div>
    )
}
