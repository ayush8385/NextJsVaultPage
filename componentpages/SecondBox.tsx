import Link from 'next/link'
import React from 'react'
import {DIV,DIVBOX} from '../componentstyles/secondbox'
import { PARA } from '../componentstyles/firstbox'
import { ExtLinks } from '../data/external_links'

export default function SecondBox() {
  return (
    <DIV>
            {ExtLinks.map((extlink, index) => {
            return (
                <Link href={extlink.link}><PARA>{extlink.name}</PARA></Link>
            );
            })}
    </DIV>
  )
}
