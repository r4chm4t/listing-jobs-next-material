import * as React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

const styles = {
  servicesImgList: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}

export default function FooterServicesRelated(props) {
  return (
    <Container {...props} maxWidth="xl" align="center">

      <Box>
        <Typography component="p" color="white">
          {"KAYAK is part of Booking Holding Inc., The world leader in online travel & related services."}
        </Typography>
      </Box>

       <Box sx={ styles.serviceImgList }>
        <img src="" alt="Booking.com" />
        <img src="" alt="KAYAK" />
        <img src="" alt="OpenTable" />
        <img src="" alt="Priceline.com" />
        <img src="" alt="Agoda" />
        <img src="" alt="Rentalcars.com" />
      </Box>     

    </Container>
  )
}
