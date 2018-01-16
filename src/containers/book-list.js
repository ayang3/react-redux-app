import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title} 
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
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

// Anything returned from this function will end up as props
// on the BookList container. 
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result
    // should be passed to all of our reducers.
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// Export container instead of the plain BookList class.
// Connect takes a func and a component and produce a container.
// Promote BookList from a component to a container - it needs to
// know about this new dispatch method, selectBook. 
// Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);