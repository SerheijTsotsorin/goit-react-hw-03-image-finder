import React, { Component } from 'react';
// import { toast } from 'react-toastify';
import './Searchbar.css';
import { PropTypes } from 'prop-types';

export default class Searchbar extends Component {
  state = {
    searchName: '',
  };

  handleChange = evt => {
    this.setState({ searchName: evt.currentTarget.value.toLowerCase() });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    if (this.state.searchName.trim() === '') {
      alert('enter search term');
      // toast.error('Error Notification !', {
      //   position: toast.POSITION.TOP_LEFT,
      // });
      return;
    }
    this.props.onSubmit(this.state.searchName);
    this.setState({ searchName: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form onSubmit={this.handleSubmit} className="form">
          <button type="submit" className="button">
            <span className="buttonlable">Search</span>
          </button>

          <input
            className="input"
            onChange={this.handleChange}
            value={this.state.searchName}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

// export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
