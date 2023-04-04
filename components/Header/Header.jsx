import React from 'react'
import { Navbar, Text, Link as NextUILink, Dropdown } from '@nextui-org/react'
import Link from 'next/link'
import { collapseItems, socialLinks } from './data'

export const Header = () => {
	return (
		<Navbar isBordered maxWidth='fluid' variant='sticky'>
			<Navbar.Toggle showIn='xs' />
			<Navbar.Brand>
				<a href='/' style={{color: '#FFFFFF'}}>
					<Text b color="inherit">
						JASON KENT
					</Text>
				</a>
			</Navbar.Brand>
			{/* <Navbar.Content hideIn='xs'>
				{collapseItems.map(item => (
						<Link key={item.title} href={item.link}>{item.title}</Link>
				))}
			</Navbar.Content> */}
			<Navbar.Content hideIn='xs'>
				<NextUILink href='/' css={{ color: '#3694FF' }}>Home</NextUILink>
				<HeaderDropdown />
				<NextUILink href='/blog' css={{ color: '#3694FF' }}>Blog</NextUILink>
			</Navbar.Content>
			<Navbar.Content>
				{socialLinks.map(({ link, image, alt }) => (
					<Link key={alt} href={link} target='_blank'>
						<img src={image} alt={alt} width='20px' height='20px' />
					</Link>
				))}
			</Navbar.Content>
			<Navbar.Collapse>
				{collapseItems.map((item, index) => (
					<Navbar.CollapseItem key={index}>
						<NextUILink
							color="inherit"
							css={{
								minWidth: "100%",
							}}
							href={item.link}
						>
							{item.title}
						</NextUILink>
					</Navbar.CollapseItem>
				))}
			</Navbar.Collapse>
		</Navbar>
	)
}

const HeaderDropdown = () => {
	return (
		<Dropdown isBordered>
			<Navbar.Item>
				<Dropdown.Button
					auto
					light
					css={{
						px: 0,
						dflex: "center",
						svg: { pe: "none" },
						color: '#3694FF',
					}}
					ripple={false}
				>
					About
				</Dropdown.Button>
			</Navbar.Item>
			<Dropdown.Menu
				aria-label="About Me Pages"
				// variant='light'
				css={{
					$$dropdownMenuWidth: "150px",
					$$dropdownItemHeight: "40px",
					"& .nextui-dropdown-item": {
						py: "$4",
						// dropdown item title
						"& .nextui-dropdown-item-content": {
							w: "100%",
							fontWeight: "$semibold",
						},
					},
				}}
			>
				<Dropdown.Item>
					<NextUILink href='/about' css={{ color: '#3694FF', minWidth: '100%' }}>About Me</NextUILink>
				</Dropdown.Item>
				<Dropdown.Item>
					<NextUILink href='/projects' css={{ color: '#3694FF', minWidth: '100%' }}>Projects</NextUILink>
				</Dropdown.Item>
				<Dropdown.Item>
					<NextUILink href='/work' css={{ color: '#3694FF', minWidth: '100%' }}>Work Experience</NextUILink>
				</Dropdown.Item>
				<Dropdown.Item>
					<NextUILink href='/specialties' css={{ color: '#3694FF', minWidth: '100%' }}>Specialties</NextUILink>
				</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	)
}
