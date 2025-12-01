import React from 'react'
import Image from 'next/image'
import name from '../../assets/name.jpeg'
const page = () => {
  return (
    <div>
      <Image src={name} alt="name jpeg" />
            <Image src={name} alt="name jpeg" width={400} />

    </div>
  )
}

export default page
