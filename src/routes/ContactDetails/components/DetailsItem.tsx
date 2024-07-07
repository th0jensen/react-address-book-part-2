import { ContactListItemProps } from '../../Dashboard/components/ContactListItem'

type DetailsItemProps = ContactListItemProps

export default function DetailsItem({ contact }: DetailsItemProps) {
    return (
        <div>
            <div>
                <img src={contact.profileImage} />
            </div>
            <p>
                {contact.firstName} {contact.lastName}
            </p>
            <p>
                {contact.street}, {contact.city}
            </p>
        </div>
    )
}
