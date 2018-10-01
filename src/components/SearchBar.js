import React from 'react';
import PropTypes from 'prop-types';
// class SearchBar extends React.Component {
//   render(){
//     return (
//       <form
//         className="d-flex justify-content-center"
//         onSubmit={this.props.handleSubmit}
//       >
//         <input
//           type="text"
//           name="query"
//           placeholder="Search..."
//           onChange={this.props.handleChange}
//         />
//         <button type="submit">Search</button>
//       </form>
//     );
//   }
// };

function SearchBar({handleSubmit, handleChange}){
  return (
    <form
      className="d-flex justify-content-center"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="query"
        placeholder="Search..."
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}

SearchBar.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func
};

export default SearchBar;
