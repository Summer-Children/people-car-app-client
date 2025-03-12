import { graphql } from '../../_gqlgen'

export const GET_CARS = graphql(`
    query GetCars {
        cars {
            id
            year
            make
            model
            price
            personId
        }
    }
`);

export const GET_CAR = graphql(`
    query GetCar($id: ID!) {
        car(id: $id) {
            id
            year
            make
            model
            price
            personId
        }
    }
`);
