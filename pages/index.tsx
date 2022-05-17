import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
	return (
		<div className='h-screen relative '>
			<div className='absolute grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full justify-center p-3 top-1/3 h-96'>
				<div className='card'>
					<div className='fakeMenu'>
						<div className='fakeButtons fakeClose'></div>
						<div className='fakeButtons fakeMinimize'></div>
						<div className='fakeButtons fakeZoom'></div>
					</div>
					<div className='fakeScreen'>
						<p className='line1'>
							&#91;&nbsp;&ldquo;I'm a web developer.&rdquo;,
							<span className='cursor1'>_</span>
						</p>
						<p className='line2'>
							&nbsp;&nbsp;&ldquo;I'm a web designer.&rdquo;,
							<span className='cursor2'>_</span>
						</p>
						<p className='line3'>
							&nbsp;&nbsp;&ldquo;Let's work together!&rdquo;&nbsp;&#93;
							<span className='cursor3'>_</span>
						</p>
						<p className='line4'>
							{`>`}
							<span className='cursor4'>{`_`}</span>
						</p>
					</div>
				</div>

				<div className='card'>09</div>
			</div>
		</div>
	);
};

export default Home;
