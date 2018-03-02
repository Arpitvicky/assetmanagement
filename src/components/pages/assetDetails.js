import React from 'react';
import { connect } from 'react-redux'; // it will allow us to to connect the component to redux store.
import { Grid, Row, Panel, Col, Button, Modal, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import Immutable from 'immutable';
import { findDOMNode } from 'react-dom';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { addAsset, deleteAsset, updateAsset } from '../../actions/assetsActions';
/* eslint-disable prefer-stateless-function */
/**
* AssetsList component
* @class AssetsList
*/
class AssetsList extends React.Component {
    static propTypes = {
        assets: ImmutablePropTypes.list,
    }

    static defaultProps = {
        assets: Immutable.List()
    }

    constructor() {
        super();
        this.state = {
            showModal: false
        };
    }
    /**
     * mapStateToProps description
      * @param  {String} assetid               action type
     * @return {Object} employees returning  employees
     */
    onDeleteAsset = (assetid) => {
        this.props.dispatch(deleteAsset(assetid));
    }
    onAddAsset = () => {
        const employeeSelected = this.props.selectedEmp;
        const asset = {
            assetid: findDOMNode(this.refs.assetid).value,
            assetname: findDOMNode(this.refs.assetname).value,
            startdate: findDOMNode(this.refs.startdate).value
        };
        this.props.dispatch(addAsset(employeeSelected, asset));
    }
    /**
     * mapStateToProps description
      * @param  {String} assetid               action type
     * @return {Object} employees returning  employees
     */
    onUpdateAsset = (assetid) => {
        this.props.dispatch(updateAsset(assetid));
    }
    /**
    * emptyAssets
    * @return { ReactElement } markup
    */
    emptyAssets = () => {
        return (<div />);
    }

    /**
    * close dialog
    * @return { void } markup
    */
    close() {
        this.setState({ showModal: false });
    }
    /**
    * open dialog
    * @return { void } markup
    */
    open = () => {
        this.setState({ showModal: true });
    }
    /**
    * renderAssets
    * @return { ReactElement } markup
    */
    renderAssets = () => {
        const assetsList = this.props.assets.map((asset) => {
            return (<Panel key={asset.get('assetid')}><h3>{asset.get('assetname')}</h3><h4>Quantity: {asset.get('quantity')}</h4><Button onClick={this.onDeleteAsset.bind(this, asset.get('assetid'))}>Delete</Button><Button style={{ display: 'none' }}onClick={this.onUpdateAsset.bind(this, asset.get('assetid'))}>Update</Button></Panel>);
        });
        return (
            <Grid>
                <Row style={{ marginTop: '60px' }}>
                    <h2 style={{ marginLeft: '20px' }}>Asset Lists.</h2>
                    <Col xs={12} sm={4}>
                        Employee Id: - {this.props.selectedEmp}
                        {assetsList}
                        <Button bsStyle="success" onClick={this.open}>Add Asset</Button>
                    </Col>
                </Row>
                <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Asset</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Panel>
                            <FormGroup controlId="assetid" >
                                <ControlLabel>Asset Id:</ControlLabel>
                                <FormControl type="text" placeholder="Enter asset id" ref="assetid" defaultValue="" />
                                <FormControl.Feedback />
                            </FormGroup>
                            <FormGroup controlId="assetname" >
                                <ControlLabel>Asset Name</ControlLabel>
                                <FormControl type="text" placeholder="Enter asset name" ref="assetname" name="email" defaultValue="" />
                                <FormControl.Feedback />
                            </FormGroup>
                            <FormGroup controlId="startdate" >
                                <ControlLabel>Start Date</ControlLabel>
                                <FormControl type="date" placeholder="Enter start date" ref="startdate" />
                                <FormControl.Feedback />
                            </FormGroup>
                        </Panel>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.onAddAsset.bind(this)}>Add asset</Button>
                        <Button onClick={this.close.bind(this)}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </Grid>
        );
    }

    /**
    * render
    * @return { ReactElement } markup
    */
    render() {
        console.log(this.props.assets.length);
        if (this.props.assets.size) {
            return this.renderAssets();
        }
        return this.emptyAssets();
    }
}

/**
 * mapStateToProps description
 * @param  {Object} state               action type
 * @return {Object} books returning  books
 */
function mapStateToProps(state) {
    return {
        assets: state.assets.getIn(['data']),
    };
}
export default connect(mapStateToProps)(AssetsList); // component is subscribing to store, whenever state changes it gets updated

