import React from 'react'
import Image from "next/image";
import { TITLE,CARDBOX,CARDS,INFO,TEXT} from '../componentstyles/content'
import Card from '../componentpages/Card'
import errorimg from '../Assets/error.svg'
import { Packs } from "../data/card_data";

export default function Content() {
  return (
    <CARDBOX>

      <TITLE>
        Unopened Packs(2)
      </TITLE>

      <CARDS>
            {Packs.map((pack, index) => {
            return (
              <Card 
                    src={pack.src}
                    name={pack.name}
                    date={pack.date}
                    btn={pack.btn}/>
            );
            })}
      </CARDS>

      <TITLE>
        Opened Packs
      </TITLE>

      <INFO>
        <Image src={errorimg}/>
        <TEXT>You have not opened any packs yet</TEXT>
      </INFO>

    </CARDBOX>
  )
}
