import { useState } from "react";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const links = [
		{ title: "Products", path: "/" },
		{ title: "Solutions", path: "/" },
		{ title: "Services", path: "/" },
		{ title: "Help Center", path: "/" },
		{ title: "Pricing", path: "/" },
	];

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<div className="w-full h-24 px-5 flex items-center justify-between border-b border-slate-300 sticky top-0 bg-white z-50">
			<span className="font-bold text-2xl text-gray-800">Virtools</span>
			<div className="md:flex hidden items-center gap-6">
				{links.map((link) => (
					<a
						className="font-medium text-[15px]"
						href={link.path}
						key={link.title}
					>
						{link.title}
					</a>
				))}
			</div>
			<div className="flex items-center gap-5">
				<a href="#" className="text-blue-600 font-semibold">
					Log In
				</a>
				<button className="bg-blue-600 text-white rounded-lg w-40 h-12">
					Sign Up For Free
				</button>
				{/* Burger menu icon */}
				<button
					className="md:hidden flex flex-col gap-1 focus:outline-none"
					onClick={toggleMenu}
				>
					<span className="block w-6 h-0.5 bg-gray-800"></span>
					<span className="block w-6 h-0.5 bg-gray-800"></span>
					<span className="block w-6 h-0.5 bg-gray-800"></span>
				</button>
			</div>
			{/* Mobile menu */}
			{menuOpen && (
				<div className="md:hidden absolute top-24 left-0 w-full bg-white shadow-lg border-t border-slate-300">
					<div className="flex flex-col items-center gap-6 p-5">
						{links.map((link) => (
							<a
								className="font-medium text-[15px]"
								href={link.path}
								key={link.title}
								onClick={toggleMenu} // Close menu when a link is clicked
							>
								{link.title}
							</a>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Navbar;
