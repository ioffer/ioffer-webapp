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
  shops {
    id
    address
    location
    logo
    mobileNumber
    name
    phoneNumbers
    shopCategory
    tags
    website
    promotions {
      category
      description
      endDate
      id
      name
      price
      tags
      startDate
    }
  }
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