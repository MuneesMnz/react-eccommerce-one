import { styled } from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  gap: 10px;
`;

const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 30px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-color: ${(props) => props.color};
  margin:0 5px;
  cursor:pointer;
`;
const FilterSize = styled.select`
    padding:5px 10px;
    margin-left:  10px;
    cursor:pointer;

`;
const FilterSizeOption = styled.option``;


const  AddContainer= styled.div`
width:50%;
display:flex;
align-items: center;
justify-content: space-between;
margin: 20px 0;
`;
const AmountContainer = styled.div`
display:flex;
align-items:center;
gap:10px;
`;
const Amount = styled.span`
font-size:20px;
font-weight:400;
width:30px;
height:30px;
border-radius:10px;
border:1px solid teal;
display:flex;
justify-content: center;
align-items:center;
`;
const Button= styled.button`
padding: 10px;
background: transparent;
font-size:16px;
cursor: pointer; 
border:2px solid teal;
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src="https://img.fruugo.com/product/3/19/194893193_max.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Denim Patched</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maxime
            iste, culpa odio doloribus quis animi repellat perferendis molestias
            optio. Dolorum iusto est ab quae et eligendi placeat sit laboriosam!
          </Desc>
          <Price>20 $</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
                <Remove />
                <Amount>1</Amount>
                <Add/>
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
