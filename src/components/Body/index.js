import React, { useState } from 'react';
import styled from 'styled-components';

export const MainContainer = styled.div`
  background: #7125fa;
  width: 100%;
  height: 100vh;
`;

export const ContainerGenerator = styled.div`
  align-items: center;
  justify-content: center;
  display: grid;
  width: 100%;
  padding: 0;
  margin: 0;
  background: transparent;
`;

export const GitHub = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;

  & > a {
    margin-top: 150px;

    font-family: 'Press Start 2p';
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 48px;
    color: #000000;
    text-decoration: none;
  }

  @media (max-width: 740px) {
    & > a {
      font-size: 24px;
      line-height: 24px;
    }
  }
`;

export const TitleContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;

  h1 {
    align-items: center;
    justify-content: center;
    display: flex;
    width: 670px;
    height: 235px;
    font-family: 'Press Start 2p';
    font-style: normal;
    font-weight: normal;
    font-size: 72px;
    line-height: 72px;
    text-align: center;
    color: #ffffff;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: 10vh;
  }

  @media (max-width: 740px) {
    display: grid;
    align-items: center;
    justify-content: center;

    & > h1 {
      width: 170px;
      height: 70px;
      font-size: 40px;
      line-height: 40px;
    }
  }
`;

export const StyledButton = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;

  button {
    width: 291px;
    height: 57px;
    background: #09f000;
    border: 1px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    font-family: 'Press Start 2p';
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 18px;
    text-align: center;
    color: #000000;

    margin-top: 5vh;
    display: inline-block;
    justify-content: center;
    align-items: center;

    transition: 0.7s;
    transition: width 2s, height 2s, transform 2s;
  }

  @media (max-width: 740px) {
    & > button {
      width: 200px;
      height: 47px;
    }
  }
`;

export const StyledNumber = styled.div`
  margin-top: 42px;

  font-family: 'Press Start 2p';
  font-style: normal;
  font-weight: normal;
  font-size: 72px;
  line-height: 72px;
  text-align: center;
  color: #000000;

  @media (max-width: 740px) {
    & > p {
      font-size: 30px;
      line-height: 30px;
    }
  }
`;

function Body() {
  const [buttonState, setbuttonState] = useState('0000');

  const numberInt = () => {
    return Math.floor(Math.random() * 10000 + 0);
  };

  const handleClick = (event) => {
    if (event === 'generate') {
      setbuttonState(numberInt);
    }
  };

  return (
    <MainContainer>
      <ContainerGenerator>
        <GitHub>
          <a href="https://github.com/CaioMartins98" target="_blank" rel="noreferrer">
            @CaioMartins98
          </a>
        </GitHub>
        <TitleContainer>
          <h1>RANDOM NUMBER GENERATOR</h1>
        </TitleContainer>
        <StyledButton>
          <button type="submit" onClick={() => handleClick('generate')}>
            GENERATE
          </button>
        </StyledButton>
        <StyledNumber>
          <p>{buttonState}</p>
        </StyledNumber>
      </ContainerGenerator>
    </MainContainer>
  );
}

export default Body;
