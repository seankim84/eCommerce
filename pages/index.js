import Head from 'next/head';
import PostLink from '../components/PostLink';

export default () => ( 
    <div>
        <Head>
            <title>Home | Sean</title>
        </Head>
        <h1>Movies:
            <ul>
                <li>
                    <PostLink title={"Something"} id={0} />
                </li>
                <li>
                    <PostLink title={"Something else"} id={1} />
                </li>
            </ul>
        </h1>
    </div>
);