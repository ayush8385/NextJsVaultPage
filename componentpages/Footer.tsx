import React from 'react'
import Image from 'next/image'
import { FootDiv,HR } from '../componentstyles/footer'
import FirstBox from './FirstBox'
import SecondBox from './SecondBox'

import logo from '../Assets/rario_logo_2.svg'

export default function Footerr() {
  return (
    <FootDiv>
      <FirstBox/>
      <SecondBox/>
      <HR/>
      <Image src={logo}/>
    </FootDiv>
  )
}
