import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';

const ArticlesPage = () => {
	const articles = [
		{
			title: 'Article 1',
			description: 'This is a description of Article 1.',
			link: '/article1'
		},
		{
			title: 'Article 2',
			description: 'This is a description of Article 2.',
			link: '/article2'
		},
		{
			title: 'Article 3',
			description: 'This is a description of Article 3.',
			link: '/article3'
		}
	];

	return (
		<div className="bg-my-gray-100 min-h-screen">
			<Navbar />
			<main>
				<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
					<div className="px-4 py-6 sm:px-0">
						<h1 className="text-4xl font-bold text-my-gray-900 mb-4">
							My Articles
						</h1>
						{articles.map((article) => (
							<div key={article.title} className="mb-6">
								<Link href={"articles/"+article.link}>
									<a className="text-lg text-my-gray-700 font-bold hover:underline">
										{article.title}
									</a>
								</Link>
								<p className="text-my-gray-700">{article.description}</p>
							</div>
						))}
					</div>
				</div>
			</main>
		</div>
	);
};

export default ArticlesPage;