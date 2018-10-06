import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDoucment extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return{...initialProps};
        }
        
    render(){
        return(
            <html>
                <Head>
                    <title>Sean's Store</title>
                    <meta name="author" content={"Sean"} />
                </Head>
                <body>
                    <Main/>
                    <NextScript />
                </body>
            </html>
        );
    }
}