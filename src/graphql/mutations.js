import { gql } from '@apollo/client';

export const registerUser= gql`
mutation ($name:String!, $userName: String!, $email:String!, $password:String!){
  registerUser(newUser: {fullName: $name, userName: $userName, email: $email, password: $password}) {
    token
    user {
      id
    }
  }
}
`;