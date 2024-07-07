import { useEffect } from 'react'
import { DashboardProps, API_URL } from '../../model'
import ContactList from './components/ContactList'
import Header from './components/Header'

export default function Dashboard({ contacts, setContacts }: DashboardProps) {
    useEffect(() => {
        fetch(API_URL)
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
            <Header />
            <ContactList contacts={contacts} />
        </div>
    )
}
