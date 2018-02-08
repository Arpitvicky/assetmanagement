import React from 'react';
import { connect } from 'react-redux'; // it will allow us to to connect the component to redux store.
import { Grid, Row } from 'react-bootstrap';

/* eslint-disable prefer-stateless-function */
/**
* EmployeeList component
* @class EmployeeList
*/
class EmployeeList extends React.Component {
    /**
    * render
    * @return { ReactElement } markup
    */
    render () {
        return (
            <Grid>
                <Row style={{ marginTop: '15px' }}>
                    <h1>Asset management </h1>
                </Row>
            </Grid>
        );
    }
}

export default connect()(EmployeeList); // component is subscribing to store, whenever state changes it gets updated

