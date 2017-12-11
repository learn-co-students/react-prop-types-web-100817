import PropTypes from 'prop-types';

this.defaultProps = {
  prop: 'default value',
  otherProp: 'another value'
};

this.propTypes = {
  prop: PropTypes.bool,
  another: PropTypes.string,
  third: PropTypes.shape({
    nestedAttr: PropTypes.string,
    othernested: PropTypes.string.isRequired
  })
};
