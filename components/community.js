import Container from '../components/ui/container';
import Img from './ui/image';
import { Parallax } from 'react-scroll-parallax';

export default function CommunityBlock() {
	return (
		<section className="py-10 md:py-12 2xl:py-16">
			<Container className="flex flex-col justify-center items-center ">
				<h6 className="text-xl  font-medium text-rq-blue-800 2xl:pb-6 pb-4">
					Our Community
				</h6>
				<h2 className="text-2xl md:text-3xl mb-5 font-bold 2xl:text-40px pb-2 text-center">
					We are a community of 25,000+ Customer
				</h2>
				<p className="leading-loose text-rq-gray-800 lg:max-w-lg xl:max-w-3xl 2xl:max-w-4xl text-center pb-14">
					RedQ, Inc’s core values evolved with customers feedback and we learned
					from our experiences to grow in future. We value and priotize our
					customers opinion and with the experience, we aim higher and higher.
					We think of those values as important to our culture and individual
					sense of accomplishment.
				</p>
				<Parallax y={[-10, 10]} className="mx-auto">
					<Img
						src="/images/community.png"
						alt="Community image"
						width={1166}
						height={390}
					/>
				</Parallax>
			</Container>
		</section>
	);
}
