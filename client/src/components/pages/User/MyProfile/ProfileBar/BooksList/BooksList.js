import BookCard from "./BookCard"

const BooksList = ({ books }) => {

    return (
        books ?
            books.map(elm => <BookCard key={elm._id} {...elm} />) : null
    )

}

export default BooksList