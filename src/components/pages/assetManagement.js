import React from 'react';
import { connect } from 'react-redux'; // it will allow us to to connect the component to redux store.
import { Grid, Row, Panel, FormGroup, ControlLabel, FormControl, Button, Col } from 'react-bootstrap';
import Immutable from 'immutable';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { getEmployees } from '../../actions/employeesActions';
import { getAssets } from '../../actions/assetsActions';
import AssetsList from '../pages/assetDetails';
/* eslint-disable prefer-stateless-function */
/**
* EmployeeList component
* @class EmployeeList
*/
class EmployeeList extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        employees: ImmutablePropTypes.list,
    }

    static defaultProps = {
        employees: Immutable.List()
    }
    constructor() {
        super();
        this.state = {
            selectedEmployee: 'Vicky'
        };
    }
    /**
     * componentDidMount will initiate to fetch book list
     * @return {void}
     * @memberof Body
     */
    componentDidMount () {
        // this.props.getBooks();
        this.props.dispatch(getEmployees());
    }
    onChangeEmployeeSelect () {
        // console.log(findDOMNode(this.refs.employees).value);
        this.setState({ selectedEmployee: findDOMNode(this.refs.employees).value });
        this.props.dispatch(getAssets(this.state.selectedEmployee));
    }
    /**
     * onFetchEmployeeAssets will initiate to fetch asset list
     * @return {void}
     * @memberof Body
     */
    onFetchEmployeeAssets() {
        const employeeSelected = findDOMNode(this.refs.employees).value;
        this.props.dispatch(getAssets(employeeSelected));
        // console.log(employeeSelected);
    }
    /**
    * render
    * @return { ReactElement } markup
    */
    render () {
        const empList = this.props.employees.map((employee) => {
            const name = `${employee.get('firstName')} ${employee.get('lastName')}`;
            return (<option key={employee.get('employeeId')} value={employee.get('employeeId')}>{name}</option>);
        });
        return (
            <Grid>
                <Row style={{ marginTop: '60px' }}>
                    <h1 style={{ marginLeft: '20px' }}>Asset management.</h1>
                    <Col xs={12} sm={4}>
                        <Panel>
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>Select an employee</ControlLabel>
                                <FormControl ref="employees" componentClass="select" placeholder="select" onChange={this.onChangeEmployeeSelect.bind(this)}>
                                    <option value="select">select</option>
                                    {empList}
                                </FormControl>
                            </FormGroup>
                            <Button bsStyle="danger" onClick={this.onFetchEmployeeAssets.bind(this)}>Fetch Assets</Button>
                        </Panel>
                    </Col>
                </Row>
                <Row>
                    <AssetsList selectedEmp={this.state.selectedEmployee} />
                </Row>
            </Grid>
        );
    }
}

/**
 * mapStateToProps description
 * @param  {Object} state               action type
 * @return {Object} books returning  books
 */
function mapStateToProps(state) {
    return {
        employees: state.employees.getIn(['data'])
    };
}
export default connect(mapStateToProps)(EmployeeList); // component is subscribing to store, whenever state changes it gets updated

