//montyand.me/feed/ or lmonty.com/feed/

import Link from 'next/link';
import { Fragment } from 'react';
import Navbar from '../../components/Navbar';

function Feed() {
	return (
		<Fragment>
			<Navbar />
			<div class="text-blue-600">
				<h1> The Feed Page! </h1>
			</div>
			<ul>
				<li>
					<Link href="feed/Something-Cool-With-Haskell">
						Something Cool With Haskell
					</Link>
				</li>
			</ul>
		</Fragment>
	);
}

export default Feed;
