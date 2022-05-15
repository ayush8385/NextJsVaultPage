import styled from '@emotion/styled'

export const TAG = styled.div`
    color:white;
    text-transform:uppercase;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    position:relative;
    margin-top:60px;

    @media (max-width:540px)
    {
        margin-top:40px;
        flex-direction:column;
    }
`

export const T1 = styled.h3`
    opacity:50%;
    margin:0px 30px;

    @media (max-width:540px)
    {
        margin-bottom:20px;
    }
`

export const T2 = styled.h1`
    margin:0px 30px;
`