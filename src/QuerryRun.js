import React from 'react'
import {gql} from '@apollo/client'
import {useQuery} from '@apollo/client'

const users= gql`
{
    users{
      id
    userName
    email
    type
  }
  }
`;
function QuerryRun() {
    const { loading, error, data } = useQuery(users);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

        return data.users.map(( user) => (
            <div key={user.id}>
              <p>
                {user.username}: {user.email} :{user.type}
              </p>
            </div>
          ));
}

export default QuerryRun
