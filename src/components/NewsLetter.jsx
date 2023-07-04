import { Send } from "@material-ui/icons"
import  styled from "styled-components"

const Container=styled.div`
  height: 60vh;
  background: #fcf5f5;
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
`

const Title=styled.h1`
  font-size: 70px;
`
const Desc=styled.div`
  font-size: 25px;
  margin:20px 0;
  letter-spacing: 3px;
`
const InputContainer=styled.div`
  width: 50%;
  height:40px;
  display: flex;
  justify-content: space-between;
  border:1px solid lightgray;
`
const Input=styled.input`
  padding: 0 20px;
  outline: none;
  font-size:14px;
  flex:8;
  border:none;
`
const Button=styled.button`
flex:1;
cursor:pointer;

  border: none;
  color:white;
  background-color:teal;
`

const NewsLetter = () => {
  return (
    <Container>
      <Title>News Letter</Title>
      <Desc>Get timely updates from your favorate products.</Desc>
      <InputContainer>
        <Input placeholder="enter email"/>
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  )
}

export default NewsLetter
