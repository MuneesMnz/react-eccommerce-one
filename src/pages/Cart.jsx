import { styled } from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import {mobile} from '../responcive'

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({padding:"10px"})}
`;
const Title = styled.h1`
  font-size: 40px;
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  ${mobile({padding:"10px"})}

`;

const TopButton = styled.button`
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const Toptexts = styled.div`
  display: flex;
  gap: 15px;
  ${mobile({display:"none"})}
`;
const Toptext = styled.div`
  text-decoration: underline;
  cursor: pointer;
`;
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({flexDirection:"column"})}
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection:"column"})}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDeatiles = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 10px;
  ${mobile({margin:"5px 15px"})}
`;
const ProductPrice = styled.div`
  font-size: 35px;
  font-weight: 200;
  ${mobile({marginBottom:"20px"})}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  padding: 10px;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  height: 50vh;
`;
const SummaryTitle = styled.h1`
  font-size: 35px;
  font-weight: 300;
`;
const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  font-size: ${(props) => (props.type === "total" ? "24px" : "18px")};
  font-weight: ${(props) => (props.type === "total" ? "500" : "300")};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
width:100%;
padding:10px;
font-size:18px;
font-weight:500;
border: none;
background-color:black;
color:white;
cursor:pointer;
margin-top: 15px;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>COUNTINUE SHOPPING</TopButton>
          <Toptexts>
            <Toptext>Shopping Bag(2)</Toptext>
            <Toptext>Your Wishlist(0)</Toptext>
          </Toptexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://5.imimg.com/data5/ANDROID/Default/2021/6/UH/ZG/GC/120280019/img-20210624-wa0351-jpg.jpg" />
                <Details>
                  <ProductName>
                    <b>Product:</b> ADDIDAS SHOES
                  </ProductName>
                  <ProductId>
                    <b>Id:</b> 987568354
                  </ProductId>
                  <ProductColor color="yellow" />
                  <ProductSize>
                    <b>size:</b>38
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDeatiles>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDeatiles>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://5.imimg.com/data5/ANDROID/Default/2021/6/UH/ZG/GC/120280019/img-20210624-wa0351-jpg.jpg" />
                <Details>
                  <ProductName>
                    <b>Product:</b> ADDIDAS SHOES
                  </ProductName>
                  <ProductId>
                    <b>Id:</b> 987568354
                  </ProductId>
                  <ProductColor color="yellow" />
                  <ProductSize>
                    <b>size:</b>38
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDeatiles>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDeatiles>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Sub total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 6.50</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>-$ 6.50</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText >Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
