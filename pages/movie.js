import Head from 'next/head';
import { withRouter } from 'next/router';

const Movie = props => (
    <div>
        <Head>
            <title>{props.router.query.title} | Sean Store</title>
        </Head>
        <h1>{props.title}</h1>
        <p>Lorem Ipsum</p>
    </div>
);

Movie.getInitialProps = async () => {
    return { title: "lalalalalalalalalal" }
}

export default withRouter(Movie);