// import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

import ProductList from "../components/ProductList";
import SideBarLg from '../components/SideBarLg';
import ShopByCategory from '../components/ShopByCategory';
import BestDeal from '../components/BestDealPoster';
import FlashSale from '../components/Flashsale';
import { DUMMY_PRODUCTS } from "../constant/Dummy-Products";
import { DUMMY_STORES } from "../constant/Dummy-stores";
import OfficialStores from "../components/OfficialStores";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../store/products-thunk";


const Product = () => {
	const {products } = useSelector((state) => state.products);
	const dispatch = useDispatch();
	const [currentPage, setCurrentPage] = useState(1);

	const itemsPerPage = 7;
	const totalPages = Math.ceil(products.length / itemsPerPage);

	useEffect(() => {
		dispatch(fetchAllProducts());
	}, [dispatch] );

	
	
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentProducts = products.slice(startIndex, endIndex);

	const pageChangeHandler = (newPage) => {
		if(newPage > 0 && newPage <= totalPages ){
			setCurrentPage(newPage);
		}
		console.log(currentProducts, '...........');
	};

	return (
		<div className="bg-[#F5F5F5] relative pt-2.5 lg:relative lg:mt-[6.4rem]">
			{/* { error && <p className="font-bold text-red-500 text-center mt-[5rem]">{error} </p>} */}
			<SideBarLg />
			<ShopByCategory products={DUMMY_PRODUCTS} />
			<BestDeal />
			<ProductList products={currentProducts} />
			<div className="flex">
				<div className="flex flex-row gap-5 w-full pt-[1rem] lg:pt-[0.3rem] justify-center items-center">
					<button
						onClick={() => pageChangeHandler(currentPage - 1)}
						disabled={currentPage === 1}
						className="bg-transparent text-[#FF2A63] border-[#FF2A63] "
					>
						Previous
					</button>

					<div className="border border-solid border-[#FF2A63] px-4 py-1">
						{currentPage}
					</div>

					<button
						onClick={() => pageChangeHandler(currentPage + 1)}
						disabled={currentPage === totalPages}
						className="bg-[#FF2A63] text-white border-[#FF2A63] px-2 py-1 rounded-sm"
					>
						Next
					</button>
				</div>
			</div>
			<BestDeal />
			<FlashSale />
			<OfficialStores goods={DUMMY_STORES} />
			<Footer />
		</div>
	);
};

export default Product;