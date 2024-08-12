import styled from 'styled-components';



export const StyledDeleteButton = styled.div`
    position: absolute;
    top:0;
    right:0;
    z-index:300;
    transform: translate(10px, -10px);

    .bin-button {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        border-radius: 15px;
        background-color: rgb(255, 95, 95);
        cursor: pointer;
        /* border: 1px solid rgb(255, 201, 201); */
        transition-duration: 0.3s;
        padding: 5px;

}
        .bin-bottom {
            width: 15px;
        }
        .bin-top {
            width: 17px;
            transform-origin: right;
            transition-duration: 0.3s;
        }
        .bin-button:hover .bin-top {
            transform: rotate(45deg);
        }
        .bin-button:hover {
            background-color: rgb(255, 0, 0);
        }
        .bin-button:active {
            transform: scale(0.9);
        }

`;