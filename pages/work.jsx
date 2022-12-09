import React from 'react'
import { MdDateRange } from 'react-icons/md'
import { SEO } from '../components'
import { 
  Main,
  Heading,
  Container,
  ListItem,
  ListContainer,
  StyledLink,
  WorkHeading,
  DateRange,
} from '../styles/styles'

export default function Work() {
  return (
    <Container>
      <SEO 
        page='Work Experience'
        description='Relevant engineering work experience in the programming work field.'
      />

      <Main>
        <Heading>Work Experience</Heading>

        <WorkHeading>Lead Full Stack Developer - Leisure Time Inc.</WorkHeading>

        <DateRange><MdDateRange /> Feb. 2022 - Present</DateRange>

        <ListContainer>
          <ListItem>
            Managed a Marketing & Development Team of seven
          </ListItem>
          <ListItem>
            Facilitated the addition of features to the internal&nbsp;
            <StyledLink href='https://admin.leisuretimeinc.com' target='_blank'>
              Administration site
            </StyledLink>
            &nbsp;and&nbsp;
            <StyledLink href='https://my.leisuretimeinc.com' target='_blank'>
              Customer portal
            </StyledLink>
            &nbsp;built in React.js
          </ListItem>
          <ListItem>
            Executed the successful planning and deployment of a brand-new eCommerce site using Next.js, Shopify, and Prismic.io
          </ListItem>
          <ListItem>
            Drove the eCommerce site to grow and increase sales by 20%
          </ListItem>
          <ListItem>
            Supervised the reconstruction of the eCommerce site in Remix.js to improve SEO
          </ListItem>
          <ListItem>
            Conducted weekly team meetings and quarterly 1-on-1s with every member of my team
          </ListItem>
        </ListContainer>

        <WorkHeading>Full Stack Developer - Leisure Time Inc.</WorkHeading>

        <DateRange><MdDateRange /> Nov. 2022 - Feb. 2022</DateRange>

        <ListContainer>
          <ListItem>
            Developed new Web Applications for Leisure Time Inc. using React.js, Next.js, and Firebase
          </ListItem>
          <ListItem>
            Built and Deployed features for both the&nbsp;
            <StyledLink href='https://leisuretimeinc.com' target='_blank'>
              Main Site
            </StyledLink> 
            &nbsp;and&nbsp;
            <StyledLink href='https://shop.leisuretimeinc.com' target='_blank'>
              Shop Site
            </StyledLink> 
            &nbsp;using Netlify
          </ListItem>
          <ListItem>
            Maintained code for four separate websites and two npm libraries used both internally and externally for Leisure Time Inc
          </ListItem>
          <ListItem>
            Supervised a team of two developers in developing and maintaining eight new features for two of the managed sites
          </ListItem>
        </ListContainer>

        <WorkHeading>Full Stack Development Intern - allucent</WorkHeading>

        <DateRange><MdDateRange /> Apr. 2022 - Oct. 2022</DateRange>

        <ListContainer>
          <ListItem>
            Developed easier-to-access customer service and training with Vue.js and Konva.js
          </ListItem>
          <ListItem>
            Introduced a dynamic table of Training Tips that can be used by company admins using Vue.js, Firebase, and Tailwind.css
          </ListItem>
          <ListItem>
            Coordinated weekly status report updates and showcases on work done throughout each week
          </ListItem>
        </ListContainer>
      </Main>
    </Container>
  )
}
