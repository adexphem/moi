const globalStyles = {
  blackBg: {
    backgroundColor: `rgba(0, 0, 0, 0.99)`,
    zIndex: '100002'
  },
  logoSize: {
    width: '100%',
    height: 'auto'
  },
  container: {
    with: '100%',
    maxWidth: '1120px',
    margin: '0 auto'
  },
  width100: {
    width: '100%'
  },
  webGl: {
    position: 'relative',
    width: '100%',
    height: '100vh - 5px'
  },
  webGlefore: {
    content: '',
    position: 'absolute',
    top: '0',
    right: '0',
    width: '75%',
    height: '90%',
    backgroundImage:
      'radial-gradient(ellipse closest-side, rgba(15, 14, 22, 0.5), #100e17), url(https://res.cloudinary.com/css-tricks/image/fetch/w_1200,q_auto,f_auto/https://css-tricks.com/wp-content/uploads/2018/05/curtainsjs-featured.gif)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    opacity: '0.75'
  }
};

export default globalStyles;
