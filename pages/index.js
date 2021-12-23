import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import bannerPic from '../public/forst.jpg';

export default function Home() {
	return (
		<div>
			<div style={{ textAlign: 'center', height: '10vh', overflow: 'hidden' }}>
				<Image src={bannerPic} alt="i really like milk" />
			</div>
			<div style={{ textAlign: 'center' }}>
				<h1> basic title </h1>
			</div>
		</div>
	);
}
