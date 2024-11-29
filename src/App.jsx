import reactLogo from "./assets/react.svg";
import "./App.css";
import { gql, useQuery } from "@apollo/client";
import {Persons} from "./Persons";
import {PersonForm} from "./PersonForm"

export const ALL_PERSONS = gql`
  query {
    allPersons {
      id
      name
      phone
      address {
        street
        city
      }
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(ALL_PERSONS);
  console.log(data);

  if(error) return <span style= {{color:"red "}}> {error} </span>

  return (
    <>
      <div>
        <div>
          <img src={reactLogo} className="logo react" alt="React logo" />
          {loading ? (
            <p> Loading... </p>
          ) : (
            <>
            <Persons persons={data.allPersons} />
            <PersonForm />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
