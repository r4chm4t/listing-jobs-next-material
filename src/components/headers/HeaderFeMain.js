import * as React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'

const styles = {
  root: {
		backgroundColor: '#212a30',
    color: 'white',
    boxShadow: '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
  },
  toolbar: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    width: '100%',
  },
  headerTitle: { 
    flexGrow: 1  
  },
  headerMenuMain: { 
    display: 'flex', 
    marginRight: '12px', 
    paddingRight: '12px', 
    borderRight: '1px solid #353535'
  },
}

function HeaderFeMain() {
  return (
    <header>
      <Container maxWidth="xl" sx={styles.root}>
        <Toolbar sx={ styles.toolbar }>

          <Box sx={ styles.headerTitle }>
            <h1>Listing Jobs App</h1>
          </Box>

        </Toolbar>
      </Container>
    </header>
  )
}

export default HeaderFeMain
