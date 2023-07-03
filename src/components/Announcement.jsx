
import { styled } from 'styled-components'

const Announcement = () => {

    const Container=styled.div`
        height: 40px;
        background-color: teal;
        color:white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 500;
    `
  return (
    <Container>
      Hurry up We give 50% off on first purchace
    </Container>
  )
}

export default Announcement
