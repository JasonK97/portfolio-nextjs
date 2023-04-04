import React from 'react'
import { Navbar, Text, Link as NextUILink, Dropdown } from '@nextui-org/react'
import Link from 'next/link'
import { collapseItems, socialLinks } from './data'

export const Header = () => {
	return (
		<Navbar isBordered maxWidth='fluid' variant='sticky'>
			<Navbar.Toggle showIn='xs' />
			<Navbar.Brand>
				<Link href='/' style={{ color: '#FFFFFF' }}>
					<Text b color="inherit">
						JASON KENT
					</Text>
				</Link>
			</Navbar.Brand>
			{/* <Navbar.Content hideIn='xs'>
				{collapseItems.map(item => (
						<Link key={item.title} href={item.link}>{item.title}</Link>
				))}
			</Navbar.Content> */}
			<Navbar.Content hideIn='xs'>
				<Link href='/' /*css={{ color: '#3694FF' }}*/>Home</Link>
				<HeaderDropdown />
				<Link href='/blog' /*css={{ color: '#3694FF' }}*/>Blog</Link>
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
					<Link 
						href='/about' 
						style={{ 
							color: '#3694FF', 
							paddingRight: '65%',
							paddingTop: '1vh',
							paddingBottom: '1vh',
						}}
					>
						About Me
					</Link>
				</Dropdown.Item>
				<Dropdown.Item>
					<Link 
						href='/projects' 
						style={{ 
							color: '#3694FF', 
							paddingRight: '70%',
							paddingTop: '1vh',
							paddingBottom: '1vh',
						}}
					>
						Projects
					</Link>
				</Dropdown.Item>
				<Dropdown.Item>
					<Link 
						href='/work' 
						style={{ 
							color: '#3694FF', 
							paddingRight: '39%',
							paddingTop: '1vh',
							paddingBottom: '1vh',
						}}
					>
						Work Experience
					</Link>
				</Dropdown.Item>
				<Dropdown.Item>
					<Link 
						href='/specialties' 
						style={{ 
							color: '#3694FF', 
							paddingRight: '23.5%',
							paddingTop: '1vh',
							paddingBottom: '1vh',
						}}
					>
						Tools and Languages
					</Link>
				</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	)
}
