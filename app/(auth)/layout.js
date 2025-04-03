import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <div className='grid place-items-center min-h-screen pt-20 pb-10'>{children}</div>
  )
}

export default AuthLayout