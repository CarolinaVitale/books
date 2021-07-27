import { Tabs, Tab, Row, Col } from 'react-bootstrap'
import { useState } from 'react'

import BooksList from "../User/MyProfile/ProfileBar/BooksList/BooksList"

const AdminBar = ({ books }) => {

    const [key, setKey] = useState('friends')


    return (

        <Row>
            <Col className='profile-bar'>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                >
                    <Tab eventKey="books" title="Books To Confirm">
                        <Row>
                            <BooksList books={books} />
                        </Row>
                    </Tab>
                    <Tab eventKey="emails" title="Emails" >
                        <Row>

                        </Row>
                    </Tab>
                </Tabs>
            </Col>
        </Row>
    )
}

export default AdminBar