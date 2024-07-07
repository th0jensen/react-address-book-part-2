import { DetailsItemProps } from '../../../model'

export default function DetailsItem({ contact }: DetailsItemProps) {
    return (
        <div className='detail-wrapper'>
            <div className='detail'>
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
        </div>
    )
}
