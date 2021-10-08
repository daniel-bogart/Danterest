import React from 'react';
import NavLink from 'react-router-dom';
import { FaPlus } from "react-icons/fa"

class FooterButton extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div className="footer">
        <NavLink>
          <FaPlus size={25}/>
        </NavLink>
      </div>
    )
  };
};

export default FooterButton;





// class FooterButton extends React.Component {
//   constructor(props) {
//     super(props);

//   }

//   render() {
  
//     return (
//       <footer>
//         <NavLink>
//           <FaPlus size={25}/>
//         </NavLink>
//       </footer>
//     )
//   }
// };

// export default FooterButton;