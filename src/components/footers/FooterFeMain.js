import * as React from 'react'
import Box from '@mui/material/Box'

import Copyright from '../Copyright'

const styles = {
  root: {
    backgroundColor: '#212a30',
    color: 'white',
    paddingTop: '24px',
    paddingBottom: '24px',
  },
}

function FooterFeMain() {
  return (
    <footer>
      <Box sx={ styles.root }>

        <Copyright color="white" />
   
      </Box>
    </footer>
  )
}

export default FooterFeMain
