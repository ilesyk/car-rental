import { useDispatch, useSelector} from "react-redux";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { fetchCars, fetchFilteredCars } from "../../../redux/operations";
import { clearCars,clearFilteredCars, filterValue } from "../../../redux/carsSlice";
import { useState } from "react";
import { selectFilter } from "../../../redux/selectors";
import { SearchButton, ResetFiltersButton } from "./SearchBar.styled"
const makes = [
  "Buick",
  "Volvo",
  "HUMMER",
  "Subaru",
  "Mitsubishi",
  "Nissan",
  "Lincoln",
  "GMC",
  "Hyundai",
  "MINI",
  "Bentley",
  "Mercedes-Benz",
  "Aston Martin",
  "Pontiac",
  "Lamborghini",
  "Audi",
  "BMW",
  "Chevrolet",
  "Chrysler",
  "Kia",
  "Land",
  "Toyota",
  "Tesla",
  "Ford",
  "Honda"
];
export const SearchBar = () => {
  const [selectedMake, setSelectedMake] = useState("");
  const dispatch = useDispatch();
  const [resetFilter, setResetFilter] = useState(false);
  const filter = useSelector(selectFilter)
  const handleSearch = () => {
    if (selectedMake === "") {
      dispatch(clearFilteredCars());
      setResetFilter(false)
      dispatch(fetchCars());
      return;
    }
    dispatch(filterValue(selectedMake));
    dispatch(clearCars());
    dispatch(fetchFilteredCars(selectedMake));
    setResetFilter(true);
  };
  const handleResetFilters = () => {
    setResetFilter(false);
    setSelectedMake("");
dispatch(filterValue(""));
    dispatch(clearFilteredCars());
    dispatch(clearCars());
    dispatch(fetchCars());
    
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "18px",
        marginBottom: "50px",
        flexWrap: "wrap",
      }}
    >
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={makes}
        value={selectedMake || null}
        onChange={(event, newValue) => {
          setSelectedMake(newValue);
        }}
        sx={{
          "& .MuiInputBase-root": {
            width: "224px",
            height: "48px",
            backgroundColor: "#F7F7FB",
            borderRadius: "12px",
            position: "relative",
          },
          " & .MuiInputLabel-root": {
            color: "#121417",
            fontFamily: "Manrope",
            fontSize: "18px",
            fontWeight: "500",
            lineHeight: "20px",
            top: "-3px",
          },
        }}
        renderInput={(params) => (
          <TextField
            sx={{ color: "#121417" }}
            {...params}
            label="Choose car brand"
            value={selectedMake}
          />
        )}
      />
      {(resetFilter || filter) && <ResetFiltersButton
        onClick={handleResetFilters}
      >
        Reset filters
      </ResetFiltersButton>}
      <SearchButton
        onClick={handleSearch}
      >
        Search
      </SearchButton>
    </div>
  );
};
