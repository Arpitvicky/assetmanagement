import React from 'react';
import { connect } from 'react-redux';
import { Navbar } from 'react-bootstrap';
/**
* Menu component dumb
* @class Menu
*/
class Menu extends React.Component {
    render() {
        return (
            <div>
                <Navbar inverse fixedTop>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">AKQA</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                </Navbar>
            </div>
        );
    }
}

export default connect()(Menu);
