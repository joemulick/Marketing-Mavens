import GlobalStyle from '../components/GlobalStyle';

export default ({children}) => (
  <div>
    <GlobalStyle />

      {children}

  </div>
)