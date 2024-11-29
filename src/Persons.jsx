/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useFindPerson } from './persons/custom-hooks'

export const Persons = ({ persons }) => {
  const {getPerson, result} = useFindPerson();
  const [person, setPerson] = useState(null);

  const showPerson = (name) => {
    getPerson({ variables: { nameToSearch: name } });
  };

  useEffect(() => {
    if (result.data) {
      setPerson(result.data.findPerson);
    }
  }, [result]);

  if(person) {
    return(
        <div>
            <h2>{person.name}</h2>
            <div>{person.address.street }, {person.address.city }</div>
            <div>{person.phone }</div>
            <button onClick={() => {setPerson(null)}}> CLOSE </button>
        </div>
    )
  }

  if (persons === null) return null;

  return (
    <div>
      <h2>PERSONS from GraphQL</h2>
      {persons.map((person) => (
        <div
          key={person.id}
          onClick={() => {
            showPerson(person.name);
          }}
        >
          {person.name} {person.phone}
        </div>
      ))}
    </div>
  );
};
