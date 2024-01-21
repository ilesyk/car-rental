import { useSelector } from "react-redux";
import { selectCars, selectFavorites, selectFilteredCars } from "../../../redux/selectors";
import { CarsListWrapper } from "./CarsList.styled"
import { ListItem } from "./ListItem"

export const CarsList = ({ isFavorite, currentPage, setCurrentPage }) => {
  const cars = useSelector(selectCars);
  const favoriteCars = useSelector(selectFavorites);
  const filteredCars = useSelector(selectFilteredCars);

  const loadMoreCars = () => {
    setCurrentPage(currentPage + 1);
  }

  return (
    <>
      {isFavorite && !favoriteCars.length ? (
        <h2 style={{ maxWidth: "320px", margin: "0 auto" }}>
          Your favorites list is empty
        </h2>
      ) : (
        <CarsListWrapper>
          <ListItem
            cars={
              isFavorite
                ? favoriteCars
                :  (!filteredCars.length?cars:filteredCars)
            }
          />
        </CarsListWrapper>
      )}
      {currentPage * 12 <=
       (filteredCars.length ? filteredCars.length : cars.length) &&
        !isFavorite && (
          <button
            style={{
              color: "#3470FF",
              fontSize: "16px",
              fontWeight: "500",
              lineHeight: "1.5",
              textDecorationLine: "underline",
              border: "none",
              background: "transparent",
              margin: "0 auto 150px",
              cursor: "pointer",
              display: "block",
            }}
            onClick={loadMoreCars}
          >
            Load more
          </button>
        )}
    </>
  );
};