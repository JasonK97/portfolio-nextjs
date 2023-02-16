import React from 'react'
import { Navbar, Text } from '@nextui-org/react'
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
			<Navbar.Content hideIn='xs'>
				{collapseItems.map(item => (
						<Link key={item.title} href={item.link}>{item.title}</Link>
				))}
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
						<Link
							color="inherit"
							css={{
								minWidth: "100%",
							}}
							href={item.link}
						>
							{item.title}
						</Link>
					</Navbar.CollapseItem>
				))}
			</Navbar.Collapse>
		</Navbar>
	)
}
