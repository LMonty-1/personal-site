//import 'Navbar.css'
import Link from 'next/link';
import { Fragment } from 'react';

export const Navbar = (props) => {
	return (
		<div>
			<div class="space-x-8">
				<Link href="/">Home</Link>
				<Link href="/feed"> Pages </Link>
				<Link href="/"> About </Link>
				<Link href="/"> Contact </Link>
			</div>
		</div>
	);
};
export default Navbar;
