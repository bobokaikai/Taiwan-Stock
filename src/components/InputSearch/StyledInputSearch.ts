import styled from 'styled-components';


export const StyledInputSearch = styled.div`
  position: relative;
  z-index: 999;

  .search_wrap{
    display: flex;
    line-height: 14px;
    align-items: center;
    position: relative;
    max-width: 190px;
    font-size: 1rem;
    padding:2px;
  }
  .suggest_scrollArea{
    max-width: 190px;
    width: 100%;
    z-index: 999;
    max-height: 200px;
    
    .suggest_item {
      padding: 15px 10px;
      border-bottom: 2px solid #2d2e36;
      transition: all 0.1s ease;
      font-size: 14px !important;
      background-color: #1e1f26;
      color: #ffffff;
    
    &:hover {
      background-color: #dbdbdb !important;
      color: #000000;
    }
}
  }
  .input {
    font-family: "Montserrat", sans-serif;
    width: 100%;
    height: 45px;
    padding-left: 2.5rem;
    box-shadow: 0 0 0 1.5px #2b2c37, 0 0 25px -17px #000;
    border: 0;
    border-radius: 12px;
    background-color: #16171d;
    outline: none;
    color: #bdbecb;
    transition: all 0.25s cubic-bezier(0.19, 1, 0.22, 1);
    cursor: text;
    z-index: 0;
    
  }
  .input::placeholder {
    color: #bdbecb;
  }
  .input:hover {
    box-shadow: 0 0 0 2.5px #2f303d, 0px 0px 25px -15px #000;
  }

  .input:active {
    transform: scale(0.95);
  }

  .input:focus {
    box-shadow: 0 0 0 2.5px #2f303d;
  }

  .search-icon {
    position: absolute;
    left: 1rem;
    fill: #bdbecb;
    width: 1rem;
    height: 1rem;
    pointer-events: none;
    z-index: 1;
  }
`;