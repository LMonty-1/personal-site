import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';

const ContactPage = () => {
	return (
		<div className="bg-my-gray-100 min-h-screen">
			<Navbar />
			<main>
				<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
					<div className="px-4 py-6 sm:px-0">
						<h1 className="text-4xl font-bold text-my-gray-900 mb-4">
							Contact Me
						</h1>
						<p className="text-lg text-my-gray-700 mb-4">
							You can contact me any time through email:
						</p>
						<ul className="list-disc list-inside text-lg text-my-gray-700 mb-4">
							<li>School Email: LuMontgomery@westmont.edu</li>
							<li>Personal Email: LukeMontgomery776@gmail.com</li>
						</ul>
						<p className="text-lg text-my-gray-700">
							Please feel free to reach out to me with any questions, comments, or inquiries you may have.
						</p>
					</div>
				</div>
			</main>
		</div>
	);
};

export default ContactPage;