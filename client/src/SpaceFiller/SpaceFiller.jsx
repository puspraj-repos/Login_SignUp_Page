
import PropTypes from "prop-types";

export default function SpaceFiller({ margin }) {
  return <div style={{ marginTop: margin }}></div>;
}

SpaceFiller.defaultProps = {
  margin: "10px",
};

SpaceFiller.propTypes = {
  margin: PropTypes.string
};