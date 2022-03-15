import * as React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'

function MenuFooterMain(props) {
  return (
    <Container {...props}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

        <div>
          <h4>Company</h4>
          <MenuList>
            <MenuItem>About</MenuItem>
            <MenuItem>Carrers</MenuItem>
            <MenuItem>Mobile</MenuItem>
            <MenuItem>Blog</MenuItem>
            <MenuItem>How we work</MenuItem>
          </MenuList>
        </div>

        <div>
          <h4>Contact</h4>
          <MenuList>
            <MenuItem>Help/FAQ</MenuItem>
            <MenuItem>Press</MenuItem>
            <MenuItem>Affiliates</MenuItem>
            <MenuItem>Hotel Owners</MenuItem>
            <MenuItem>Partners</MenuItem>
            <MenuItem>Advertise with us</MenuItem>
          </MenuList>
        </div>

        <div>
          <h4>More</h4>
          <MenuList>
            <MenuItem>Airline fees</MenuItem>
            <MenuItem>Airlines</MenuItem>
            <MenuItem>Low fare tips</MenuItem>
            <MenuItem>Badges & Chertificates</MenuItem>
          </MenuList>
        </div>

        <div>
          <h4>Site / Currency</h4>
          <MenuList>
            <MenuItem>United States</MenuItem>
            <MenuItem>United States Dollars</MenuItem>
          </MenuList>
        </div>

      </Box>
    </Container>
  )
}

export default MenuFooterMain
