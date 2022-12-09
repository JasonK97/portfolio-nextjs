import styled from 'styled-components'
import { Link as NextLink } from '@nextui-org/react'
import Link from 'next/link'

export const Container = styled.div`
  padding: 0 2rem;
`;

export const Heading = styled.h1`
  line-height: 1.15;
  font-size: 4rem;
`;

export const Description = styled.h2`
  margin: 2rem auto 1rem auto;
  line-height: 1.5;
  font-size: 1.5rem;
  max-width: 700px;
`;

export const WorkHeading = styled.h2`
  margin: 2rem auto .5rem auto;
  line-height: 1.5;
  font-size: 1.5rem;
  max-width: 700px;
`;

export const DateRange = styled.h4`
  text-align: center;
  font-size: 1rem;
`;

export const Main = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
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
`;

export const TextBodyContainer = styled.div`
  margin: 1rem 4rem;
  line-height: 1.5;
  font-size: 1.5rem;
  max-width: 700px;
`;

export const NavbarLink = styled(NextLink)`
  color: #FFFFFF
`;

export const StyledLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
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

export const Footer = styled.footer`
  display: flex;
  flex: 1;
  padding: 2rem;
  border-top: 1px solid #eaeaea;
  align-items: center;
`;