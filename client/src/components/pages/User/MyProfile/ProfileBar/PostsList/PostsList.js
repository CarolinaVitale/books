import PostCard from "./PostCard"

const PostsList = ({ posts }) =>{

return(

    posts.map(elm => <PostCard {...elm} /> )
)

}

export default PostsList