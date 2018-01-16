// Two steps to create and use a reducer
// 1. Create the reducer in this file,
// 2. Wire up the reducer created in this file into the application in index.js.
export default function() {
    return [
        { title: 'Javascript: The Good Parts', pages: 101 },
        { title: 'Harry Potter', pages: 39 },
        { title: 'The Dark Tower', pages: 85 },
        { title: 'Eloquent Ruby', pages: 1}
    ]
}