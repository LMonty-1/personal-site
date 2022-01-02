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
			<h1> You've Requested {requestedArticle} </h1>
		</div>
	);
}

export default Feed;
