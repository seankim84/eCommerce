import Head from 'next/head';
import Header from '../../components/Header';
import Button from '../../components/Button';
import {Button as AntButton} from 'antd';
import {PostCard} from '../../components/ProductCard';

export default ({data}) => (
    <div>
        <Head>
            <title>Cart | Sean Store</title>
        </Head>
        <Header 
            centerColumn={<h4>Cart</h4>}
            rightColumn={<Button href="/" text="Home"/>}
            leftColumn={<Button href="/search" text="Search" />}
        >
        <div
            style={{
                marginBottom:"50px"
            }}
        >
            
        </div>
        </Header>
    </div>
)