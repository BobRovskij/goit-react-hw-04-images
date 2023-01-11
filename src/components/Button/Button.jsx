import PropTypes from 'prop-types';
import style from './Button.module.css';

export const Button = ({ onClick }) => {
    return (
        <button
            type='button'
            className={style.button}
            onClick={onClick}
        >
            Load More
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
}