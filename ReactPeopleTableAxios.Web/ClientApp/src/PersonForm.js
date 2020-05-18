import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class PersonForm extends React.Component {

   
    render() {

        return (
            <div>
                <div className="row well" style={{ marginTop: 40 }}>
                    <input className="form-control col-md-2" type="text" placeholder="First Name" name="firstName" style={{ marginLeft: 30 }} />
                    <input className="form-control col-md-2" type="text" placeholder="Last Name" name="lastName" style={{ marginLeft: 30 }}  />
                    <input className="form-control col-md-2" type="text" placeholder="Age" name="age" style={{ marginLeft: 30 }} />
                    <button className="col-md-2 btn btn-success btn-block" style={{ marginLeft: 30 }}>Add Person</button>
                </div>
            </div>
            );
    }
}

export default PersonForm;