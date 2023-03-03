import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';

const HomePage = () => {
	return (
		<div className="bg-my-gray-100 min-h-screen">
			<Navbar />
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