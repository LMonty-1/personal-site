//montyand.me/feed/[articleId] or lmonty.com/feed/[articleId]

import { useRouter } from 'next/router';
import { Fragment } from 'react';

function Feed() {
	const router = useRouter();

	const requestedArticle = router.query.articleId;

	return (
		<div>
			<div>
				<h1> The Article Page(s)! </h1>
			</div>
			<h1> You&#39;ve Requested {requestedArticle} </h1>
		</div>
	);
}

export default Feed;
