import React from 'react'
import { 
	Navbar as NextNavbar,
	Link,
	Text,
} from '@nextui-org/react'

export const Navbar = () => {
	const collapseItems = [
    "Home",
    "About",
    "Projects",
    "Specialties",
  ];

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
			<NextNavbar.Content>
			</NextNavbar.Content>
		</NextNavbar>
	)
}
