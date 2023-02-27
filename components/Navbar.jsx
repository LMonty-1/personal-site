import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
	return (
		<nav className="bg-white shadow-lg">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex-shrink-0 flex items-center">
						<Image width="32em" height="32em" src="/favicon.ico" alt="Logo" />
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
	);
};

export default Navbar;