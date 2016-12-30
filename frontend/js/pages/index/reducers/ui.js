import { handleActions } from 'redux-actions';


export default handleActions({

	TOGGLE_SIDEBAR: (state, action) => {
		return Object.assign({}, state, { toggleSidebar: action.payload })
	}

}, {})