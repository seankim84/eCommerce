import Head from 'next/head';
import { withRouter } from 'next/router';
import withLayout from '../lib/withLayout';

const Post = props => (
    <div>
        <Head>
            <title>{props.router.query.title} | Sean Store</title>
        </Head>
        <h1>Plog Post</h1>
        <p>Lorem Ipsum</p>
    </div>
);

export default withLayout(withRouter(Post));