export default function Home() {
	return (
		<section className='mt-16 sm:mt-24'>
			<div className='mb-10 text-secondary'>
				<h1 className='text-6xl sm:text-7xl font-bold leading-[0.9]'>
					beerd
					<span className='text-primary'>.</span>
				</h1>
				<p className='text-lg font-normal leading-[1.7]'>
					An independent app for beer lovers.
				</p>
			</div>
			<div>
				<h2>Highest rated beers</h2>
			</div>
			<div>
				<h2>Find beers by popular types</h2>
			</div>
			<div>
				<h2>Find beers by countries</h2>
			</div>
		</section>
	);
}
