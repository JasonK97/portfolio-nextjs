import React from 'react'
import { Image } from 'next/image'
import { useRouter } from 'next/router'
import { Navbar as NextNavbar, Text, Link } from '@nextui-org/react'

export const Navbar = ({ path }) => {

	console.log(path)

	return (
		<NextNavbar isBordered variant='sticky'>
			<NextNavbar.Brand>
				<Text b color="inherit" hideIn="xs">
					JASON KENT
				</Text>
			</NextNavbar.Brand>
			<NextNavbar.Content enableCursorHighlight activeColor='primary' hideIn="xs">
				<NextNavbar.Link isActive href='/'>Home</NextNavbar.Link>
				<NextNavbar.Link href='/about'>About</NextNavbar.Link>
				<NextNavbar.Link href='/projects'>Projects</NextNavbar.Link>
				<NextNavbar.Link href='/specialties'>Specialties</NextNavbar.Link>
			</NextNavbar.Content>
			<NextNavbar.Content activeColor='primary' hideIn="xs">
				<NextNavbar.Item>
					<a href='https://www.github.com/JasonK97' target='_blank'>
						<img 
							src='/static/github.png'
							alt='GitHub Logo'
							width='20px'
							height='20px'
						/>
					</a>
				</NextNavbar.Item>
				<NextNavbar.Item>
					<a href='https://www.linkedin.com/in/jasonbkent' target='_blank'>
						<img 
							src='/static/linkedin.png'
							alt='LinkedIn Logo'
							width='20px'
							height='20px'
						/>
					</a>
				</NextNavbar.Item>
				<NextNavbar.Item>
					<a href='https://www.twitter.com/JasonKent_' target='_blank'>
						<img 
							src='/static/twitter.png'
							alt='Twitter Logo'
							width='20px'
							height='20px'
						/>
					</a>
				</NextNavbar.Item>
			</NextNavbar.Content>
		</NextNavbar>
	)
}
