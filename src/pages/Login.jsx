import { styled } from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://media.vogue.co.uk/photos/5e31584f71852d00086ffd48/master/pass/001-Street-Style-Menswear-Jan-2020-Vogue-credit-Jonathan-Daniel-Pryce.jpg")
      center;
      background-size:cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;

  margin: 10px  0;
  padding: 10px;
  outline: none;
`;
const Link = styled.a`
  font-size: 12px;
 margin:5px 0;
 text-decoration: underline;
`;
const Button = styled.button`
  width: 40%;
  background-color: teal;
  color: white;
  padding: 10px;
  font-size: 20px;
  font-weight: 200;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />

          <Input placeholder="password" />
          <Button>Login </Button>

          <Link>DO NOT YOU REMEMBER THE PASSWORD ?</Link>
          <Link> CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;