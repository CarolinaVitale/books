import { Tabs, Tab, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import FriendsList from './FiendsList/FriendsList'
import BooksList from './BooksList/BooksList'
import PostsList from './PostsList/PostsList'

const ProfileBar = ({ friends, books, posts } ) => {

    const [key, setKey] = useState('friends')

    
    return (

        <Row>
            <Col className='profile-bar'>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                >
                    <Tab eventKey="friends" title="Friends">
                        <FriendsList friends={friends} />
                    </Tab>
                    <Tab eventKey="books" title="Books">
                        <BooksList books={books} />
                    </Tab>
                    <Tab eventKey="post" title="Post" >
                        <PostsList posts={posts}/>
                    </Tab>
                </Tabs>
            </Col>
        </Row>
    )
}

export default ProfileBar