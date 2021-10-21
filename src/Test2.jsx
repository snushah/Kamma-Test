import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import logosvg from "./images/logo.svg";
import styled from "styled-components";
import validator from 'validator';

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
const Subheading = styled.h2`
margin-top:20px;
color:lightgray;
font-weight:400;
`;
const FormItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  min-width: 600px;
  padding:20px;
`;
const FormLeft=styled.div`
    flex:1;
    align-items: right;
    align-self: center;
    text-align: right;
    justify-content: flex-end;
    width:100%;
    padding-right:50px;
    font-weight:bold;
`;
const FormRight=styled.div`
    flex:2;


`;


const Button = styled.button`
padding:10px 20px;
border:1px solid lightgray;
cursor:pointer;
font-size:16px;

`


const Test2 = () => {

    const [name, setName] = useState('');

    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('');
    const [friendname, setFriendname] = useState('');
    const [friendemail, setFriendemail] = useState('');
    const [submitText, setSubmitText] = useState('Submit');
    const [disabled, setDisabled] = useState(true);
    const [disabledForm, setDisabledForm] = useState(false);

    
    const handleSubmit = (e)=>{
        e.preventDefault();

        if(name&&friendemail&&friendname&&validator.isEmail(friendemail)){
            setMessage('Please wait...')
            setSubmitText('Wait');
            setDisabledForm(true);
            axios({
                method: 'post',
                url: `https://api.applybox.co.uk/kammaapi`,
                headers: { 'content-type': 'application/json' },
                data: {name:name,friendemail:friendemail, friendname:friendname}
              })
                .then(result => {
                    console.log(result)
                    setMessage(result)
                    setDisabledForm(false);
                })
                .catch(error =>{
                  setMessage(error.message)
                  setDisabledForm(false);
                });
        }
        else{

            setMessage('All fields are manditory')
        }
    }
    useEffect(() => {
        setMessage('')


        if(name&&friendemail&&friendname&&validator.isEmail(friendemail))
        {
            
            setDisabled(false)
           
        }
        else
        setDisabled(true);


      }, [name, friendname,friendemail]);

    

    return (
        <div>

        <Container>
          <Logo src={logosvg} />
          <Contents className='contents'>
            <Wrapper>
            <Heading>Send to a friend</Heading>
            <Subheading>Share this great deal with friends!</Subheading>
            <div>{message}</div>
            <FormItem>
                <FormLeft>Your name *</FormLeft>
                <FormRight><input  disabled={disabledForm} type="text" value={name}  onChange={e => setName(e.target.value )} /></FormRight>
            </FormItem>
            <FormItem>
                <FormLeft>Friend's name *</FormLeft>
                <FormRight><input  disabled={disabledForm}  type="text" value={friendname}  onChange={e => setFriendname(e.target.value )}  /></FormRight>
            </FormItem>
            <FormItem>
                <FormLeft>Friend's Email *</FormLeft>
                <FormRight><input  disabled={disabledForm}  type="text" value={friendemail} onChange={e => setFriendemail(e.target.value)} /></FormRight>
            </FormItem>
            <FormItem>
                <FormLeft></FormLeft>
                <FormRight><Button disabled={disabled} onClick={handleSubmit}>{submitText}</Button></FormRight>
            </FormItem>
            </Wrapper>

          </Contents>
          <Footer>
          <Copyright>© 2021 Kamma</Copyright>
          <Lnk ><Link to='/'>Back to Test1</Link></Lnk>
          </Footer>
       
        </Container>
            
        </div>
    )
}







export default Test2;
