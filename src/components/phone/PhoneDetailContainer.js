import  React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as phoneActions from '../../actions/phoneActions';
import LoadingIcon from '../common/loadingIcon';

class PhoneDetailContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount(){
        const { id } = this.props.params;
        this.props.actions.loadPhone(id);
    }
    componentWillUnmount() {
        this.props.actions.removePhone();
    }
    render(){
        const {phones} = this.props;
        const {selectedPhone} = phones;
        if (phones.loading) {
            return (<LoadingIcon/>);
        }
        return(
            <div className="row product-detail">
                <div className="col-md-6">
                    <img className="product-image-single" src={selectedPhone.image_route} alt="Card image cap"/>
                </div>
                <div className="col-md-6 product-detail-description">
                    <h1>{selectedPhone.title}</h1>
                    <br>
                    </br>
                    {selectedPhone.description}
                    <div className="attribute">
                        <b>Current Price:</b>{selectedPhone.price}
                    </div>
                    <div className="attribute">
                        <b>Label:</b>{selectedPhone.color}
                    </div>
                </div>
            </div>
        );
    }
}

PhoneDetailContainer.propTypes = {
    phones: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired,
    actions: PropTypes.func.isRequired
};

function mapStateToProps(state){
    return {
        phones: state.phones
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(phoneActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneDetailContainer);
