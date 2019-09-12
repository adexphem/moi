import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import gS from './GlobalStyles';
import classNames from 'classnames';

import maskedImg from '../masking.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    padding: '10px 10px'
  },
  lhs: {
    backgroundColor: 'black',
    color: 'white',
    lineHeight: '30px',
    textAlign: 'left',
    padding: '15px 20px'
  },
  rhs: {
    backgroundColor: 'white',
    color: 'black',
    lineHeight: '25px',
    border: 'none',
    fontSize: '20px'
  },
  lower: {
    margin: '20px 0'
  }
}));

export default function Leap() {
  const classes = useStyles();
  return (
    <div>
      <div
        className={classNames({ overlay: true, overlay_relative: true })}
        style={(gS.logoSize, gS.webGl)}
      >
        <div className={classNames({ overlay_content: true, container: true })}>
          <div className={classNames({ topContent: true })}>
            <div>transform</div>
            <div>
              <Link to="/workshop" className={classNames({ cta_book: true })}>
                Book a free Workshop
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={classNames({ container: true, gap20: true })}>
        <Grid container spacing={3} className={classes.lower}>
          <Grid item xs={12} sm={6} className={classes.lhsBefore}>
            <Paper className={(classes.paper, classes.lhs)}>
              <span>Content 3.0</span> is the next evolution of content in B2B.
              It’s going that step further to create symbiotic relationships
              between brands and customers.
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.rhsAfter}>
            <Paper className={classes.paper}>
              With blurred lines between the digital and real world, marketers
              need to create an interconnected data back-end to allow their
              content to self-adapt in real time, based on the intelligence they
              gather on their audience. We’ve created a free workshop that gives
              forward-looking marketers a guide to make the jump to Content 3.0
              to keep pace with the data revolution of content.
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
