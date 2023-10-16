import React from 'react'
import { useRouter } from 'next/router'

const UserId = () => {

    const router =useRouter()

  return (
    <div>
      <h1>User Id: {router.query.user_id}</h1>
    </div>
  )
}

export default UserId
