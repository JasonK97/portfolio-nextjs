import React from 'react'
import Link from 'next/link'
import { Navbar as NextNavbar, Text, Link as NextLink } from '@nextui-org/react'

export const Navbar = ({ path }) => {

	// TODO: Figure out a way to indicate active page here dynamically.
	// console.log(path)

	return (
		<NextNavbar isBordered variant='sticky'>
			<NextNavbar.Brand>
				<Text b color="inherit" hideIn="xs">
					JASON KENT
				</Text>
			</NextNavbar.Brand>
			<NextNavbar.Content enableCursorHighlight hideIn="xs">
				<NextNavbar.Link href='/'>Home</NextNavbar.Link>
				<NextNavbar.Link href='/about'>About</NextNavbar.Link>
				<NextNavbar.Link href='/projects'>Projects</NextNavbar.Link>
				<NextNavbar.Link href='/specialties'>Specialties</NextNavbar.Link>
			</NextNavbar.Content>
			<NextNavbar.Content hideIn="xs">
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
		</NextNavbar>
	)
}
