import Modal from "react-modal";
import { ModelInfo, ModelInfoWrap, ModelName, ModelNameWrap } from "../CatalogPage/CarsList/ListItem.styled";
import CloseIcon from "@mui/icons-material/Close";
import { CarDescription, ModalClose, ModalHeaders, RentalCondition, RentalConditionsWrap, RentalLink } from "./Modal.styled";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(18, 20, 23, 0.50)",
    zIndex: "2",
    overflow: "none"
  },

  content: {
    maxWidth: "542px",
    maxHeight: "90vh",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    borderRadius: "24px",
    transform: "translate(-50%, -50%)",
    padding: "40px",
    overflowY: "auto",
  },
};

Modal.setAppElement("#root");

export const CarModal=({car, isOpen, handleClose})=> {

  return (
    <div>
      <Modal
        disableScroll
        isOpen={isOpen}
        onRequestClose={() => {
          handleClose();
        }}
        style={customStyles}
        contentLabel="Car Details Modal"
      >
        <ModalClose onClick={handleClose}>
          <CloseIcon style={{ width: '24px', height: '24px' }} />
        </ModalClose>
        <div
          style={{
            maxWidth: '462px',
            height: '248px',
            marginBottom: '14px',
            borderRadius: '14px',
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
            <span style={{ color: '#3470FF' }}> {car.model}</span>, {car.year}
          </ModelName>
        </ModelNameWrap>
        <ModelInfoWrap style={{ marginBottom: '14px' }}>
          <ModelInfo>{car.address.split(', ')[1]}</ModelInfo>
          <ModelInfo>{car.address.split(', ')[2]}</ModelInfo>
          <ModelInfo>{car.rentalCompany}</ModelInfo>
          <ModelInfo>{car.id}</ModelInfo>
          <ModelInfo>Fuel consumption: {car.fuelConsumption}</ModelInfo>
          <ModelInfo>Engine size: {car.engineSize}</ModelInfo>
        </ModelInfoWrap>
        <CarDescription>{car.description}</CarDescription>
        <ModalHeaders>Accessories and functionalities:</ModalHeaders>
        <ModelInfoWrap style={{ marginBottom: '24px' }}>
          {car.accessories.concat(car.functionalities).map((item, i) => {
            return <ModelInfo key={i}>{item}</ModelInfo>;
          })}
        </ModelInfoWrap>
        <ModalHeaders>Rental Conditions</ModalHeaders>
        <RentalConditionsWrap>
          <RentalCondition>
            {car.rentalConditions.split('\n')[0].split(': ')[0]}:{' '}
            <span style={{ color: '#3470FF', fontWeight: '600' }}>
              {car.rentalConditions.split('\n')[0].split(': ')[1]}
            </span>
          </RentalCondition>
          <RentalCondition>
            {car.rentalConditions.split('\n')[1]}
          </RentalCondition>
          <RentalCondition>
            {car.rentalConditions.split('\n')[2]}
          </RentalCondition>
          <RentalCondition>
            Mileage:{' '}
            <span style={{ color: '#3470FF', fontWeight: '600' }}>
              {car.mileage.toLocaleString('en-US')}
            </span>
          </RentalCondition>
          <RentalCondition>
            Price:{' '}
            <span style={{ color: '#3470FF', fontWeight: '600' }}>
              {car.rentalPrice}
            </span>
          </RentalCondition>
        </RentalConditionsWrap>
        <RentalLink href="tel:+380730000000">Rental car</RentalLink>
      </Modal>
    </div>
  );
}
