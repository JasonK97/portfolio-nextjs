import React from 'react'
import Image from 'next/image'
import { MdConstruction } from 'react-icons/md'
import { SEO } from '../components'
import { Text, Link } from '@nextui-org/react'
import {
  Main, 
  Heading, 
  Container,
  PictureInfoGrid,
  TextBodyContainer,
} from '../styles/styles'

export default function Projects() {
  return (
    <Container>
      <SEO 
        page='Projects'
        description='Experience Learning Projects I have worked on that have helped in my development as a Developer.'
      />

      <Main>
        <Heading>Projects</Heading>

        <PictureInfoGrid>
          <Image 
            src='/../public/static/mtnriverlogo.png'
            alt='Mountain River Silver Labs Logo'
            height={200}
            width={200}
          />

          <TextBodyContainer>
            <Text>
              Mountain River Silver Labs is a website that I built for my 
              Senior Project right before graduating college. It is built in 
              React.js and features a Blog and mobile friendly design. There 
              is an Admin page that uses authentication to allow an admin to 
              log in and make, delete, or edit blog posts on the site.
            </Text>

            <Link 
              href='https://react-firebase-blog-e46b3.web.app/'
              underline 
              target='_blank'
              isExternal
            >
              mtnriversilvers.com
            </Link>
          </TextBodyContainer>
        </PictureInfoGrid>

        <PictureInfoGrid>
          <TextBodyContainer>
            <Text>
              A friend of mine took me on to help build out a website in Vue.js 
              for a Destiny Clan that he started while in the Navy. The site 
              features authentication for an admin dashboard for clan organization, 
              promotions, and other clan related activities. We connected the Discord 
              and Bungie.net APIs to connect your accounts to the clan site.
            </Text>

            <Link 
              href='https://www.bulletheads.org/'
              underline 
              target='_blank'
              isExternal
            >
              bulletheads.org
            </Link>
          </TextBodyContainer>

          <Image 
            src='/../public/static/bthd-logo.png'
            alt='Bullet Heads Clan Logo'
            height={200}
            width={200}
          />
        </PictureInfoGrid>

        <PictureInfoGrid>
          <Image 
            src='/../public/static/mtmmusic-logo.png'
            alt='Milk Toast Man Logo'
            height={200}
            width={200}
            style={{ borderRadius: '50%' }}
          />

          <TextBodyContainer>
            <Text>
              This site was built for my brother, a practicing Family Physician in Eastern
              Idaho, who writes and produces music on the side. Using the Vue.js framework and
              some more advanced CSS functions, this website features a music player usable
              throughout the site linked to the milk toast man Bandcamp page.
            </Text>

            <Link 
              href='https://github.com/JasonK97/milk-toast-man-website'
              underline 
              target='_blank'
              isExternal
            >
              Milk Toast Man repository
            </Link>
          </TextBodyContainer>
        </PictureInfoGrid>

        <PictureInfoGrid>
          <TextBodyContainer>
            <Text>
              Nature Calls is an Android Application built in Java using Android Studio.
              This was a collaborative project with a Firebase backend looking to help
              students on the BYU-Idaho campus rate restrooms so that no one needs
              to use a nasty bathroom while on-campus.
            </Text>

            <Link
              href='https://github.com/JasonK97/Java-App'
              underline 
              target='_blank'
              isExternal
            >
              Nature Calls App repository
            </Link>
          </TextBodyContainer>

          <Image 
            src='/../public/static/nature-calls.png'
            alt='Bullet Heads Clan Logo'
            height={200}
            width={200}
            style={{ borderRadius: '15px' }}
          />
        </PictureInfoGrid>
      </Main>
    </Container>
  )
}
