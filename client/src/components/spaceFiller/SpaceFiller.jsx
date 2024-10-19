
import PropTypes from "prop-types";

export default function SpaceFiller({ margin = "10px" }) {
  return <div style={{ marginTop: margin }}></div>;
}

SpaceFiller.propTypes = {
  margin: PropTypes.string
};