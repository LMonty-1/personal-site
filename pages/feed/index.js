//montyand.me/feed/ or lmonty.com/feed/

import Link from 'next/link';
import { Fragment } from 'react';

function Feed () {
    return <Fragment>
         <h1> Some Great Articles to view </h1>
         <ul>
             <li> <Link href="feed/Something-Cool-With-Haskell"> Something Cool With Haskell </Link> </li>
         </ul>
         </Fragment>
}

export default Feed;