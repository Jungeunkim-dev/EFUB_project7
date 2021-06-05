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
  width: 1792px;
  margin:0;
  padding-top:80px;
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
