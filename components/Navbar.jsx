//import 'Navbar.css'
import Link from 'next/link';
import { Fragment } from 'react';

export const Navbar = (props) => {
	return (
		<div>
			<div>
				<Link href="/">
					<button>Home</button>
				</Link>
				<Link href="/feed">
					<button>Feed</button>
				</Link>
				<Link href="/about">
					<button>About</button>
				</Link>
				<Link href="/contact">
					<button>Contact</button>
				</Link>
			</div>
		</div>
	);
};
export default Navbar;
