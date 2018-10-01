import React from 'react';
import SearchResult from './SearchResult';
import PropTypes from 'prop-types';

// class SearchResults extends React.Component {
//   render(){
//     return (
//       <div>
//         <ul className="results-list">
//           {this.results.map( result => {
//             return (
//               <SearchResult
//                 playVideo={this.props.playVideo}
//                 result={result}
//                 key={result.id.videoId}
//               />
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }



function SearchResults ({results,playVideo}){
  return (
    <div>
      <ul className="results-list">
        {results.map( result => {
          return (
            <SearchResult
              playVideo={playVideo}
              result={result}
              key={result.id.videoId}
            />
          );
        })}
      </ul>
    </div>
  );
}

SearchResults.propTypes ={
  results: PropTypes.array,
  playVideo:PropTypes.func
};

export default SearchResults;
