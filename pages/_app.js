import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import mdComponents from 'components/mdxComponents';
import Page from 'components/Page';

const App = ({ Component, pageProps }) => {
  return (
    <MDXProvider components={mdComponents}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </MDXProvider>
  );
};

export default App;
