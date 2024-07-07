import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ContactDetails from './routes/ContactDetails/index.tsx'
import Dashboard from './routes/Dashboard'
import { Contact } from './model'

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
                <Route path='/' element={<EmptyView />} />
            </Routes>
        </div>
    )
}

function EmptyView() {
    return (
        <div className='detail-wrapper'>
            <span>No contact selected</span>
        </div>
    )
}
