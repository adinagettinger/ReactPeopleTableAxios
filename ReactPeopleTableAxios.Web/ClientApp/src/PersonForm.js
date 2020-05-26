import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class PersonForm extends React.Component {

   
    render() {
        const { onAddClick, onTextChange, textBoxValue } = this.props;
        return (
            <div>
                <div className="row well" style={{ marginTop: 40 }}>
                    <input value={textBoxValue.currentPerson.firstName}
                        onChange={onTextChange}
                        className="form-control col-md-2"
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        style={{ marginLeft: 30 }} />
                    <input value={textBoxValue.currentPerson.lastName}
                        onChange={onTextChange}
                        className="form-control col-md-2"
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        style={{ marginLeft: 30 }} />
                    <input value={textBoxValue.currentPerson.age}
                        onChange={onTextChange}
                        className="form-control col-md-2"
                        type="text"
                        placeholder="Age"
                        name="age"
                        style={{ marginLeft: 30 }} />
                    <button onClick={onAddClick} className="col-md-2 btn btn-success btn-block" style={{ marginLeft: 30 }}>Add Person</button>
                </div>
            </div>
            );
    }
}

export default PersonForm;