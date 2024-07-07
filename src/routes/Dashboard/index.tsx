import { SetStateAction, useEffect } from 'react'
import { Contact } from '../../types'
import ContactList from './components/ContactList'

type DashboardProps = {
    contacts: Contact[]
    setContacts: React.Dispatch<SetStateAction<Contact[]>>
}

export default function Dashboard({ contacts, setContacts }: DashboardProps) {
    useEffect(() => {
        fetch('https://boolean-uk-api-server.fly.dev/th0jensen/contact')
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data)
                setContacts(data)
            })
    }, [])

    return (
        <div>
            <h2 style={{ padding: '0px 10px' }}>Contact List</h2>
            <ContactList contacts={contacts} />
        </div>
    )
}
