
import styled from "styled-components";

export const AnimeCard = styled.div`
    display: flex;
    background-color: #151B26;
    margin-top: 14.5px;
    width: 100%;

    p {
        color: #BFBFBF;
        font-size: 14px;
        margin: 0;
        margin-top: 5px;
    }

    h4 {
        color: white;
        line-height: 19px;
        margin: 0;
        margin-top: 13px;
    }
`
export const AnimeCardInfo = styled.div`
    padding-left: 20px;
`

export const AnimeInfo = styled.div`
    display: flex;
    margin-bottom: 50px;
`

export const MainAnimeInfo = styled.div`
    
    color: white;

    
    span {
        color: #BFBFBF;
        font-family: 'Inter';
        margin-left: 20px;
        
    }

    span:last-of-type {
        margin-left: 0;
    }
`

export const Comments = styled.div`
    margin-bottom: 50px;
`

export const Comment = styled.div`
    border-bottom: 1px solid #151B26;
    padding-bottom: 30px;
    display: flex;
    margin-bottom: 30px;
    h3 {
        color: white;

    }

    p {
        color: #BFBFBF;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        
    }
`

export const Related = styled.div`

`