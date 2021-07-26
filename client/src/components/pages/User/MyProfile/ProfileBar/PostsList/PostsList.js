import PostCard from "./PostCard"

const PostsList = ({ posts }) => {

    return (
        posts ?
            posts.map(elm => <PostCard {...elm} />) : null
    )

}

export default PostsList