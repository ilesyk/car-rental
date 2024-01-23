import { useSelector } from "react-redux";
import { selectCars, selectFavorites, selectFilteredCars, selectIsLoading } from "../../../redux/selectors";
import { CarsListWrapper } from "./CarsList.styled"
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
        <>
          <h2 style={{ maxWidth: '320px', margin: '50px auto 50px' }}>
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
        </>
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
          <button
            style={{
              color: '#3470FF',
              fontSize: '16px',
              fontWeight: '500',
              lineHeight: '1.5',
              textDecorationLine: 'underline',
              border: 'none',
              background: 'transparent',
              margin: '0 auto 150px',
              cursor: 'pointer',
              display: 'block',
              "&:is(:hover, :focus)":{
                background: "#0B44CD",
              },
              transition: "background 200ms linear"
            }}
            onClick={loadMoreCars}
          >
            Load more
          </button>
        ))}
    </>
  );
};