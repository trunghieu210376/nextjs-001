import React from "react";

class MoveList extends React.Component {
    shorten = (text, maxLength) => {
        if (text && text.length > maxLength) {
            return text.substr(0, maxLength) + "...";
        }
        return text.substr(0, 50) + "...";
    };
    renderMovies() {
        if (this.props.movies) {
            const { movies } = this.props;
            var commentNodes = movies.map((movie) => (
                
                <div className="col-lg-4 col-md-6 mb-4" key={movie.id}>
                    <div className="card h-100">
                        <a href="#">
                            <img
                                className="card-img-top"
                                src={movie.image}
                                alt=""
                            />
                        </a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <a href="#">{movie.name}</a>
                            </h4>
                            <h5>$24.99</h5>
                            <p className="card-text">
                                {this.shorten(movie.description, 100)}
                            </p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">{movie.rating}</small>
                        </div>
                    </div>
                </div>
            ));
        }
        return commentNodes;
    }
    render() {
        return <React.Fragment>{this.renderMovies()}</React.Fragment>;
    }
}

export default MoveList;
