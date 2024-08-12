import styled from 'styled-components';


export const StyledNavBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    font-size: var(--body2);
    padding: 0.5rem;
    border-bottom: 1px solid gray;


    .logo_name{
        font-size: var(--subtitle);
    }
`;