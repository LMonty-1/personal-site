//montyand.me/ or lmonty.com/
import Navbar from '../components/Navbar';

function HomePage() {
	return (
		<>
			<Navbar />
			<div class="text-blue-600">
				<h1> The Home Page! </h1>
			</div>
			<div>
				<p>
					{' '}
					Welcome to the Site! If you're seeing this, we're still under
					constructions. Know that there will be more coming soon! In place of
					this text, I will tell you all about the cool projects and experience
					I've had. I will then tell you to check out the Pages tab if you're
					interested in specifics, the About tab if you want a quick overview,
					and the Contact tab if you want any of my contact information. Cheers!
				</p>
			</div>
		</>
	);
}

export default HomePage;
