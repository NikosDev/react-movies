import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    state = {
        value: ''
    }

    timeout = null;

    doSearch = (event) => {
        this.setState({ value: event.target.value })
        clearTimeout(this.timeout);

        this.timeout = setTimeout(() => {
            this.props.callback(this.state.value);
        }, 500);
    }

    render() {
        return (
            <div className='rmdb-searchbar'>
                <div className='rmdb-searchbar-content'>
                    <input
                        type='text'
                        className='rmdb-searchbar-input'
                        placeholder='Search'
                        onChange={this.doSearch}
                        value={this.state.value}
                    />
                </div>
            </div>
        )
    }
}

export default SearchBar;