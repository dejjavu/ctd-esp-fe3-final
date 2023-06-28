import React from 'react';
import { styled } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const StyledFooter = styled('footer')({
  backgroundColor: '#333',
  color: '#fff',
  padding: '16px',
});

const StyledLogo = styled('img')({
  width: '200px',
});

const StyledSocialIcons = styled(Grid)({
  '& > *': {
    marginRight: '8px',
  },
});

const Footer = () => {
  return (
    <StyledFooter>
      <Grid container alignItems="center">
        <Grid item>
          <Typography variant="body1">Powered by</Typography>
        </Grid>
        <Grid item>
          <StyledLogo src="./images/DH.png" alt="DH-logo" />
        </Grid>
        <Grid item>
          <StyledSocialIcons>
            <WhatsAppIcon />
            <FacebookIcon />
            <InstagramIcon />
          </StyledSocialIcons>
        </Grid>
      </Grid>
    </StyledFooter>
  );
};

export default Footer;





