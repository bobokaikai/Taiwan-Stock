import styled from 'styled-components';


export const StyledSideBar = styled.div`
    border-right: 1px solid gray;
    padding: 1rem;
    width: 20%;
    height: 100%;
    position: relative;

    .link_wrap{
        display: flex;
        flex-direction: column;

        .navLink_container{
            display: flex;
            flex-direction: row;
            align-items: center;
            gap:1rem;
            padding: 1rem;
            margin: 1rem 0;
            
            
            .nav_icon{
                font-size: var(--body2);
            }
            .nav_text{
                font-weight: 500;
                font-size: var(--body3);
            }

            &:hover{
                background-color: #ffffff;
                transition: 0.3s ease-in all;
                color:#1a1a1a;
            }
        }
        .avatar_container{
            padding: 1rem;
            margin: 1rem 0;
        }

        .logo_name{
            margin: 1rem;
            font-size: var(--body2);
        }
    }
    
`;