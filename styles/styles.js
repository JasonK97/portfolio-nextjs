import styled from 'styled-components'
// import { Link as NextLink } from '@nextui-org/react'
import Link from 'next/link'

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
  margin: 2rem auto 2rem auto;
  max-width: 700px;
`

export const BlogGridImage = styled.img`
border-top-left-radius: 5px;
border-top-right-radius: 5px;
`

export const BlogImage = styled.img`
  padding: 1rem 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  @media(max-width: 800px) {
    margin: 0;
    display: grid;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`

export const CodeText = styled.code`
  background: #fafafa;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`;

export const Container = styled.div`
  padding: 0 2rem;
`;

export const DateRange = styled.h4`
  text-align: center;
  font-size: 1rem;
`;

export const Description = styled.h2`
  margin: 2rem auto 1rem auto;
  line-height: 1.5;
  font-size: 1.5rem;
  max-width: 700px;
`;

export const Footer = styled.footer`
  display: flex;
  flex: 1;
  padding: 2rem;
  border-top: 1px solid #eaeaea;
  align-items: center;
`;

export const Heading = styled.h1`
  line-height: 1.15;
  font-size: 4rem;
`;

export const ListContainer = styled.ul`
  max-width: 900px;
`;

export const ListItem = styled.li`
  line-height: 1.5;
  font-size: 1rem;
  display: list-item;
  list-style-type: circle;
`;

export const Main = styled.main`
  min-height: 100vh;
  padding: 0 0 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PictureInfoGrid = styled.div`
  max-width:800px;
  margin: 1rem 4rem;
  line-height: 1.5;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  @media(max-width: 800px) {
    margin: .25rem auto .25rem auto;
    display: grid;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;

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
`;

export const WorkHeading = styled.h2`
  margin: 2rem auto .5rem auto;
  line-height: 1.5;
  font-size: 1.5rem;
  max-width: 700px;
`;