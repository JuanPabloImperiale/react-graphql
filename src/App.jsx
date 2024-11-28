import reactLogo from './assets/react.svg'
import './App.css'
import { gql, useQuery } from '@apollo/client'

const ALL_PERSONS = gql`
  query{
    allPersons{
      id
      name
      phone
      address{
        street
        city
      }
    }
  }
`

function App() {
  const {data, loading, error} = useQuery(ALL_PERSONS)
  console.log(data)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </>
  )
}

export default App
