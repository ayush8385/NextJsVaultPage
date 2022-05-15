import React from "react";
import Image from "next/image";
import { Nav,List,Select,Dot} from "../componentstyles/navbar";
import Link from "next/link";
import { navLinks } from "../data/navbar_data";


export default function Navbar(){
    return (
        <Nav>
            {navLinks.map((link, index) => {
            return (
                link.type=='img' && link.id==10?
                <List><Image src={link.src}/><Dot>2</Dot></List>:
                link.type=='img'?
                <List><Image src={link.src}/></List>:
                link.type=='imgtxt'?
                <List><Link href="/con">{link.name+" "}</Link><Image src={link.src}/></List>:
                link.id==2?
                <Select><List><Link href="#">{link.name}</Link></List></Select>:
                <List><Link href="#">{link.name}</Link></List>       
            );
            })}

        </Nav>
    )
}