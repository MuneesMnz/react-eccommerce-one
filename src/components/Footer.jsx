import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Room,
  Twitter,
  WhatsApp,
} from "@material-ui/icons";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1`
  font-size: 40px;
`;
const Desc = styled.p`
  font-size: 20px;
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.bg};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`

margin-bottom:20px;
display:flex;
gap:5px;
align-items:center;
font-size:17px;
cursor:pointer;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>MNZ.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi
          porro eveniet accusantium nam sint incidunt cum! Vel quisquam ut quas
          quasi, cupiditate ipsa ab rerum vero nemo non neque
        </Desc>
        <SocialContainer>
          <SocialIcon bg="#3b5998">
            <Facebook />
          </SocialIcon>
          <SocialIcon bg=" #fa7e1e">
            <Instagram />
          </SocialIcon>
          <SocialIcon bg="#00acee">
            <Twitter />
          </SocialIcon>
          <SocialIcon bg="#075E54">
            <WhatsApp />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room /> Koduvally, Kozhikode
        </ContactItem>
        <ContactItem>
          {" "}
          <Phone />
          +91 97472-56118
        </ContactItem>
        <ContactItem> <Mail /> mnz@gmail.com</ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
