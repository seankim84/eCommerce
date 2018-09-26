import Head from 'next/head';
import Link from 'next/link';
import withLayout from '../lib/withLayout';

const Index = () => ( 
    <div>
        <Head>
            <title>Home | Sean</title>
        </Head>
        <h1>Hellow this is Index Page</h1>
    </div>
);

export default withLayout(Index)