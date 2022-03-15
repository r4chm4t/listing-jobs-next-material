import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

export default function Copyright(props) {
  const color = props.color || "text.secondary"

  return (
    <Typography variant="body2" color={color} align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="/">
        Your Website
      </MuiLink>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

Copyright.propTypes = {
	color: PropTypes.string
}
