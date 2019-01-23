import GlobalStyle from '../components/GlobalStyle';
import CssBaseline from '@material-ui/core/CssBaseline';

export default ({children}) => (
  <div>
    <GlobalStyle />
    <CssBaseline />
      {children}
  </div>
)