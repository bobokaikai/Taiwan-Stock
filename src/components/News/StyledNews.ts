import styled from 'styled-components';


export const StyledNews = styled.div`
    padding: 1rem;
    flex: 1;
    max-height: 50%;
    
    overflow: hidden;

    .card{
        display: flex;
        align-items: center;
        flex-direction: row;
        gap:1rem;
        border-bottom: 1px solid gray;
        padding: 0.8rem 0;

        .new_image{
            width: 30%;
        }

        .card_news_title{
            font-size: 12px;
            font-weight: 400;
        }
    }
`;