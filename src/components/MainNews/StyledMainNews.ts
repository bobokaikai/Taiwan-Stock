import styled from 'styled-components';


export const StyledMainNews = styled.div`
    padding: 1rem;
    width: 100%;
    .news_item{
        box-sizing: border-box;
        border: 1px solid white;
        box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
        backdrop-filter: blur(6px);
        border-radius: 17px;
        cursor: pointer;
        transition: all 0.5s;
        display: flex;
        align-items: center;
        user-select: none;
        font-weight: bolder;
        width: 100%;

        &:hover{
            border: 1px solid black;
            transform: scale(0.9);
        }

        &:active{
            transform: scale(0.95) rotateZ(1.7deg);
        }
    }
`;