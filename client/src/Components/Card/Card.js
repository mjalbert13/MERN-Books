import React, {Component} from 'react';

class Card extends Component {

    render() {
        return(
            <div>
                <div className="card">
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Title</h5>
                        <p className="card-text">Author(s)</p>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="btn btn-primary">Save</a>
                     </div>
                </div>
            </div>
        )
    }
}

export default Card;