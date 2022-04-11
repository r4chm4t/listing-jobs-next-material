import * as React from 'react'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

import HeaderFeMain from '../headers/HeaderFeMain'
// import FooterFeMain from '../footers/FooterFeMain'

const styles = {
	root: {
		position: 'relative',
	},
	btnScrollTop: {
		position: 'sticky',
		left: '94%',
		bottom: '1.5rem',
	}
}

function LayoutFeMain(props) {
/* eslint-disable */
  const children = props.children || null
/* eslint-enable */
	const [isBtnScrollTopShow, setBtnScrollTopHandle] = React.useState(false)

	const btnScrollTopHandle = function() {
		if (window) {
			window.scroll({
				top: 0,
				left: 0,
				behavior: 'smooth',
			})

			setBtnScrollTopHandle(false)
		}
	}

	React.useEffect(() => {
		document.onscroll = () => {
			const currPosY = window.scrollY
			const divPosY = 100

			if (!isBtnScrollTopShow && currPosY >= divPosY) {
				setBtnScrollTopHandle(true)
			} else if (isBtnScrollTopShow && currPosY < divPosY) {
				setBtnScrollTopHandle(false)
			}
		}
	})
	
  return (
    <Box sx={styles.root}>
      <HeaderFeMain />

      <main>
        { children }
      </main>

			{ isBtnScrollTopShow ? (
					<Fab 
						color="primary" 
						aria-label="scrollTop"
						sx={styles.btnScrollTop}
						onClick={btnScrollTopHandle}
					>
						<ArrowUpwardIcon />
					</Fab>
				) : null
			}

		{/*<FooterFeMain />*/}
    </Box>
  )
}

export default LayoutFeMain
