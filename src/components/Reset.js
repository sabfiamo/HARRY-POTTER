import PropTypes from "prop-types";
function Reset({ handleOnClick }) {
  return (
    <button type="submit" className="form--reset" onClick={handleOnClick}>
      <i className="form--reset__icon fa-solid fa-trash-can"></i>
    </button>
  );
}

Reset.propTypes = {
  handleOnClick: PropTypes.func.isRequired,
};

Reset.propTypes = {
  handleOnClick: PropTypes.func.isRequired,
};
export default Reset;
