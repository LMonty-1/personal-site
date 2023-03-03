import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';

const ArticlePage = () => {
	return (
		<div className="bg-my-gray-100 min-h-screen">
			<Navbar />
			<main>
				<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
					<div className="px-4 py-6 sm:px-0">
						<h1 className="text-4xl font-bold text-my-gray-900 mb-4">
							Article 1
						</h1>
						<p className="text-lg text-my-gray-700 mb-4">
							This is a description of Article 1.
						</p>
						<p className="text-lg text-my-gray-700 mb-4">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia dui at semper vulputate. Donec mollis pellentesque tellus, eu aliquam ex fringilla in. Maecenas eget felis eu elit sagittis hendrerit eget in urna. Donec a bibendum urna. Praesent sit amet arcu quis est interdum finibus a vel velit. Praesent nec commodo urna, a egestas felis. Fusce in orci id urna feugiat vulputate. Vestibulum maximus sem a dui eleifend, sit amet fringilla nibh pellentesque. Nullam rhoncus velit vel urna faucibus vehicula.
						</p>
						<p className="text-lg text-my-gray-700">
							Vivamus pharetra arcu sit amet est congue, a convallis ipsum vehicula. Integer dignissim volutpat ex, ut pharetra augue rhoncus in. Ut nec bibendum lorem. Fusce consequat libero eu enim luctus bibendum. In tempor, nulla eget vestibulum iaculis, lacus mauris volutpat ex, sed pulvinar ipsum magna nec odio. Morbi sit amet elit sed velit fermentum faucibus vel vel nisi. Sed iaculis varius turpis, vel interdum leo dictum eu. Maecenas viverra pretium lacus at rhoncus. Vivamus eu ipsum suscipit, bibendum dolor sit amet, aliquam massa. Morbi vel eros euismod, vestibulum lectus in, vestibulum dolor. In iaculis libero vel tortor placerat faucibus. Proin feugiat nisi vel mauris maximus iaculis.
						</p>
					</div>
				</div>
			</main>
		</div>
	);
};

export default ArticlePage;