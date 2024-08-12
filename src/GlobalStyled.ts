import {createGlobalStyle} from 'styled-components';



export const GlobalStyled=createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    * {
       
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    }
    
    body {
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 'Poppins',sans-serif;
    }

    
    :root {
    /* color */
    --primary: #ffbe0b;
    --second: #3A86FF;
    --third:#FB5607;
    --white:#fff;


    /*typography*/
        --heading1: clamp(2rem, 5vw, 5rem); /*max:80px*/
        --heading2: clamp(2rem, 5vw, 4rem); /*max:72px*/
        --title: clamp(1.5rem, 5vw, 3rem); /*max:48px*/
        --subtitle: clamp(1rem, 5vw, 2rem); /*max:32px*/
        --body1: clamp(1rem, 5vw, 2rem); /*max:32px*/
        --body2: clamp(1rem, 5vw, 1.5rem); /*max:24px*/
        --body3: clamp(0.75rem, 5vw, 1rem); /*max:16px*/
    }


    img {
        display: block;
        font-weight: 300;
        height: auto;
        line-height: 2;
        position: relative;
        text-align: center;
        width: 100%;
    }   

    .stack-lg {
        display: grid;
        gap: (--space-lg);
    }




    .all_title_style{
        
    }









`