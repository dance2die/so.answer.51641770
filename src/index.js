import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Content = styled.div`
  margin-top: ${props => props.top};
  margin-bottom: ${props => props.bot};
`;

const Header = ({ siteTitle }, props) => (
  // <div style={margins}>
  //   <h1> Content </h1>
  // </div>
  <Content top={"100px"} bottom={"500px"}>
    Some Content!
  </Content>
);

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
