//import 'Navbar.css'
import Link from 'next/link';
import { Fragment } from 'react';

export const Navbar = (props) => {
	return (
		<div>
			<div class="flex justify-start inset-x-0 top-0 h-16 border-2 border-rose-600">
				<Link href="/">
					<button class="nav-bar-button">Home</button>
				</Link>
				<Link href="/feed">
					<button class="nav-bar-button">Pages</button>
				</Link>
				<Link href="/feed">
					<button class="nav-bar-button">About</button>
				</Link>
				<Link href="/feed">
					<button class="nav-bar-button">Contact</button>
				</Link>
			</div>
		</div>
	);
};
export default Navbar;
