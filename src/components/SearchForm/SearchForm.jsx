import css from "./SearchForm.module.css";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { setFilters } from "../../redux/teachersSlice";
import {
  languagesOptions,
  levelOptions,
  priceOptions,
} from "../../constants/searchConstants";

const SearchForm = () => {
  const dispatch = useDispatch();

  const handleSelectChange = (selectedOption, { name }) => {
    const value = Array.isArray(selectedOption)
      ? selectedOption.map((option) => option.value)
      : selectedOption.value;

    dispatch(setFilters({ [name]: value }));
  };

  return (
    <form className={css.form}>
      <label className={css.label}>
        Languages
        <Select
          className={css.select}
          name="languages"
          onChange={handleSelectChange}
          components={{
            IndicatorSeparator: () => null,
          }}
          options={languagesOptions}
          isMulti
        />
      </label>
      <label className={css.label}>
        Level of Knowledge
        <Select
          className={css.select}
          name="levels"
          onChange={handleSelectChange}
          components={{
            IndicatorSeparator: () => null,
          }}
          options={levelOptions}
          isMulti
        />
      </label>
      <label className={css.label}>
        Price
        <Select
          className={css.select}
          name="price_per_hour"
          onChange={handleSelectChange}
          components={{
            IndicatorSeparator: () => null,
          }}
          options={priceOptions}
        />
      </label>
    </form>
  );
};

export default SearchForm;
