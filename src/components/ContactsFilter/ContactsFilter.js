import  css  from "./ContactsFilter.module.css";

 export const Filter = ({ filter, onFilterInput }) => (
   <label className={css.filter} htmlFor="">
    Find contacts by name:
    <input className={css.filter__input} type="text" value={filter} onChange={onFilterInput} />
  </label>
);

export default Filter;