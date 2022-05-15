import styled from '@emotion/styled'

export const CardView = styled.div`
    color:white;
    align-items:center;
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin-left:10px;

    @media (max-width:540px)
    {
        margin-bottom:40px;
    }
`
export const CardName = styled.h2`
    margin:0;
`

export const CardDate = styled.p`
    color:#10EEDD;
`
export const CardBtn = styled.button`
    font-size:16px;
    weight:600;
    width:100%;
    padding:10px 0px;
`