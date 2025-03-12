import { graphql } from '../../_gqlgen';

export const GET_PEOPLE = graphql(`
    query GetPeople {
        people {
            id
            firstName
            lastName
        }
    }
`);

export const GET_PERSON = graphql(`
    query GetPerson($id: ID!) {
        person(id: $id) {
            id
            firstName
            lastName
        }
    }
`);
