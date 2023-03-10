import PropTypes from 'prop-types';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from './Searchbar.module.css';


export const Searchbar = ({ onSubmit }) => {
    const [value, setValue] = useState('');

    const handleInputChange = event => {
        const inputValue = event.currentTarget.value.toLowerCase();
        setValue(inputValue);
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        if (value.trim() === '') {
            toast.error('Enter search query.');
            reset();
            return;
        }
        onSubmit(value);
        reset();
    };

    const reset = () => {
        setValue('');
    };

        return (
            <header className={style.searchbar}>
                <form
                    className={style.searchForm}
                    onSubmit={handleFormSubmit}
                >
                    <button type="submit" className={style.searchFormButton}>
                        <BsSearch />
                        <span className={style.searchFormButtonLabel}>Search</span>
                    </button>

                    <input
                        className={style.searchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={value}
                        onChange={handleInputChange}
                    />
                </form>
            </header>
        );
    }; 


Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};