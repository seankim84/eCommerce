import Head from 'next/head';
import { withRouter } from 'next/router';

const Post = props => (
    <div>
        <Head>
            <title>{props.router.query.title} | Sean Store</title>
        </Head>
        <h1>{props.router.query.title}</h1>
        <p>Lorem Ipsum</p>
    </div>
);

export default withRouter(Post);