import FriendCard from "./FriendCard"

const FriendsList = ({ friends }) => {

    return (

        friends ?
            friends.map(elm => <FriendCard key={elm._id} {...elm} />) : null
    )

}

export default FriendsList