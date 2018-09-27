import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDoucment extends Document {
    render(){
        return(
            <html>
                <Head>
                    <title>Sean's Store</title>
                    <meta name="author" content={"Sean"} />
                    <link href="/static/styles.css" rel={"styleSheet"}/>
                </Head>
                <body>
                    <Main/>
                    <NextScript />
                </body>
            </html>
        );
    }
}