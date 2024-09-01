const Community = () => {
	return (
		<div className="w-full md:px-24 px-4 md:pt-44 pt-28 pb-16">
			<div className="flex w-full rounded-3xl relative md:h-[80vh] h-[60vh] items-center justify-center md:px-12 px-6">
				<div className="w-full h-full absolute rounded-3xl left-0 top-0 bg-gradient-to-br from-[#1E40AF] to-[#701A75] z-10"></div>
				<div className="flex flex-col gap-6 md:w-[70%] w-full z-20 text-center md:p-12 p-8">
					<span className="font-bold md:text-[60px] text-center text-white text-[40px] md:leading-[70px] leading-[50px]">
						Join the community today
					</span>
					<p className="leading-7 text-white text-center max-w-[90%] mx-auto">
						Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.
					</p>
					<button className="bg-blue-600 text-white rounded-lg px-8 h-12 max-w-[180px] self-center whitespace-nowrap">
						Sign Up For Free
					</button>
				</div>
			</div>
		</div>
	);
};

export default Community;
