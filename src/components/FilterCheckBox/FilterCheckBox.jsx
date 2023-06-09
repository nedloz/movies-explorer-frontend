import './FilterCheckBox.css';

function FilterCheckBox({ onChange, value }) {
  return (
    <input type='checkbox' className='filter-check-box' onChange={onChange} checked={value} value='' />
  );
};

export default FilterCheckBox;
