import styled from 'styled-components';


export const StyledMarqueeIndex = styled.div`
    .marquee_wrap{
        position: relative;
        padding:0.2rem 0;
        &::before{
            content: "";
            position: absolute;
            left: 0%;
            top: 0%;
            bottom: 0%;
            /* transform: translateY(-50%); */
            bottom: 0;
            width: 30%;
            height: 100%;
            background-image: linear-gradient(90deg, #ffffff1c, transparent);
            z-index: 2;
            border-radius: 10px 0 0 10px;
        }
        &::after{
            content: "";
            position: absolute;
            right: 0%;
            top: 0%;
            bottom: 0%;
            /* transform: translateY(-50%); */
            bottom: 0;
            width: 30%;
            height: 100%;
            background-image: linear-gradient(-90deg, #ffffff1c, transparent);
            z-index: 9;
            border-radius: 0 10px 10px 0;
        }

        .marquee_item{
            transition: all 0.3s ease;
        }
    }
    background-repeat: no-repeat;
`;