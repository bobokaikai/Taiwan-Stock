import styled from 'styled-components';


export const StyledStockCard = styled.div`
    .card_container{
        color: white;
        position: relative;
        font-family: sans-serif;
        aspect-ratio: 1/1;


        &::before,
        &::after {
            content: "";
            /* background-color: #fab5704c; */
            position: absolute;
        }

        &::before {
            border-radius: 50%;
            width: 3rem;
            height: 6rem;
            top: 30%;
            right: 7%;
        }
        & .card {
            /* width: 100%;
            height: 100%; */
            padding: 1rem;
            background-color: rgba(255, 255, 255, 0.074);
            border: 1px solid rgba(255, 255, 255, 0.222);
            -webkit-backdrop-filter: blur(20px);
            backdrop-filter: blur(20px);
            border-radius: 0.7rem;
            transition: all ease 0.3s;
        }
        & .card:hover {
            box-shadow: 0px 0px 20px 1px #ffbb763f;
            border: 1px solid rgba(255, 255, 255, 0.454);
        }

        .card{
            padding: 0.8rem;
            color: #ffff;
            /* background-color: #fff;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); */
            max-width: 300px;
            border-radius: 20px;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            gap:4px 3px;
            grid-template-areas: 
                "stock_name stock_name reference_today"
                "highest_price lowest_price close_price"
                "change_price change_price change_price"
            ;
            font-weight: 500;
            /* background: linear-gradient(#ffff, #ffff) padding-box,
                linear-gradient(145deg, transparent 35%,#e81cff, #40c9ff) border-box;
            border: 2px solid transparent; */
            .block{
                display: flex;
                flex-direction: column;
                justify-content:center;
                align-items: start ;
            }

            .num{
                padding-left: 1rem;
                font-size: 1.1rem;
            }
            &:hover {
                /* transform: translateY(-20px); */
                cursor: pointer;
            }
        }   
    }
    

    .stock_name{
        grid-area: stock_name;
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        color:#1a1a1a;
        border-radius: 20px;
    }
    .reference_today{
        grid-area: reference_today;
    }
    .highest_price{
        grid-area: highest_price;
    }
    .lowest_price{
        grid-area: lowest_price;
    }
    .close_price{
        grid-area: close_price;
    }
    .change_price{
        grid-area: change_price;
    }
`;