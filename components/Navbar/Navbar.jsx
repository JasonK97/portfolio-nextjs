import React from 'react'
import { Navbar as NextNavbar, Text, Link as NextLink } from '@nextui-org/react'

export const Navbar = () => {

	const collapseItems = [
		{
			title: 'Home',
			link: '/',
		},
		{
			title: 'About',
			link: '/about',
		},
		{
			title: 'Projects',
			link: '/projects',
		},
		{
			title: 'Work Experience',
			link: '/work',
		},
		{
			title: 'Specialties',
			link: '/specialties',
		},
		{
			title: 'Blog',
			link: '/blog',
		},
	]

	return (
		<NextNavbar isBordered variant='sticky'>
			<NextNavbar.Toggle showIn='xs' />
			<NextNavbar.Brand>
				<a href='/' style={{color: '#FFFFFF'}}>
					<Text b color="inherit">
						JASON KENT
					</Text>
				</a>
			</NextNavbar.Brand>
			<NextNavbar.Content hideIn="xs">
				{/* <NextNavbar.Link href='/'>Home</NextNavbar.Link>
				<NextNavbar.Link href='/about'>About</NextNavbar.Link>
				<NextNavbar.Link href='/projects'>Projects</NextNavbar.Link>
				<NextNavbar.Link href='/work'>Work</NextNavbar.Link>
				<NextNavbar.Link href='/specialties'>Specialties</NextNavbar.Link> */}
				<NextLink href='/'>Home</NextLink>
				<NextLink href='/about'>About</NextLink>
				<NextLink href='/projects'>Projects</NextLink>
				<NextLink href='/work'>Work</NextLink>
				<NextLink href='/specialties'>Specialties</NextLink>
				<NextLink href='/blog'>Blog</NextLink>
			</NextNavbar.Content>
			<NextNavbar.Content>
				<NextLink href='https://www.github.com/JasonK97' target='_blank'>
					<img 
						src='/static/github.png'
						alt='GitHub Logo'
						width='20px'
						height='20px'
					/>
				</NextLink>
				<NextLink href='https://www.linkedin.com/in/jasonbkent' target='_blank'>
					<img 
						src='/static/linkedin.png'
						alt='LinkedIn Logo'
						width='20px'
						height='20px'
					/>
				</NextLink>
				<NextLink href='https://www.twitter.com/JasonKent_' target='_blank'>
					<img 
						src='/static/twitter.png'
						alt='Twitter Logo'
						width='20px'
						height='20px'
					/>
				</NextLink>
			</NextNavbar.Content>
			<NextNavbar.Collapse>
				{collapseItems.map((item, index) => (
					<NextNavbar.CollapseItem key={index}>
						<NextLink
							color="inherit"
							css={{
								minWidth: "100%",
							}}
							href={item.link}
						>
							{item.title}
						</NextLink>
					</NextNavbar.CollapseItem>
				))}
			</NextNavbar.Collapse>
		</NextNavbar>
	)
}
