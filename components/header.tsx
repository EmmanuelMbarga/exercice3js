import React from 'react'
import { FizziLogo } from './fizziLogo'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='flex justify-center items-center py-4 -mb-28 '>
      <FizziLogo/>
    </header>
  )
}

export default Header