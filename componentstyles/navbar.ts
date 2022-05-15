import styled from '@emotion/styled'

export const Nav =styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between ;
    align-items:center;
    padding: 0;
    margin:0;

    @media (max-width:540px)
    {
        display:flex;
        flex-wrap:wrap;
        gap:2rem;
        justify-content:center;
    }
`

export const List = styled.div`
    text-style:none;
    color: white;
    padding:10px 20px;
    position:relative;
    @media (max-width:540px){
        padding:0px 5px;
    }

`
export const Select=styled.div`
    background: linear-gradient(180deg, rgba(255, 153, 109, 0) 43.13%, rgba(250, 0, 0, 0.673) 100%);
    &:after{
        width:45px;
        height:2px;
        background-color:red;
    }
`

export const Dot = styled.div`
    position: absolute;
    top: 0px;
    right: 12px;
    padding: 3px 6px;
    border-radius: 50%;
    font-size:13px;
    background: radial-gradient(79.55% 79.55% at 39.95% 8.68%, #FF996D 0%, #FF0000 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #EE3233;
    color: white;
    @media (max-width:540px)
    {
        right:-4px;
        top:-10px;
    
    }
    
`