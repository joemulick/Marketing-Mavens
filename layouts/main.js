import GlobalStyle from '../components/GlobalStyle';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from '../components/Footer';

export default ({children}) => (
  <div>
    <GlobalStyle />
    <CssBaseline />
      {children}
    <Footer />
  </div>
)