
import { useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import {ALL_PERSONS} from './App'

const CREATE_PERSON = gql`
    mutation createPerson( $name: String! , $phone: String , $street : String!, $city: String! ){
    addPerson(
        name: $name
        phone: $phone
        street: $street
        city: $city
    ){
        name
        phone
        address{
            city
            street
        }
        id
    }
}
`

export const PersonForm = () => {
    const [name, setName ] = useState('')
    const [phone, setPhone ] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity ] = useState('')

    const [createPerson] = useMutation(CREATE_PERSON, {
        refetchQueries: [{ query: ALL_PERSONS}]
    })

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