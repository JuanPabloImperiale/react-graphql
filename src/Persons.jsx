export const Persons = ({ persons }) => {
  console.log("hola", persons);

  if (persons === null) return null;

  return (
    <div>
      <h2>PERSONS from GraphQL</h2>
      {persons.map( p => 
        <div key={p.id}>
          {p.name} {p.phone}
        </div>
      )}
    </div>
  );
};
