import PropTypes from 'prop-types';

export const indexPropTypes = {
  value: PropTypes.string,
  offset: PropTypes.oneOf(['GMT', 'UTC']),
  timezones: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    offset: PropTypes.number.isRequired
  })),
  displayOffset: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  inputProps: PropTypes.object
};

export const defaultIndexPropTypes = {
  value: '',
  offset: 'UTC',
  timezones: [],
  displayOffset: false,
  className: '',
  style: {},
  inputProps: {}
};

export const timezoneListPropTypes = {
  show: PropTypes.bool.isRequired,
  offset: PropTypes.oneOf(['GMT', 'UTC']),
  timezones: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    offset: PropTypes.number.isRequired
  })),
  onSelectZone: PropTypes.func.isRequired,
};

export const inputPropTypes = {
  value: PropTypes.string.isRequired,
  inputProps: PropTypes.object.isRequired,
  onFocus: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};
