import './App.css'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './routes/Dashboard'
import { useState } from 'react'
import { Contact } from './types.ts'
import ContactDetails from './routes/ContactDetails/index.tsx'

export default function App() {
    const [contacts, setContacts] = useState<Contact[]>([])

    return (
        <div className='wrapper'>
            <aside className='sidebar'>
                <Dashboard contacts={contacts} setContacts={setContacts} />
            </aside>
            <Routes>
                <Route
                    path='/view/:id'
                    element={<ContactDetails contacts={contacts} />}
                />
            </Routes>
        </div>
    )
}
