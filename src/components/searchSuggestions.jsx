import React from 'react';
import { NavLink } from "react-router-dom";


const searchSuggesstions = ({ data, searchWord, toggleDrop}) => {

  if(data !== undefined) {
  //   const findSearchMatch = (str1, str2) => {
  //     var result = '';

  //     const compaer = (char1, char2, i, j, seq) => {
  //       if(i === str1.length || str2.length === j) {
  //         if(result.length < seq.length) {
  //           result = seq;
  //         }
  //         return seq;
  //       }
  //       if(char1 === char2) {
  //         seq += char1;
  //         compaer(str1[i+1], str2[j+1], i + 1, j + 1, seq);
  //       } else {
  //         compaer(str1[i], str2[j+1], i, j + 1, seq);
  //         compaer(str1[i+1], str2[j], i + 1, j, seq);
  //       }
  //     }
  //     compaer(str1[0], str2[1], 0, 0, '');
  //     return result;
  //   }
  return (
    <div className='searchInfoWrap'>
      {data.map(result => 
        <div className='searchInfoRow'>
          <NavLink className='searchInfoLink' to={`/${result.title}`}>
            <p className='searchInfoLink'>{result.title} </p> 
          </NavLink>
            <p className='searchInfoTech'>{result.tech}</p>
        </div>
      )}
    </div>
  )} else return null;
}
export default searchSuggesstions;
