import reactLogo from "./assets/react.svg";
import "./App.css";
import {Persons} from "./Persons";
import {PersonForm} from "./PersonForm"
import {usePersons} from "./persons/custom-hooks"



function App() {
  const { data, loading, error } = usePersons();
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
