import { gql, useQuery } from '@apollo/client';


interface Person {
    id: string;
    firstName: string;
    lastName: string;
}

function App() {
    const { loading, error, data } = useQuery<{ people: Person[] }>(GET_PEOPLE);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>People List</h1>
            <ul>
                {data?.people.map((person) => (
                    <li key={person.id}>
                        {person.firstName} {person.lastName}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
