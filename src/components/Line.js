import React from "react";
import styled from "styled-components";

const Line_style = styled.div`
  border-top: #EFEFEF solid 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 15px;
  margin-top: 40px;
  margin-bottom: 10px;

`
const Select = styled.select`
  border: none;
  outline:none;
`

function Line() {
  return (
    <Line_style>
      <Select>
        <option>최신순</option>
        <option>추천순</option>
        <option>난이도순</option>
        <option>조리시간순</option>
      </Select>
    </Line_style>
  );
}

export default Line;