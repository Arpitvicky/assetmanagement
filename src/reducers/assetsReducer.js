import Immutable from 'immutable';

// default state
const initialState = Immutable.fromJS({
    data: []
});

/**
 * Increment reducer description
 * @param  {Object} [state=initialState] initialState declaration
 * @param  {Object} action               action type
 * @return {Object}                      dispatching state
 */
const aseetsReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ASSETS':
            return state.set('data', Immutable.fromJS(action.payload));
        case 'ADD_ASSET': {
            // A way to set item to an index, so if we push to last index, it's indirectly getting pushed to the list.
            // return state.setIn(['data', state.get('data').size], Immutable.fromJS(action.payload));
            return state.update('data', list => list.push(Immutable.fromJS(action.payload)));
        }
        case 'DELETE_ASSET': {
            console.log(action.payload);
            return state.update('data', list => list.delete(list.findIndex(i => i.get('assetid') === action.payload)));
        }

        // case 'UPDATE_ASSET': {
        //     // return state.update('data', list => list.update(list.findIndex(i => i.get('assetid') === action.payload.assetid), listitem => Object.assign({}, listitem, { enable: false })));
        // }
        default : return state;
    }
};

export default aseetsReducers;
