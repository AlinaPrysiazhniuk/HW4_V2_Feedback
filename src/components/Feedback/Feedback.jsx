import css from "./Feedback.module.css";
import PropTypes from 'prop-types';

export const Feedback = ({options, onFeedback}) => {
const stateData = Object.keys(options);

    return (
        <div>
            {stateData.map(option => (
                <button
                className={css.button_feedback}
                key={option}
                type="button"
                name={option}
                onClick={() => onFeedback(option)}
                >{option}</button>
            ))}

        </div>)
}

Feedback.propTypes = {
    options: PropTypes.object,
    onFeedback: PropTypes.func,
  };

