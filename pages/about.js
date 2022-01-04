import Navbar from '../components/Navbar';

function AboutPage() {
	return (
		<>
			<Navbar />
			<div class="text-blue-600">
				<h1>The About Page!</h1>
			</div>
			<div>
				<p>
					Hey there! I'm Luke Montgomery, but you've probably heard me go by
					Monty. I'm a computer science student at Westmont college and I'm
					looking to be a software engineer coming out of college. I enjoy
					learning about esoteric programming languages and anything security
					related.
				</p>
			</div>
		</>
	);
}

export default AboutPage;
