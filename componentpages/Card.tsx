import React from 'react'
import type { NextPage } from 'next'
import Image, { StaticImageData } from "next/image";
import { CardView,CardName,CardDate,CardBtn} from '../componentstyles/card'
import { Url } from 'url';
import { Path } from 'typescript';
interface Props {
  src:StaticImageData
  name:string
  date:string
  btn:boolean
}
const Card:NextPage<Props> = ({src,name,date,btn}) => {
  return (
    <CardView>
        <Image src={src} height="324px" width="234px"/>
        <CardName>{name}</CardName>
        <CardDate>{date}</CardDate>
        {btn == true ?<CardBtn>OPEN PACK</CardBtn>:null}
    </CardView>
  )
}

export default Card