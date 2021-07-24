import BookCard from "./BookCard"

const BooksList = ({ books }) =>{

return(

    books.map(elm => <BookCard {...elm} /> )
)

}

export default BooksList