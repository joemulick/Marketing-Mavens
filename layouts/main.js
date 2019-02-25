import GlobalStyle from '../components/GlobalStyle';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from '../components/Footer';
import JssProvider from 'react-jss/lib/JssProvider';
import { MuiThemeProvider } from '@material-ui/core/styles';

export default ({children}) => (
  <div>
    <GlobalStyle />

      {/* Wrap every page in Jss and Theme providers */}

      <JssProvider
          registry={this.pageContext.sheetsRegistry}
          generateClassName={this.pageContext.generateClassName}
      >

        {/* MuiThemeProvider makes the theme available down the React
        tree thanks to React context. */}

        <MuiThemeProvider
            theme={this.pageContext.theme}
            sheetsManager={this.pageContext.sheetsManager}
          >

            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}

            <CssBaseline />

            {/* Pass pageContext to the _document though the renderPage enhancer
                to render collected styles on server-side. */}

            {children}

          <Footer />
      </MuiThemeProvider>
    </JssProvider>
  </div>
)