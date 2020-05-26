import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class EditForm extends React.Component {


    render() {
        const { PersonIsBeingEdited, OnTextChange, OnUpdateClick } = this.props;
        return (

            <div>
                {
                    PersonIsBeingEdited ?

                        < div className="row well" style={{ marginTop: 40 }}>
                            <input value={PersonIsBeingEdited.firstName}
                                onChange={OnTextChange}
                                className="form-control col-md-2"
                                type="text"
                                placeholder="First Name"
                                name="firstName"
                                style={{ marginLeft: 30 }} />
                            <input value={PersonIsBeingEdited.lastName}
                                onChange={OnTextChange}
                                className="form-control col-md-2"
                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                                style={{ marginLeft: 30 }} />
                            <input value={PersonIsBeingEdited.age}
                                onChange={OnTextChange}
                                className="form-control col-md-2"
                                type="text"
                                placeholder="Age"
                                name="age"
                                style={{ marginLeft: 30 }} />
                            <button onClick={OnUpdateClick} className="col-sm-1 btn btn-warning btn-block" style={{ marginLeft: 30 }}>Update</button>
                        </div > : <div></div>

                        
            }
            </div >

        );
    }
}

export default EditForm;