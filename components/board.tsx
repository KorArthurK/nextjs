import Link from 'next/link';
import type {FC,ReactNode} from 'react';

type test = {
    id:number
    title:string
}
//export default (props: React.ReactElement) => (

// type Props = {
//     props: React.ReactNode;
// };
      

const Board = (props:test) => (
// export const test: FC<props> =
    <div>
        <li>
            <Link href={`/post?id=${props.id}`}>
                <a style={{fontSize: '1.5rem'}}>{props.title}</a>
            </Link>
        </li>
    </div>
);

export default Board;