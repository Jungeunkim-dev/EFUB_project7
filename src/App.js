import React, { useState } from 'react';
import styled, { ThemeProvider } from "styled-components";
import carticon from "./assets/carticon.png";
import myicon from "./assets/myicon.png";
import searchicon from "./assets/searchicon.png";
import logo from "./assets/logo.png";
import food1 from "./assets/food1.png";
import food2 from "./assets/food2.png";
import food3 from "./assets/food3.png";
import food4 from "./assets/food4.png";

const Header = styled.div`
  display: flex;
  flex-direction: row;
  max-width:1972px;
  justify-content: space-between;
  height:48px;
  padding-left:300px;
  padding-right:300px;
  box-shadow: 0px 2px 10px 0px silver;
  position: relative;
  z-index: 1;
`


const TextWrapper = styled.div`
  background-color:white;
  display: flex;
  flex-direction: row;
  padding-top: 18px;
  width: 362;
  gap:70px;
`

const ButtonWrapper = styled.div`
  background-color:white;
  display: flex;
  flex-direction: row;
  justify-content:center;
  width:132px;
`

const ImageWrapper1 = styled.div`
  background-color:#F7F4F0;
  display: flex;
  flex-direction: row;
  justify-content:center;
  gap:20px;
  padding-top:80px;
`

const ImageWrapper2 = styled.div`
  background-color:#F7F4F0;
  display: flex;
  flex-direction: column;
  gap:20px;
`

const ImageWrapper3 = styled.div`
  background-color:#F7F4F0;
  display: flex;
  flex-direction: row;
  gap:20px;
`

const Center1 = styled.div`
  background-color:#F7F4F0;
  display: flex;
  flex-direction: column;
  margin:0;
  padding-top:80px;
  padding-bottom: 80px;
  padding-right: 18px;
  padding-left: 18px;
`

const Center2 = styled.div`
  background-color:white;
  display: flex;
  flex-direction: column;
  min-height:100vh;
  margin:0;
  padding-top:80px;
  padding-bottom: 80px;
  padding-right: 18px;
  padding-left: 18px;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
`


const Button = styled.button`

  background: white;
  color:black;
  text-decoration:none;
  border: none;
  outline:none;
  padding:none;
  &:hover{
    color:#F6725C;
  }

`


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height:100vh;
  max-width:1972px;
  margin:0;
`


function App() {

  return (
      <Wrapper>
        <Header>
        <Button as="a" href="/"><img src={logo} style={{height:"48px", width:"118px"}}/></Button>
          <TextWrapper>
            <Button as="a" href="https://wtable.co.kr/store" >스토어</Button>
            <Button as="a" href="https://wtable.co.kr/recipes">레시피</Button>
            <Button as="a" href="https://wtable.co.kr/guide">키친가이드</Button>
          </TextWrapper>

          <ButtonWrapper>
            <img src={searchicon} style={{height: "48px", width: "44px"}}/>
            <img src={myicon} style={{height: "48px", width: "44px"}}/>
            <img src={carticon} style={{height: "48px", width: "44px"}}/>
          </ButtonWrapper>
        </Header>

        <Center1>
  
          <Column>
            <h1>| RECIPES FOR YOU |</h1>
            <h2>맞춤추천 레시피를 둘러보세요.</h2>
          </Column>

          <ImageWrapper1>
            <img src={food1} style={{height:"576px", width:"576px"}}/>
            <ImageWrapper2>
              <ImageWrapper3>
                <img src={food2} style={{height:"275px", width:"275px"}}/>
                <img src={food3} style={{height:"275px", width:"275px"}}/>
              </ImageWrapper3>
              <img src={food4} style={{height:"277px", width:"572px"}}/>
            </ImageWrapper2>
          </ImageWrapper1>
        </Center1>
        <Center2>
          <Column>
            <h1>| OUT RECIPES |</h1>
            <h2>우리의식탁과 맛있는 음식을 만들어 보세요.</h2>
          </Column>
        </Center2>

      </Wrapper>
  );
}

export default App;