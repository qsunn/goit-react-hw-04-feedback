import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, handleFeedback }) => {
  return (
    <div className="btns">
      {options.map(option => {
        return (
          <button
            className="btn"
            key={option}
            onClick={() => handleFeedback(option)}
          >
            {option[0].toUpperCase() + option.slice(1)}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleFeedback: PropTypes.func.isRequired,
};
