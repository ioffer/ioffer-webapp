import { gql } from '@apollo/client';

export const useMeQuery=gql`
{
  me{
  id
  email
  userName
  type
   kyc {
        birthDate
        building
        city
        country
        kycStatus
        mobile
        nationality
        postalCode
        street
      }
}
}`

export const loginUser= gql`
query($userName: String!, $password: String!){
  loginUser(userName: $userName, password: $password) {
    user {
    id
    email
    userName
    type
        kyc {
        birthDate
        building
        city
        country
        kycStatus
        mobile
        nationality
        postalCode
        street
      }
    }
    token
  }
}
`;