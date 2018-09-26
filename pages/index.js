import Head from 'next/head';
import Link from 'next/link';

export default () => ( 
    <div>
        <Head>
            <title>Home | Sean</title>
        </Head>
        <h1>Hellow this is Index Page</h1>{" "}
        <Link href={"/about"}>
            <a>About Page</a>
        </Link>
    </div>
);