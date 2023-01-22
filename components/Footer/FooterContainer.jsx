import React from 'react'
import { Footer } from '../../styles/styles'

export const FooterContainer = () => {
    const currentYear =  new Date().getFullYear()
    
	return (
		<Footer>
			<p>
				&copy; {currentYear} Jason Kent. All Rights Reserved.
			</p>
		</Footer>
	)
}
