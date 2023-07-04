import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { styled } from "styled-components";
import Badge from'@material-ui/core/Badge';
import {mobile} from '../responcive'

const Navbar = () => {
  const Container = styled.div`
    height: 60px;
    ${mobile({height:"50px"})}
  `;
  const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    ${mobile({padding:"10px 0"})}
  `;

  const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
  `;

  const Languages = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display:"none"})}
  `;

  const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 10px;
    padding: 5px;
  `;

  const Input = styled.input`
    border: none;
    outline:none;
    ${mobile({width:"50px"})}
  `;
  const Center = styled.div`
    flex: 1;
  `;

  const Logo=styled.h1`
  font-weight: bold;
  text-align: center; 
  ${mobile({fontSize:"20px"})}
  `
  const Right = styled.div`
    flex: 1;
    display:flex;
    align-items:center;
    justify-content: flex-end;
    ${mobile({flex:2,justifyContent:'center'})}
  `;

  const MenuLink=styled.div`
  font-size:14px;
  cursor:pointer; 
  margin-left:25px;
  ${mobile({marginLeft:"5px"})}
  `

  return (
    <Container>
      <Wrapper>
        <Left>
          <Languages>EN</Languages>
          <SearchContainer>
            {/* <input type="text" /> */}
            <Input placeholder="search"/>
            <Search style={{color:'gray',fontSize:'16px'}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>MNZ</Logo>
        </Center>
        <Right>
          
          <MenuLink>
            REGISTER
          </MenuLink>
          <MenuLink>
            SIGN IN
          </MenuLink>
          <MenuLink>
            <Badge badgeContent={4} color='primary'>
              <ShoppingCartOutlined>

              </ShoppingCartOutlined>
            </Badge>
          </MenuLink>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
