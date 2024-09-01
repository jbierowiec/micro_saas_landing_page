import baloons from "../../assets/images/baloons.jpg";

const Banner = () => {
	return (
		<div className="w-full md:px-24 px-4 md:pt-44 pt-28">
			<div
				className="flex w-full rounded-3xl relative md:h-[80vh] h-[50vh] items-center justify-center bg-cover bg-center md:p-0 p-4"
				style={{ backgroundImage: `url(${baloons})` }}
			>
				<div className="w-full h-full absolute rounded-3xl left-0 top-0 bg-[#581C87] opacity-75 z-10"></div>
				<div className="flex flex-col gap-4 md:w-[60%] w-full z-20 text-center p-6 md:p-12">
					<span className="font-bold md:text-[50px] text-[30px] text-white md:leading-[60px] leading-[40px]">
						Come and get solved with ease
					</span>
					<p className="leading-6 text-white md:max-w-[580px] max-w-full mx-auto">
						Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.
					</p>
					<a
						href="#"
						className="text-white font-semibold"
					>
						Improve workflow
					</a>
				</div>
			</div>
		</div>
	);
};

export default Banner;
