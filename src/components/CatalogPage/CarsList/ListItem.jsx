import { useState } from "react";
import { CarModal } from "../../ModalWindow/Modal";
import {
  FavoriteButton,
  ListItemWrapper,
  ModelImageWrap,
  ModelInfo,
  ModelInfoWrap,
  ModelName,
  ModelNameWrap,
  SeeMoreButton,
} from "./ListItem.styled";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../../redux/favoritesSlice";
import { selectFavorites } from "../../../redux/selectors";
const favoriteIcon = {
  width: "18px",
  height: "18px",
  fill: "white",
  strokeOpacity: "0.8",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const favoriteIconSelected = {
  width: "18px",
  height: "18px",
  fill: "#3470FF",
  stroke: "#3470FF",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
export const ListItem = ({ cars }) => {
  const [isOpen, setIsOpen] = useState(false);
  const favoriteCars = useSelector(selectFavorites);
  const handleOpen = (car) => {
    setClickedCar(car);
    document.body.style.overflow = 'hidden';
    setIsOpen(true);
  };
  const handleClose = () => {
    setClickedCar(null);
<<<<<<< Updated upstream
    document.body.style.overflow = '';
=======
<<<<<<< HEAD
    document.body.style.overflow = 'auto';
=======
    document.body.style.overflow = '';
>>>>>>> 5b8fc10a78afe94dc73f11f810f1e1581feb9c85
>>>>>>> Stashed changes
    setIsOpen(false);
  };
  const [clickedCar, setClickedCar] = useState(null);
  const dispatch = useDispatch();
  const handleAddToFavorites = (car) => {
    dispatch(addToFavorites(car));
  };
  const handleRemoveFromFavorites = (car) => {
    dispatch(removeFromFavorites(car));
  };
  const isInFavorite = (car) => {
    return favoriteCars && favoriteCars.find((favoriteCar) => favoriteCar.id === car.id);
  };
  return (
    <>
      {cars &&
        cars.map(car => {
          return (
            <ListItemWrapper key={car.id}>
              {isInFavorite(car) ? (
                <FavoriteButton
                  onClick={() => {
                    handleRemoveFromFavorites(car);
                  }}
                >
                  <FavoriteIcon style={favoriteIconSelected} />
                </FavoriteButton>
              ) : (
                <FavoriteButton
                  onClick={() => {
                    handleAddToFavorites(car);
                  }}
                >
                  <FavoriteBorderIcon style={favoriteIcon} />
                </FavoriteButton>
              )}
              <ModelImageWrap
                style={{
                  background: `linear-gradient(180deg, rgba(18, 20, 23, 0.5) 2.5%, rgba(18, 20, 23, 0) 41.07%), url(${car.img})`,
                  backgroundPosition: '50%',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundHeight: '100%',
                }}
              />
              <ModelNameWrap>
                <ModelName>
                  {car.make}
                  <span style={{ color: '#3470FF' }}> {car.model}</span>,{' '}
                  {car.year}
                </ModelName>
                <ModelName>{car.rentalPrice}</ModelName>
              </ModelNameWrap>
              <ModelInfoWrap>
                <ModelInfo>{car.address.split(', ')[1]}</ModelInfo>
                <ModelInfo>{car.address.split(', ')[2]}</ModelInfo>
                <ModelInfo>{car.rentalCompany}</ModelInfo>
                <ModelInfo>{car.id}</ModelInfo>
              </ModelInfoWrap>
              <SeeMoreButton onClick={() => handleOpen(car)}>
                See more
              </SeeMoreButton>
            </ListItemWrapper>
          );
        })}
      {isOpen && (
        <CarModal
          isOpen={isOpen}
          handleClose={handleClose}
          car={clickedCar}
        />
      )}
    </>
  );
};
