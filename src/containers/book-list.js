import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            );
        });
    }
    
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

// Whenever the state is changed, the components are re-rendered.
// Whenever the state is changed, the obj in the state func will be
// assigned to the this.props component (this.props.books in this case).
function mapStateToProps(state) {
    // Take application state (everything including books and active book) and 
    // whatever is returned will show up as props
    // inside of BookList
    return {
        books: state.books
    };
}

// Export container instead of the plain BookList class.
// Connect takes a func and a component and produce a container.
export default connect(mapStateToProps)(BookList);