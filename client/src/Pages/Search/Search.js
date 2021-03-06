import React, {Component} from 'react';
import SearchForm from '../../Components/SearchForm/SearchFrom'


class Search extends Component  {


    render() {
        return (
            <div className ="container">
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">Search Books </h1>
                        <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>
                </div>
                <SearchForm />
            </div>
        )
    }
}

export default Search;