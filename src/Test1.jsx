import React from "react";
import ReactDOM from "react-dom";
import {   Link} from 'react-router-dom';
import initialData from "./initial-data";
import logosvg from "./images/logo.svg";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  background: repeating-linear-gradient(
  135deg,
  rgba(100, 100, 100, 0),
  rgba(100, 100, 100, 0) 3px,
  rgba(100, 100, 100, 0.1) 3px,
  rgba(100, 100, 100, 0.1) 6px
);
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

const Logo = styled.img`
  background: transparent;
  width: 160px;
  margin-bottom: 30px;

  align-self: flex-end;
  align-items: center;
  color: #34485c;

  margin-top: 0px;
`;
const Heading = styled.h1`

background: #fff;

`;
const Text = styled.div`

background: #fff;

`;
const Contents = styled.div`
min-height:500px;
padding:20px;
background: #fff;
display:flex;
flex-direction:column;
border:3px solid rgba(100, 100, 100, 0.5);
border-radius: 10px;

`;
const Footer = styled.div`
display:flex;
flex-direction:row;
height:20px;
margin-top:10px;
justify-content: space-between;
align-items: center;
align-self: center;
background: initial;
`;
const Lnk = styled.div`
  margin-left:10px;
  padding-left:10px;
  border-left:1px solid #000;
  background: initial;
  text-decoration: underline;
  cursor: pointer;
`;
const Copyright = styled.div`
background: initial;
`;

const Wrapper = styled.div`
  background: initial;
  display: flex;
  flex-direction:column;
`
const More = styled.a`
  background: transparent;
  width: 300px;
  margin-bottom: 30px;
   align-self: flex-end;
   color: #34485c;
   text-align: right;
  margin-top: 0px;
  text-decoration:none;
  cursor: pointer;

  padding: 10px 0px;
  &:hover {
    color:#ff4c71; 
    text-decoration: underline;
  }


`
class Test1 extends React.Component {
  state = initialData;

  onDragEnd = (result) => {
    // TODO: reorder our column
  };

  render() {
    return (
 
        <Container>
          <Logo src={logosvg} />
          <Contents className='contents'>
            <Wrapper>
            <Heading>Kamma Holding Text</Heading>
            <Text><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.<br />
            Quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
            </p>
            <p>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
  
            </p>
            <p>
  I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure</p>
<p>
Quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
            <p>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            to find out more <a href='#'>click here</a>
            </p>
            <p>
  I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure</p>
<p>
Quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
            <p>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
            </Text>
            </Wrapper>
            <More href='#'>READ MORE ABOUT HOW WE WORK <span style={{color:'#ff4c71'}}>&gt;</span> </More>
          </Contents>
          <Footer>
              <Copyright>© 2020 Kamma</Copyright>
              <Lnk href='#'>Privacy Policy</Lnk>
              <Lnk href='#'>Terms & Conditions</Lnk>
              <Lnk ><Link to='/test2'>Contact</Link></Lnk>
          </Footer>
       
        </Container>

    );
  }
}

export default Test1;
