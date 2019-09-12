import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Logo from '../../moiLogo.svg';
import gS from '../GlobalStyles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  colorAll: {
    color: '#fff'
  },
  wrap: {
    padding: '25px',
    color: '#fff'
  },
  footerLogo: {
    height: 'auto',
    width: '100px'
  },
  flex: {
    display: 'flex'
  },
  flexSpace: {
    paddingRight: '10px'
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={gS.blackBg}>
      <div style={gS.container} className={(classes.colorAll, classes.wrap)}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <div style={gS.logoSize}>
              <div className={classes.footerLogo}>
                <img src={Logo} alt="" />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={3}>
            <div className={classes.flex}>
              <div className={classes.flexSpace}>SERVICES</div>
              {/* <div>
                <span>Contact Us</span>
                <span>Ordering & Payment</span>
                <span>Shipping</span>
                <span>Returns</span>
                <span>FAQ</span>
                <span>Sizing Guide</span>
              </div> */}
            </div>
          </Grid>
          <Grid item xs={12} sm={3}>
            <div className={classes.flex}>
              <div className={classes.flexSpace}>INFORMATON</div>
              {/* <div>
                <span>Work With Us</span>
                <span>Privacy Policy</span>
                <span>Terms & Conditions</span>
                <span>Press Enquiries</span>
              </div> */}
            </div>
          </Grid>
          <Grid item xs={12} sm={3}>
            <div className={classes.flexSpace}>SOCIAL MEDIA</div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
