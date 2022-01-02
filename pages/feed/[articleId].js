//montyand.me/feed/[articleId] or lmonty.com/feed/[articleId]

import { useRouter } from 'next/router';
import { Fragment } from 'react';
import Navbar from '../../components/Navbar';

function Feed() {
	const router = useRouter();

	const requestedArticle = router.query.articleId;

	return (
		<div>
			<Navbar />
			<div class="text-blue-600">
				<h1> The Article Page(s)! </h1>
			</div>
			<h1> You've Requested {requestedArticle} </h1>
		</div>
	);
}

export default Feed;
