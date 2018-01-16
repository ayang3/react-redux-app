/// State argument is not applicaiton state, only the state
// this reducer is responsible for.
// If state is not define, set it to null, ES6 syntax, this is needed.
export default function(state = null, action) {
    switch(action.type) {
    case 'BOOK_SELECTED':
        return action.payload;
    }

    return state;
}