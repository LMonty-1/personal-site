//montyand.me/feed/[articleId] or lmonty.com/feed/[articleId]

import { useRouter } from 'next/router';
import { Fragment } from 'react';

function Feed () {
    const router = useRouter();

    const requestedArticle = router.query.articleId;

    return <h1> You've Requested (article title here) </h1>
}

export default Feed;