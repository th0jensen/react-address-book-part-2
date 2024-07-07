import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className='header'>
            <Link
                to={'/'}
                style={{
                    padding: '10px',
                    textDecoration: 'none',
                }}
            >
                <span
                    style={{
                        color: 'black',
                    }}
                >
                    Contact List
                </span>
            </Link>
            <button>Add New Contact</button>
        </div>
    )
}
