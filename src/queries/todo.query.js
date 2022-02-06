import { gql } from "@apollo/client";

export const TODO_QUERY = gql`
query Todo {
  todo @client {
      id
      title
      description
      done
  }
}
`
export const UPDATE_TODO_QUERY = gql`
query Todo ($id: Int!) {
  todo @client {
      id
      title
      description
      done
  }
}
`