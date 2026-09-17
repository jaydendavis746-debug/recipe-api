import React from 'react';

export default function FilterControls ({ratingOrder, englishOnly, setRatingOrder, setEnglishOnly}) {

    function toggleRatingFilter () {
        setRatingOrder(!ratingOrder);
    }

    function toggleEnglishFilter () {
        setEnglishOnly(!englishOnly);
    }

    return <div className="filter-controls">
        <label>Highest rated first<input type="checkbox"
         checked={ratingOrder}
         onChange={toggleRatingFilter}></input></label>
        <label>English language only<input type="checkbox"
         checked={englishOnly}
         onChange={toggleEnglishFilter}></input></label>
    </div>
};