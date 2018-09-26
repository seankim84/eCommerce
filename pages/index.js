import Head from 'next/head';
import PostLink from '../components/PostLink';
import withLayout from '../lib/withLayout';

const Index = () => ( 
    <div>
        <Head>
            <title>Home | Sean</title>
        </Head>
        <h1>Post:
            <ul>
                <li>
                    <PostLink title={"Something"} />
                </li>
                <li>
                    <PostLink title={"Something else"} />
                </li>
            </ul>
        </h1>
    </div>
);

export default withLayout(Index)