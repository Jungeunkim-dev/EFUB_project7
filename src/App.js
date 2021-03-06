import React from "react";
import styled from "styled-components";
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Main from './Main'

import Nav from "./components/Nav";
import Line from "./components/Line";

import Maindish from "./pages/Maindish";
import Baking from "./pages/Baking";
import Box from "./pages/Box";
import Chinese from "./pages/Chinese";
import Diet from "./pages/Diet";
import Flour from "./pages/Flour";
import Korean from "./pages/Korean";
import Mix from "./pages/Mix";
import Relish from "./pages/Relish";
import Sidedish from "./pages/Sidedish";
import Simple from "./pages/Simple";
import Snack from "./pages/Snack";
import Special from "./pages/Special";
import Vege from "./pages/Vege";
import Welcome from "./pages/Welcome";
import Weston from "./pages/Weston";

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
  width:1792px;
  justify-content: space-around;
  height:48px;
  box-shadow: 0px 2px 10px 0px silver;
  position: fixed;
  background-color: white;
`


const TextWrapper = styled.div`
  background-color:white;
  display: flex;
  flex-direction: row;
  padding-top: 18px;
  width: 362;
  gap:70px;
`
const H1 = styled.h1`
  font-family: 'Noto Serif KR';
  font-weight: 700;
  font-size: 23px;
  letter-spacing: 5px;
  display: block;
  align-items:center;
`

const H2 = styled.h2`
  font-family: 'Noto Serif KR';
  font-weight: 400;
  font-size:18px;
  display: block;
  align-items:center;
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

const Image = styled.image`
    &:hover {
      filter:brightness(50%)
    }

`

const Text = styled.h1`
  display: none;
  font-size: 15px;
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  color:#FFFFFF;
  ${Image}:hover &{
    display: block;
    filter:brightness(100%)
  }
`

const Center1 = styled.div`
  background-color:#F7F4F0;
  display: flex;
  flex-direction: column;
  width: 1792px;
  margin:0;
  padding-top:128px;
  padding-bottom: 80px;
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
        <Button as="a" href="https://wtable.co.kr/store" >?????????</Button>
        <Button as="a" href="https://wtable.co.kr/recipes">?????????</Button>
        <Button as="a" href="https://wtable.co.kr/guide">???????????????</Button>
      </TextWrapper>

      <ButtonWrapper>
        <img src={searchicon} style={{height: "48px", width: "44px"}}/>
        <img src={myicon} style={{height: "48px", width: "44px"}}/>
        <img src={carticon} style={{height: "48px", width: "44px"}}/>
      </ButtonWrapper>
    </Header>

    <Center1>

      <Column>
        <H1>| RECIPES FOR YOU |</H1>
        <H2>???????????? ???????????? ???????????????.</H2>
      </Column>

      <ImageWrapper1>
        <a href="https://wtable.co.kr/recipes/gjHK2PjsVKDyfKw3BAnEMqN4?is_recommended=true">
        <img src={food1} style={{height:"576px", width:"576px"}}/>
        </a>
        <ImageWrapper2>
          <ImageWrapper3>
            <Image>
            <a href="https://wtable.co.kr/recipes/NCwNCJbYCFHSJqENzMHaSKGg?is_recommended=true">
            <img src={food2} style={{height:"275px", width:"275px"}}/>
            </a>
            <Text>????????? ??????</Text>
            </Image>
            <Image>
            <a href="https://wtable.co.kr/recipes/2YUDU7fBAopyvWHfHDuf59Pd?is_recommended=true">
            <img src={food3} style={{height:"275px", width:"275px"}}/>
            <Text>?????????</Text>
            </a>
            </Image>
          </ImageWrapper3>
          <a href="https://wtable.co.kr/recipes/K4J2neV6EgtwMJ7xmMPhbGQi?is_recommended=true">
          <img src={food4} style={{height:"277px", width:"572px"}}/>
          </a>
        </ImageWrapper2>
      </ImageWrapper1>
    </Center1>

    <Center2>
      <Column>
        <H1>| OUT RECIPES |</H1>
        <H2>?????????????????? ????????? ????????? ????????? ?????????.</H2>
      </Column>
      <div>
        <Router>
        <Nav></Nav>
        <Line></Line>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/maindish" component={Maindish}/>
            <Route path="/sidedish" component={Sidedish}/>
            <Route path="/snack" component={Snack}/>
            <Route path="/simple" component={Simple}/>
            <Route path="/welcome" component={Welcome}/>
            <Route path="/vege" component={Vege}/>
            <Route path="/korean" component={Korean}/>
            <Route path="/weston" component={Weston}/>
            <Route path="/special" component={Special}/>
            <Route path="/chinese" component={Chinese}/>
            <Route path="/mix" component={Mix}/>
            <Route path="/flour" component={Flour}/>
            <Route path="/relish" component={Relish}/>
            <Route path="/baking" component={Baking}/>
            <Route path="/diet" component={Diet}/>
            <Route path="/box" component={Box}/>
          </Switch>
        </Router>
      </div>
    </Center2>
  </Wrapper>
  );
}

export default App;
