import React, { Component } from "react";
import { connect } from "react-redux";
import { Movies } from "../actions/index.js";
import VideoPlayer from "./VideoPlayer";


const URL = "http://localhost:5000/data/movies/";
class AllMovies extends Component {
  constructor(props){
    super(props);
    this.state = {
    data: null,
    newMovies: [],
    Movies: []
  };
  }

  componentWillMount() {
    this.movielist();
  }

  // componentWillUnmount() {
  //   this.setState({
  //     newMovies: null,
  //     Movies: null
  //   });
  // }
  movielist = () => {
    let Movies =[];
    this.props.Movies(res => {
      if (typeof res !== "undefined") {
        console.log("Response", res);
        if (typeof res.data !== "undefined") {
          Movies = JSON.parse(res.data.movieslist);
          this.setState({
            newMovies: res.data.movieslist
          });
          this.setState({
            Movies: Movies
          });
          this.props.history.push('/movies');
        }
      } else {
        console.log(res);
      }
    });
  };
renderAllMovies=()=>{
  if (this.state.Movies.length < 1) {
      return <h1>Movies Loading .....</h1>;
    } else if (this.state.Movies.length > 1) {
      return this.renderMovies();
    }
}
  renderItems = dataArray =>
    dataArray
      ? dataArray.map(item => {
          const styleback = {
            background: "#dfdfdfde",
            maxWidth: "100%",
            textAlign: "center",
            border: "2px solid #f8f9fa",
            boxSizing: "border-box"
          };

          return (
            <div
              key={item.title}
              className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xm-12 pt-2 mb-2"
              style={styleback}
            >
              <div id={item.title} className="alert alert-primary" role="alert">
                <p>{item.title}</p>
              </div>
              {/* <iframe
                width="100% !important"
                height="100%"
                src={`${URL}${
                  item.title
                }?rel=0&amp;controls=1&amp;showinfo=0&autoplay=1`}
                frameBorder="0"
                allowFullScreen
              /> */}
              <VideoPlayer controls={true} src={`${URL}${item.title}`} />
            </div>
          );
        })
      : null;
  renderMovies() {
    const stylerow = {
      width: "100%",
      maxWidth: "100%",
      display: "inline-flex"
    };
    const styleblogcontainer = {
      width: "100%",
      maxWidth: "100%",
      display: "inline-flex"
    };
    return (
      <div className="container ml-0 mr-0" style={styleblogcontainer}>
        <div className="row" style={stylerow}>
          {this.renderItems(this.state.Movies)}{" "}
        </div>
      </div>
    );
  }
  render() {
    
    console.log("I am in Movies");
    console.log(this.state);
    return(this.renderAllMovies()); 
  }
}

export default connect(
  null,
  { Movies }
)(AllMovies);
