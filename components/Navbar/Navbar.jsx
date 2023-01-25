import React from 'react'
import { Navbar as NextNavbar, Text, Link as NextLink } from '@nextui-org/react'
import { collapseItems, socialLinks } from './data'
import { Layout } from './styles'

export const Navbar = () => {

	return (
		// <Layout>
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
					{collapseItems.map(item => (
							<NextLink key={item.title} href={item.link}>{item.title}</NextLink>
					))}
				</NextNavbar.Content>
				<NextNavbar.Content>
					{socialLinks.map(({ link, image, alt }) => (
						<NextLink key={alt} href={link} target='_blank'>
							<img src={image} alt={alt} width='20px' height='20px' />
						</NextLink>
					))}
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
		// </Layout>
	)
}
