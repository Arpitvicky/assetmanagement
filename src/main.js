import React from 'react';
import { connect } from 'react-redux';
import Menu from './components/header';
import Footer from './components/footer';
/**
* Main component dumb
* @class Main
*/
class Main extends React.Component {
    render() {
        return (
            <div>
                <Menu />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}
/**
 * mapStateToProps description
 * @param  {Object} state               action type
 * @return {Object} books returning  books
 */
// function mapStateToProps(state) {
//     return {
//         totalQty: state.carts.totalQty
//     };
// }
export default connect()(Main);
