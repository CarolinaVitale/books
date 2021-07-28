import { Tabs, Tab, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import FriendsList from './FiendsList/FriendsList'
import BooksList from './BooksList/BooksList'
import PostsList from './PostsList/PostsList'

const ProfileBar = ({ friends, books, posts }) => {

    const [key, setKey] = useState('friends')


    return (

        <Row>
            <Col className='profile-navbar'>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                >
                    <Tab eventKey="friends" title="Friends">
                        <Row>
                            <FriendsList friends={friends} />
                        </Row>
                    </Tab>
                    <Tab eventKey="books" title="Books">
                        <Row>
                            <BooksList books={books} />
                        </Row>
                    </Tab>
                    <Tab eventKey="post" title="Post" >
                        <Row>
                            <PostsList posts={posts} />
                        </Row>
                    </Tab>
                </Tabs>
            </Col>
        </Row>
    )
}

export default ProfileBar