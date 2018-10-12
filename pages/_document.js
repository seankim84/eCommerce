import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  
  render() {
    return (
      <html lang="en">
        <Head>
          <title>Sean || Store</title>
          <meta name="author" content={"Sean.Kim"} />
          <meta name="viewport" content="width=500, initial-scale=1" />
          <meta name="description" content="Sean Store buy all Sean Swag" />
          <link
            href="//cdnjs.cloudflare.com/ajax/libs/antd/3.8.1/antd.min.css"
            rel="stylesheet"
          />
          <meta name="theme-color" content="black" />
          <style>{`body { background-color: #EFF2F5!important}`}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}