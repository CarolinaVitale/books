import FriendCard from "./FriendCard"

const FriendsList = ({ friends }) =>{

return(

    friends.map(elm => <FriendCard {...elm} /> )
)

}

export default FriendsList