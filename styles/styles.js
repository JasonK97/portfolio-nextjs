import styled from 'styled-components'
import Link from 'next/link'
import { 
  compose,
  space,
} from 'styled-system'

export const BlogBackButton = styled(Link)`
  background-color: #FFFFFF;
  color: #000000;
  padding: 5px 10px 2px 10px;
  border: 1px solid #FFFFFF;
  border-radius: 5px;
  font-size: 1rem;
  max-width: 40px;
`

export const BlogBodyContainer = styled.div`
  margin: 1rem 4rem;
  line-height: 1.5;
  font-size: 1.5rem;
  max-width: 800px;

  @media(max-width: 800px) {
    margin: .25rem auto .25rem auto;
    display: grid;
    justify-content: center;
    width: 300px;
  }
`;

export const BlogGrid = styled.a`
  text-decoration: none;
  color: #FFFFFF;
  border: 3px solid #FFFFFF;
  border-radius: 10px;
  margin: 2rem 1rem 2rem 1rem;
  max-width: 400px;
  min-height: 500px;
  max-height: 500px;
  display: inline-block;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;

  &:hover {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }

  @media(max-width: 1330px) {
    margin: 1rem auto 1rem auto;
    min-width: 300px;
    display: block;
  }
`

export const BlogGridContainer = styled.div`
  padding: 0 0 4rem 0;
  display: flex;
  justify-content: center;
  grid-template-columns: 350px;
  grid-template-rows: 80px;
  column-gap: 10px;
  row-gap: 15px;
`

export const BlogGridText = styled.div`
  padding: 0 10px 10px 10px;
`

export const BlogGridImage = styled.div`
  position: relative;
  width: 100%;
  height: 225px;
  overflow: hidden;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const BlogImage = styled.img`
  padding: 1rem 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  height: 550px;
  
  @media(max-width: 800px) {
    margin: 0;
    display: grid;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`

export const BlogMain = styled.main`
  min-height: 100vh;
  padding: 0 0 4rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: minmax(200px, 1fr);
  column-gap: 10px;
  row-gap: 15px;

  @media(max-width: 1330px) {
    margin: 1rem auto 1rem auto;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    grid-template-columns: repeat(1, 1fr);
  }
`

export const CodeText = styled.code`
  background: #fafafa;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`

export const Container = styled.div`
  padding: 0 2rem;
`

export const DateRange = styled.h4`
  text-align: center;
  font-size: 1rem;
`

export const Description = styled.h2`
  margin: 2rem auto 1rem auto;
  line-height: 1.5;
  font-size: 1.5rem;
  max-width: 700px;
`

export const Footer = styled.footer`
  display: flex;
  flex: 1;
  padding: 2rem;
  border-top: 1px solid #eaeaea;
  align-items: center;
`

export const Heading = styled.h1`
  ${compose(space)}
  line-height: 1.15;
  font-size: 4rem;
`

export const ListContainer = styled.ul`
  max-width: 900px;
`

export const ListItem = styled.li`
  line-height: 1.5;
  font-size: 1rem;
  display: list-item;
  list-style-type: circle;
`

export const Main = styled.main`
  min-height: 100vh;
  padding: 0 0 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PictureInfoGrid = styled.div`
  max-width:800px;
  margin: 1rem 4rem;
  line-height: 1.5;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 800px) {
    margin: .25rem auto .25rem auto;
    display: grid;
    justify-content: center;
    align-items: center;
  }
`

export const StyledLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`

export const TextBodyContainer = styled.div`
  margin: 1rem 4rem;
  line-height: 1.5;
  font-size: 1.5rem;
  max-width: 700px;
  @media(max-width: 800px) {
    margin: .25rem auto .25rem auto;
    display: grid;
    justify-content: center;
  }
`

export const WorkHeading = styled.h2`
  margin: 2rem auto .5rem auto;
  line-height: 1.5;
  font-size: 1.5rem;
  max-width: 700px;
`
