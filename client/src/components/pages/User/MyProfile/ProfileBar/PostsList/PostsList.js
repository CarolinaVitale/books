import PostCard from "./PostCard"

const PostsList = ({ posts }) => {

    return (
        posts ?
            posts.map(elm => <PostCard key={elm._id} {...elm} />) : null
    )

}

export default PostsList