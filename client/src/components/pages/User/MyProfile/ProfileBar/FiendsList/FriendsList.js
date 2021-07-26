import FriendCard from "./FriendCard"

const FriendsList = ({ friends }) => {

    return (

        friends ?
            friends.map(elm => <FriendCard {...elm} />) : null
    )

}

export default FriendsList