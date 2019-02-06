// import React, { Component } from "react";
// import { getUserByUsername } from "../api";

// class Auth extends Component {
//   state = {
//     userText: "",
//     userErr: null,
//     userLoadingState: false
//   };

//   render() {
//     const { user, children } = this.props;
//     const { userText, userErr } = this.state;
//     if (user) {
//       return children;
//     } else {
//       return (
//         <div>
//           <h3> Please Login!</h3>
//           <form onSubmit={this.handleSubmit}>
//             <input
//               value={userText}
//               placeholder="type username here"
//               onChange={this.handleChange}
//             />
//           </form>
//           {userLoading && <p>Loading...</p>}
//           {userErr && <h4>No user with this name</h4>}
//         </div>
//       );
//     }
//   }
//   handleSubmit = event => {
//     event.preventDefault();

//     const { setUser } = this.props;
//     const { userText } = this.state;
//     this.setState({ userLoading: true });

//     getUserByUsername(userText)
//       .then(({ user }) => {
//         setUser(user);
//       })
//       .catch(err => {
//         this.setState({
//           userErr: err,
//           userLoading: false
//         });
//       });
//     setUser(userText);
//     this.setState({
//       userText: ""
//     });
//   };

//   handleChange = event => {
//     const { value } = event.target;
//     this.setState({
//       userText: value
//     });
//   };
// }

// export default Auth;
