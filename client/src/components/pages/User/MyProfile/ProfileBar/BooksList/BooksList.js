import BookCard from "./BookCard"

const BooksList = ({ books }) => {

    return (
        books ?
            books.map(elm => <BookCard {...elm} />) : null
    )

}

export default BooksList