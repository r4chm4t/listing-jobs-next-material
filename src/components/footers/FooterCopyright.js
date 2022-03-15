import * as React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'

const styles = {
  menuList: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '780px',
  },
  descriptionSpace: {
    paddingBottom: '1rem',
  },
  socialLinkList: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '560px',
  },
}

export default function FooterCopyright(props) {
  return (
    <Container {...props} maxWidth="xl" align="center">

       <Box>

        <MenuList sx={ styles.menuList }>
          <MenuItem>{"Do Not Sell My Info"}</MenuItem>
          <MenuItem>{"Privacy"}</MenuItem>
          <MenuItem>{"Terms & Conditions"}</MenuItem>
          <MenuItem>{"Ad Choises"}</MenuItem>
          <MenuItem>{"@2022 KAYAK"}</MenuItem>
        </MenuList>

      </Box>

      <Box sx={ styles.descriptionSpace }>
        <Typography component="p" color="white" sx={ styles.descriptionSpace }>
          {"Search cheap flights with KAYAK. Search for the cheapest airline tickets for all the top airlines around the world and the top internation flight routes. KAYAK searches hundreds of travel sites to help you find cheap airfare and book a flight that suits you best. Since KAYAK searches many plane tickets sites at once. You can find cheap tickets from cheap airlines quickly."}
        </Typography>
        <Typography component="p" color="white" sx={ styles.descriptionSpace }>
          {"KAYAK also helps you find the right hotels for your needs."}
        </Typography>
      </Box>

      <Box sx={ styles.socialLinkList }>
        <img src="" alt="Facebook" />
        <img src="" alt="Twitter" />
        <img src="" alt="Youtube" />
        <img src="" alt="Instagram" />
      </Box>     

    </Container>
  )
}
