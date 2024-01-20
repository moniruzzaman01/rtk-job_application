import { useDispatch } from "react-redux";
import { setSearchText, setSort } from "../features/filters/filtersSlice";

export default function Filters() {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-4">
      <div className="search-field group flex-1">
        <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
        <input
          type="text"
          placeholder="Search Job"
          className="search-input"
          id="lws-searchJob"
          onChange={(e) => dispatch(setSearchText(e.target.value))}
        />
      </div>
      <select
        onChange={(e) => dispatch(setSort(e.target.value))}
        id="lws-sort"
        name="sort"
        className="flex-1"
      >
        <option value={""}>Default</option>
        <option value={"low"}>Salary (Low to High)</option>
        <option value={"high"}>Salary (High to Low)</option>
      </select>
    </div>
  );
}
