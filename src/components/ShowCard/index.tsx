import React from 'react';

export default function ShowCard ({ show }) {
    return (
        <div role='figure' className="show-card">
            <div>
                <img src={show.image.medium}></img>
            </div>
            <div>
                {show.rating.average ? <span role='rating' > ({ show.rating.average }/10)</span> : ""}
                <h2>{show.name}</h2>
                <em>{show.language}, {show.premiered}</em>
                <div dangerouslySetInnerHTML={{ __html: show.summary }}></div>
            </div>
        </div>
    )
};