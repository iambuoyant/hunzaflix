// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { getMovielist } from "../actions";
// // import { Redirect } from "react-router-dom";

// class Movies extends Component {
//   state = {
//     user: {
//       loggedin: false
//     }
//   };
//   componentWillMount() {
//     this.props.getMovielist();
//   }
//   // componentDidMount() {
//   //     // Call our fetch function below once the component mounts
//   //   this.callBackendAPI()
//   //     .then(res => this.setState({ data: res.express }))
//   //     .catch(err => console.log(err));
//   // }
//   // callBackendAPI = async () => {
//   //   const response = await fetch('/movies');
//   //   const body = await response.json();

//   //   if (response.status !== 200) {
//   //     throw Error(body.message) 
//   //   }
//   //   return body;
//   // };
//   // List all files in a directory in Node.js recursively in a synchronous fashion

//   renderItems = dataArray =>
//     dataArray
//       ? dataArray.map(item => {
//           const styleback = {
//             background: "#dfdfdfde",
//             maxWidth: "100%",
//             textAlign: "center",
//             border: "2px solid #f8f9fa",
//             boxSizing: "border-box"
//           };

//           return (
//             <div
//               key={item.title}
//               className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xm-12 pt-2 mb-2"
//               style={styleback}
//             >
//               <div id={item.title} className="alert alert-primary" role="alert">
//                 <a className="alert-heading mt-2" href="#">
//                   {item.title}
//                 </a>
//               </div>
//               <iframe
//                 width="100% !important"
//                 height="100%"
//                 src={`${item.movie}?rel=0&amp;controls=1&amp;showinfo=0&autoplay=0`}
//                 frameBorder="0"
//                 allowFullScreen
//               />
//               <hr />
//               {item.excerpt}
//               <hr />
//               <div className="alert alert-dark" role="alert">
//                 <a className="alert-heading mt-2" href="#">
//                   Posted By : INam U Khan
//                   <br />
//                 </a>
//                 <a className="alert-heading mt-2" href="#">
//                   {" "}
//                   Published On: {item.publishDate}
//                 </a>
//               </div>
//               <a href="/register">{<button>Full Story</button>}</a>
//               <a href="/register">{<button>Share</button>}</a>

//               <br />
//               <hr />
//             </div>
//           );
//         })
//       : null;
//   render() {
//     console.log(this.props);
//     // let test = walkSync();
//     // console.log("get dir files", test);
//     const stylerow = {
//       width: "100%",
//       maxWidth: "100%",
//       display: "inline-flex"
//     };
//     const styleblogcontainer = {
//       width: "100%",
//       maxWidth: "100%",
//       display: "inline-flex"
//     };
//     return (
//       <div className="container ml-0 mr-0" style={styleblogcontainer}>
//         <div className="row" style={stylerow}>
//           {this.renderItems(this.props.moviedata.movies)}{" "}
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     // blogdata: state.blogposts
//     moviedata: state.movies
//   };
// };
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(
//     {
//       getMovielist
//     },
//     dispatch
//   );
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Movies);
