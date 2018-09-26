import Link from 'next/link';

export default (props) => 
    <Link href={`/post?title=${props.title}`} as={`/post/${props.title}`}>
        <a>{props.title}<style jsx global>{`
            a {
                background-color: red;
                color: white;
            }
        `}</style></a>
    </Link>