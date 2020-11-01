import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Narbar from "./components/narbar";
import SideMenu from "./components/sideMenu";
import Carousel from "./components/carousel";
import MoveList from "./components/movielist";
import Footer from "./components/footer";
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
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            errorMessage: ""
        };
    }

    // async componentDidMount() {
    //     const movies = await getMovies();
    //     this.setState({ movies });
    // }

    async componentDidMount() {
        getMovies()
            .then((movies) => {
                this.setState({ movies });
            })
            .catch((error) => {
                this.setState({ errorMessage: error });
            });
    }

    render() {
        const { movies, errorMessage } = this.state;
        return (
            <div>
                <Head>
                    <title>Home</title>
                    <link
                        rel="stylesheet"
                        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                        crossOrigin="anonymous"
                    />
                    <script
                        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                        crossOrigin="anonymous"
                    ></script>
                    <script
                        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
                        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
                        crossOrigin="anonymous"
                    ></script>
                    <script
                        src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
                        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
                        crossOrigin="anonymous"
                    ></script>
                </Head>

                <Narbar />

                <div className="container">
                    <button
                        onClick={() => {
                            setCount(count + 1);
                        }}
                    >
                        Click me !
                    </button>

                    <div className="row">
                        <div className="col-lg-3">
                            <SideMenu />
                        </div>

                        <div className="col-lg-9">
                            <Carousel />
                            <div className="row">
                                {errorMessage && (
                                    <div
                                        className="alert alert-danger"
                                        role="alert"
                                    >
                                        {errorMessage}
                                    </div>
                                )}
                                <MoveList movies={movies} />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
export default Home;
