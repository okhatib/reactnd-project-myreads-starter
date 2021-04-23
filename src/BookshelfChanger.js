import React, { Component } from 'react'
import PropTypes from 'prop-types';

class BookshelfChanger extends Component {

    static propTypes = {
        onChangeShelf: PropTypes.func.isRequired,
        bookId: PropTypes.string.isRequired,
        shelf: PropTypes.string
    }

    state = {
        value: 'move'
    }

    componentDidMount(){
        this.setState({ value: this.props.shelf || 'none' })
    }

    handleChange = (e) => {
        e.preventDefault();

        const { onChangeShelf, bookId } = this.props;
        onChangeShelf(bookId, e.target.value)
    }

    render() {
        return (
            <div className="book-shelf-changer">
                <select 
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default BookshelfChanger;