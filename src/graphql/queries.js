import { gql } from '@apollo/client';

export const useMeQuery=gql`
{
  me{
  id
  email
  userName
  fullName
  type
  avatar
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
    avatar
    userName
    fullName
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