import { useSelector } from "react-redux";
import { selectCars, selectFavorites, selectFilteredCars, selectIsLoading } from "../../../redux/selectors";
import { CarsListWrapper, LoadMoreButton } from "./CarsList.styled"
import { ListItem } from "./ListItem"
import { Link } from 'react-router-dom';
import { Loader } from "../../Loader";

export const CarsList = ({ isFavorite, currentPage, setCurrentPage }) => {
  const cars = useSelector(selectCars);
  const favoriteCars = useSelector(selectFavorites);
  const filteredCars = useSelector(selectFilteredCars);
  const isLoading = useSelector(selectIsLoading);
  
  const loadMoreCars = () => {
    setCurrentPage(currentPage + 1);
  }

  return (
    <>
      {isFavorite && !favoriteCars.length ? (
        <div style={{padding: "10px"}}>
          <h2 style={{ maxWidth: '320px', margin: '50px auto 50px', textAlign: "center" }}>
            Your favorites list is empty
          </h2>
          <Link to="/catalog">
            <button
              style={{
                margin: '0 auto',
                display: 'flex',
                height: '48px',
                padding: '14px 44px',
                justifyContent: 'center',
                border: 'none',
                alignItems: 'center',
                borderRadius: '12px',
                background: '#3470FF',
                color: 'white',
              }}
            >
              Go to catalog
            </button>
          </Link>
        </div>
      ) : (
     <CarsListWrapper>
          <ListItem
            cars={
              isFavorite
                ? favoriteCars
                : !filteredCars.length
                ? cars
                : filteredCars
            }
          />
        </CarsListWrapper>
      )}
      { isLoading ? <Loader/> : (currentPage * 12 <=
        (filteredCars.length ? filteredCars.length : cars.length) &&
        !isFavorite && (
          <LoadMoreButton onClick={loadMoreCars}>
            Load more
          </LoadMoreButton>
        ))}
    </>
  );
};