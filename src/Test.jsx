function List(props) {
    if(!props.animals) {
        return <div>Loading...</div>
    }

    if(props.animals.length === 0) {
        return <div>There are no animals in this list..</div>
    }

    return (
        <ul>
            {props.animals.map((animal) => {
                return <li key={animal.id}>{animal.type}, {animal.id}</li>
            })}
        </ul>
    )
}


function TestComp() {

    const animalsObj = [
        {
            type: "Lion",
            id: crypto.randomUUID()
        },
        {
            type: "Zebra",
            id: crypto.randomUUID()
        },
        {
            type: "Snake",
            id: crypto.randomUUID()
        },
        {
            type: "Bat",
            id: crypto.randomUUID()
        }
    ]

    return (
        <div>
            <h1>Animals: </h1>
            <ul>
                <List animals={animalsObj} />
            </ul>
        </div>
    )
}

export default TestComp



