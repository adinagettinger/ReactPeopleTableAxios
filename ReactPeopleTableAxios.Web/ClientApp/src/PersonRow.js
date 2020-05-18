import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class PersonRow extends React.Component {

    render() {

        const { firstName, lastName, age } = this.props.person;
        return (
           
        <div>
            <tr>
                <td>{firstName}</td>
                <td>{lastName}</td>
                    <td>{age}</td>
                    <td><button className="btn btn-primary form-control col-md-2" style={{ marginLeft: 5 }}>edit</button>
                        <button className="btn btn-danger form-control col-md-2" style={{ marginLeft: 5 }}>delete</button></td>
            </tr>
        </div>
            )
    }
}

export default PersonRow;