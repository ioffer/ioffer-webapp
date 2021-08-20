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

export const addkyc= gql`
mutation ($id: String!,$mobile: String!, $nationality: String!, $city: String!, $birthDate:String!, $postalCode: String!,$country:String!,$building: String!,$street: String!){
    addKyc(
      id: $id,
      mobile: $mobile,
      nationality:  $nationality,
      city: $city,
      country: $country,
      street: $street,
      building: $building,
      birthDate: $birthDate,
      postalCode: $postalCode,
    ){
      id
      userName
      email
      kyc{
        country
        kycStatus
      }
    }
  }
`
;

export const imageUploader =gql `
mutation( $file: Upload!) {
  imageUploader(file: $file)
}
`

export const addShop=gql`
mutation ($name: String!, $website: String!, $shopCategory: String!,$logo: String!, $tags: String!, $phoneNumbers: String!, $location: String!, $address: String!, $mobileNumber: String!) {
    registerShop(newShop: {name: $name, shopCategory: $shopCategory, logo: $logo, tags: $tags, website: $website, phoneNumbers:  $phoneNumbers, mobileNumber:$mobileNumber, location: $location, address: $address}) {
      id
    }
  }`