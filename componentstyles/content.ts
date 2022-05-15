import styled from '@emotion/styled'

export const CARDBOX = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    
`
export const TITLE = styled.h2`
    color:white;
    opacity:60%;
    margin-top:80px;
`
export const CARDS = styled.div`
    display:flex;
    flex-wrap:nowrap;
    justify-content:space-around;
    margin-top:20px;
    align-items:flex-start;

    @media (max-width:540px)
    {
        flex-direction:column;
        align-items:center
    }
`
export const INFO = styled.div`
    display:flex;
    flex-direction:row;
    margin-left:10px;
`

export const TEXT = styled.h2`
    color:white;
    margin-left:20px;
`