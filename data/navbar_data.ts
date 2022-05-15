import logo from '../Assets/logo_rario.svg'
import soon from '../Assets/coming_soon.svg'
import search from '../Assets/search.svg';
import profile from  '../Assets/profile.svg';
import notif from  '../Assets/notification.svg';
import market from '../Assets/market.svg';
import nowLive from '../Assets/now_live.svg';

export const navLinks = [
    { 
        id:1,
        type: "img",   
        src: logo, 
        name: "",
    },
    {
      id:2,  
      type: "txt",   
      src: null,
      name: "Packs",
    },
    {
        id:3,
        type: "txt",   
        src:null, 
        name: "Vault",
    },
    {
        id:4,
        type: "txt",   
        src: null,
        name: "Match Center",
    },
    {
        id:5,
        type: "imgtxt",   
        src: nowLive,
        name: "MarketPlace",
    },
    {
        id:6,
        type: "imgtxt",   
        src: soon,
        name: "Club",
    },
    {
        id:7,
        type: "img",   
        src: search,
        name: "",
    },
    {
        id:8,
        type: "img",   
        src: profile,
        name: "",
    },
    {
        id:9,
        type: "img",   
        src: market,
        name: "",
    },
    {
        id:10,
        type: "img",   
        src: notif,
        name: "",
    },
];