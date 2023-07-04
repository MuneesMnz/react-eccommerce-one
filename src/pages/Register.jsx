import { styled } from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://www.apetogentleman.com/wp-content/uploads/2022/05/FALL-WINTER-TRENDS.jpg")
      center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
width:40%;
padding:20px;
background-color:white;
`;
const Title = styled.h1`
font-size:24px;
font-weight:300;
`;
const Form = styled.form`
display: flex; 
flex-wrap:wrap; 
`;
const Input = styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0 0;
padding:10px;
outline:none
`;
const Agreement = styled.span`
font-size:14px;
margin :20px 0;
`;
const Button = styled.button`
width:40%;
background-color:teal;
color:white;
padding:10px;
font-size:20px;
font-weight:200;
border:none;
cursor:pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="conform password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
