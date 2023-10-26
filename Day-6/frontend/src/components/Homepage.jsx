import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/User.context';

const Homepage = () => {
  const [user, setUser] = useState({});
  const { state, login, logout } = useContext(AuthContext);
  console.log(user, "- user updated state")

  useEffect(() => {
    if (state.user) {
      setUser(state?.user)
    }
  }, [state])
  return (
    <>
      <h2>Welcome To Homepage {user?.name}</h2>

      {/* <div>
        {state.user ? (
          <div>Homepage- {user?.name}</div>
        ) : (
          <div>Homepage</div>
        )}
      </div> */}
    </>
  )
}

export default Homepage