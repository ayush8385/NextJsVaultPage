import React from 'react'
import {DIV,PARA} from '../componentstyles/firstbox'
import { MorePara } from '../data/more_data';

export default function FirstBox() {
  return (
    <DIV>
         {MorePara.map((para, index) => {
            return (
                <PARA>{para}</PARA>
            );
         })}
    </DIV>
  )
}
