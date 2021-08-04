import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
 

  render() {
    return (
      <html>
        <Head>
          <style>{`body { margin: 0 } /* custom! */`}</style>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-MYMMCL8CRP"></script>
          <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MYMMCL8CRP');
            `,
          }}
        />
         

        </Head>
        
        <body className='custom_class'>
          <Main />
          <NextScript />

          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KBQC2JN"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}></noscript>

        </body>
        
      </html>
    );
  } // end render()
}
