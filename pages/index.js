//import '../styles/globals.css';

import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
//import '../styles/globals.css';
import SideMenu from "./components/sideMenu";
import Carousel from "./components/carousel";
import MoveList from "./components/movielist";

import { getMovies } from "../actions";

class Home extends React.Component {
    // const [movies, setMovies] = useState([]);
    // const [count, setCount] = useState(0);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const resMovies = await getMovies();
    //         setMovies(resMovies);
    //     };
    //     fetchData();
    // }, [count]);

     static async getInitialProps(){
         const movies = await getMovies()
         return {
             movies : movies
         }
     }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         movies: [],
    //         errorMessage: ""
    //     };
    // }

    // async componentDidMount() {
    //     const movies = await getMovies();
    //     this.setState({ movies });
    // }

    // async componentDidMount() {
    //     getMovies()
    //         .then((movies) => {
    //             this.setState({ movies });
    //         })
    //         .catch((error) => {
    //             this.setState({ errorMessage: error });
    //         });
    // }

    render() {
        // const { movies, errorMessage } = this.state;
        const { movies} = this.props;
        return (
            <div>
               

                <div className="container">
                    

                    <div className="row">
                        <div className="col-lg-3">
                            <SideMenu />
                        </div>

                        <div className="col-lg-9">
                            <Carousel />
                            <div className="row">
                                {/* {errorMessage && (
                                    <div
                                        className="alert alert-danger"
                                        role="alert"
                                    >
                                        {errorMessage}
                                    </div>
                                )} */}
                                <MoveList movies={movies} />
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>
        );
    }
}
export default Home;
