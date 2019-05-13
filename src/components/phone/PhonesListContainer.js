import  React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as phoneActions from '../../actions/phoneActions';
import PhoneList from './PhoneList';
import LoadingIcon from '../common/loadingIcon';

class PhonesListContainer extends React.Component {
    constructor(props, context){
        super(props, context);
    }
    componentDidMount(){
        this.props.actions.loadPhones();
    }
    render() {
        const {phones} = this.props;
        if (phones.loading) {
            return (<LoadingIcon/>);
        }
        return (
            <div>
                <h1>Phones</h1>
                <PhoneList phones={phones.phones}/>
            </div>
        );
    }
}

PhonesListContainer.propTypes = {
    phones: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        phones: state.phones
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(phoneActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(PhonesListContainer);
