import styled from "styled-components";
import { useState,useEffect } from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"


import step from '../img/step.png';
import clock from '../img/clock.png';

import NavItem from "../components/NavItem";

const Card = styled.div`
    //border: black solid 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 300px;
    width:300px;
    height:370px;
    margin-bottom: 50px;
`

const Profile = styled.image`
    margin-top:20px;
    //border:2px solid #646568;
    height:280px;
    width:280px;
    background: url(${(props) => props.src});
    //비율때문에 해야한다
    background-size: cover;
    //중앙정렬
    background-position: 50% 50%;
    object-fit: cover;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 1300px;
    margin: 0 auto;
`

function Korean(){

  const [data,setData] = useState();
  useEffect(async ()=>{
    //const ID=window.localStorage.getItem("ID");
    try{
      const response = await axios.get('http://localhost:8080/food/get/%ED%95%9C%EC%8B%9D')
      setData(response.data);
      console.log(response.data);
      
    } catch(e){
      console.log("error");
    }

  },[]);

  return(
   <div>
    <Wrapper>
     {data?.map((food,i)=>
     <Card>
      <Profile src={food.image}></Profile>
        <div style={{marginTop: "10px", marginBottom: "10px", color: "#61616B", fontSize: "90%"}}>
            {food.description}
        </div>
        <div style={{ marginBottom: "10px", fontWeight: "bolder"}}>
          {food.name}
        </div>
        <div style={{marginBottom: "0px", color:"gray", fontSize: "90%"}}>
          <span><img src={step} style={{width: "15px"}}/> {food.level}&emsp; </span>
          <span><img src={clock} style={{width: "15px"}}/> {food.time}분 </span>
        </div>
     </Card>
     )} 
     </Wrapper> 
   </div>
  );
}

export default Korean;