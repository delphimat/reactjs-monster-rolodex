import React from "react";

import "./search-box.styles.css";

export const SearchBox = ({placeholder, handleChange}) => (<input
        className='search'
        type="search monsters"
        placeholder={placeholder}
        onChange={handleChange }
    />
);

