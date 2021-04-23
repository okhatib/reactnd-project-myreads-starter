import React, { Component } from 'react'
import PropTypes from 'prop-types';

class BookshelfChanger extends Component {

    static propTypes = {
        onChangeShelf: PropTypes.func.isRequired,
        book: PropTypes.object.isRequired
    }

    state = {
        value: 'move'
    }

    componentDidMount(){
        this.setState({ value: this.props.book.shelf || 'none' })
    }

    handleChange = (e) => {
        e.preventDefault();

        const { onChangeShelf, book } = this.props;
        onChangeShelf(book, e.target.value)
        this.setState({value: e.target.value})
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