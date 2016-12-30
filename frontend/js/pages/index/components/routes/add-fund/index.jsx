import React from 'react';
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {
//        toggleSidebar: state.ui.toggleSidebar
    }
}

class AddFundRoute extends React.Component {

	static propTypes = {
		toggleSidebar: React.PropTypes.bool
	}

	constructor(props) {
		super(props)
	}

	render() {
		return (<div></div>);
	}
}

export default connect(mapStateToProps)(AddFundRoute)