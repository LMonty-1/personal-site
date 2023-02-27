// pages/index.js
import Link from 'next/link';
import Image from 'next/image';

const HomePage = () => {
	return (
		<div className="bg-my-gray-100 min-h-screen">
			{/* Navigation */}
			<nav className="bg-white shadow-lg">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between h-16">
						<div className="flex-shrink-0 flex items-center">
							<Image className="h-8 w-8" src="/favicon.ico" alt="Logo" />
							<span className="ml-2 font-bold">Next.js Blog</span>
						</div>
						<div className="flex justify-start">
							<ul className="flex-1 flex items-center justify-start space-x-2">
								<li>
									<Link href="/">
										<a className="link mx-2">Home</a>
									</Link>
								</li>
								<li>
									<Link href="/articles">
										<a className="link mx-2">Articles</a>
									</Link>
								</li>
								<li>
									<Link href="/contact">
										<a className="link mx-2">Github</a>
									</Link>
								</li>
								<li>
									<Link href="/contact">
										<a className="link mx-2">Linkedin</a>
									</Link>
								</li>
								<li>
									<Link href="/contact">
										<a className="link mx-2">Contact</a>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>

			{/* Main content */}
			<main>
				<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
					<div className="px-4 py-6 sm:px-0">
						<h1 className="text-4xl font-bold text-my-gray-900 mb-4">
							Welcome to My Site
						</h1>
						<p className="text-lg text-my-gray-700">
							This is a demo site built with Next.js and Tailwind CSS. Feel free to explore and learn how it was created!
						</p>
					</div>
				</div>
			</main>
		</div>
	);
};

export default HomePage;