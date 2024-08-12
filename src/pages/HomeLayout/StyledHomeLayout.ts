import styled from 'styled-components';


export const StyledHomeLayout = styled.div`
    display: flex;
    flex-direction: column;
    gap:1rem;
    position: relative;
    overflow: hidden;
    height: 100vh;
    width: 100%;
    

    .main_layout{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        max-height: 100vh;

        .right_main_content{
            width: 100%;
            height: 100%;
            position: relative;
            display: flex;
            flex-direction: column;

            .content_wrap{
                height: 100%;
                margin: 1rem;
                padding: 1rem;
                border-radius: 20px;
                backdrop-filter: blur(20px);
            }
        }
    }
`;