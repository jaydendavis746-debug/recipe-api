// import React, { useState, useEffect } from 'react';
// import { SearchForm, ShowList } from '..';
// import { useShow } from '../../contexts';

// export default function SearchWidget () {

//     const [ratingOrder, setRatingOrder] = useState(false);
//     const [englishOnly, setEnglishOnly] = useState(false);

//     const { setShowData } = useShow();
//     const [searchString, setSearchString] = useState("Married at First Sight");

//     useEffect(() => {

//         async function searchAPI() {
//             const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchString}`);
//             const rawData = await response.json();
//             const data = rawData.map(s => s.show);
//             setShowData(data);
//         }

//         searchAPI();

//     }, [searchString]);

//     function handleSearch(userInput){
//         setSearchString(userInput);
//     }

//     return <>
//         <SearchForm handleSearch={handleSearch} lastSearch={searchString}/>
//         {<ShowList ratingOrder={ratingOrder} englishOnly={englishOnly} setRatingOrder={setRatingOrder} setEnglishOnly={setEnglishOnly}/> }
//     </>
// };