import { Tabs, Tab, Row, Col } from 'react-bootstrap'
import { useState } from 'react'

const ProfileBar = () => {

    const [key, setKey] = useState('friends');
    
    return (

        <Row>
            <Col className='profile-bar'>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                >
                    <Tab eventKey="friends" title="Friends">
                        {/* <FriendList /> */}
                    </Tab>
                    <Tab eventKey="books" title="Books">
                        {/* <BookList /> */}
                    </Tab>
                    <Tab eventKey="post" title="Post" >
                        {/* <PostList /> */}
                    </Tab>
                </Tabs>
            </Col>
        </Row>
    )
}

export default ProfileBar