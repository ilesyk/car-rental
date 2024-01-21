import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { CarsList } from "../components/CatalogPage/CarsList/CarsList";
import { SearchBar } from "../components/CatalogPage/SearchBar/SearchBar";
import { Loader } from "../components/Loader";
import { fetchCars} from "../redux/operations";

const Catalog = ({ isFavorite }) => {
  const isLoading = useSelector((state) => state.cars.isLoading);
  const error = useSelector((state) => state.cars.error);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    const request = dispatch(fetchCars(currentPage));
    return () => request.abort();
  }, [currentPage, dispatch]);

  return (
    <>
      {!isFavorite && <SearchBar />}
      {isLoading && <Loader />}
      {error && toast.error("Something was wrong :(")}
      <CarsList
        isFavorite={isFavorite}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Catalog;
