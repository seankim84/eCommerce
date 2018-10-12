import { Layout } from "antd";
import App, { Container } from "next/app";
import React from "react";
import withNProgress from "next-nprogress";
import NProgressStyles from "next-nprogress/styles";
import { ApolloProvider } from "react-apollo";
import withApollo from "../lib/withApollo";
const { Footer } = Layout;

class MyApp extends App  {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <Container>
        <ApolloProvider client={ apollo }>
        
          <NProgressStyles color="#29d" spinner={false} />
            <Layout>
              <Component {...pageProps} />
              <Footer>This is important</Footer>
            </Layout>  
        </ApolloProvider>
      </Container>
    );
  }
}
export default withNProgress()(withApollo(MyApp));