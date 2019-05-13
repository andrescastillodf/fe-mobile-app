import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const PhoneListRow = ({phone}) => {
    return (
        <div className="col-md-3">
            <div className="card">
                <img className="product-image" src={phone.image_route} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{phone.title}</h5>
                    <p className="card-text">
                        {phone.color}
                    </p>
                    <h3>{phone.price}</h3>
                    <Link className="btn btn-primary" to={'/phone/' + phone.id}>View More</Link>
                </div>
            </div>
        </div>
    );
};

PhoneListRow.propTypes = {
    phone: PropTypes.object.isRequired
};

export default PhoneListRow;
