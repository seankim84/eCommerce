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
                    <link 
                        href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.8.1/antd.min.css" 
                        rel="stylesheet" 
                    />
                </Head>
                <body>
                    <Main/>
                    <NextScript />
                </body>
            </html>
        );
    }
}