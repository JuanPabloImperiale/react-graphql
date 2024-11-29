
import { useState } from 'react'
import { useAddPerson} from './persons/custom-hooks'


export const PersonForm = () => {
    const [name, setName ] = useState('')
    const [phone, setPhone ] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity ] = useState('')
    const createPerson = useAddPerson()

    const handleSubmit = e =>{
        e.preventDefault()
        createPerson({variables: { name, phone, street, city }})

        setName('')
        setPhone('')
        setStreet('')
        setCity('')
    }

    return(
        <div>
            <h2>Create new Person</h2>
            <form onSubmit={handleSubmit}>
                <input placeholder='Name' value={name} onChange={ evt => setName(evt.target.value )} />
                <input placeholder='Phone' value={phone} onChange={ evt => setPhone(evt.target.value )} />
                <input placeholder='Street' value={street} onChange={ evt => setStreet(evt.target.value )} />
                <input placeholder='City' value={city} onChange={ evt => setCity(evt.target.value )} />

                <button>Add Person</button>
            </form>

        </div>
    )

}