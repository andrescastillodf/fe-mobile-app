import React, {PropTypes} from 'react';
import PhoneListRow from './PhoneListRow';

const PhoneList = ({phones}) => {
    return (
        <div className="row">
            {phones.map(phone =>
                <PhoneListRow key={phone.id} phone={phone}/>
            )}
        </div>
    );
};

PhoneList.propTypes = {
    phones: PropTypes.array.isRequired
};

export default PhoneList;
