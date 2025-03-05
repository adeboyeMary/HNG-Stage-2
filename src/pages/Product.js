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
	const {products, loading, error } = useSelector((state) => state.products);
	const dispatch = useDispatch();
	const [currentPage, setCurrentPage] = useState(1);
	// const [products, setProducts] = useState([]);
	const [totalPages, setTotalPages] = useState(0);

	const itemsPerPage = 10;

	useEffect(() => {
		dispatch(fetchAllProducts());
	}, [dispatch] );

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentProducts = products?.slice(startIndex, endIndex);

	const pageChangeHandler = (newPage) => {
		setCurrentPage(newPage);
	};

	return (
		<div className="bg-[#F5F5F5] relative pt-2.5 lg:relative lg:mt-[6.4rem]">
			<SideBarLg />
			<ShopByCategory products={DUMMY_PRODUCTS} />
			<BestDeal />
			{loading && <p className="font-bold text-red-500 text-center mt-[10rem]">{loading} </p>}
			{ error && <p className="font-bold text-red-500 text-center mt-[10rem]">{error} </p>}
			<ProductList products={products} />
			<BestDeal />
			<FlashSale />
			<OfficialStores goods={DUMMY_STORES} />

			<div className="flex">
				<div className="flex flex-row gap-5 w-full justify-center items-center">
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

			<Footer />
		</div>
	);
};

export default Product;