import { useState } from "react";

function Person() {
    const [person, setPerson] = useState({ name: "", age: 100 });
  
    // GOOD - Do this!
    const handleIncreaseAge = () => {
      // copy the existing person object into a new object
      // while updating the age property
      const newPerson = { ...person, age: person.age + 1 };
      setPerson(newPerson);
    };

    const changePerson = (e) => {
        const newPerson = {...person, name: e.target.value}
        setPerson(newPerson)
    }

    return (
      <>
        <form>
            <label htmlFor="firstName">Enter first name: {''}</label>
            <input type="text" name="firstName" id="firstName" onChange={changePerson}></input>

            <label htmlFor="lastName">Enter last name: {''}</label>
            <input type="text" name="lastName" id="lastName" onChange={changePerson}></input>
        </form>
        
        
        <h1>{person.name}</h1>
        <h2>{person.age}</h2>
        <button onClick={handleIncreaseAge}>Increase age</button>
     </>
    );
}

export default Person
  