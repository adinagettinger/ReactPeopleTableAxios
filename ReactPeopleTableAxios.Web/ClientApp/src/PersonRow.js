import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class PersonRow extends React.Component {

    render() {

        const { firstName, lastName, age } = this.props.person;
        const { onEditClick, onDeleteClick } = this.props;
        return (                        
                    <tr>
                        <td>{firstName}</td>
                        <td>{lastName}</td>
                            <td>{age}</td>
                            <td><button onClick={onEditClick} className="btn btn-primary form-control col-md-2" style={{ marginLeft: 5 }}>edit</button>
                                <button onClick={onDeleteClick} className="btn btn-danger form-control col-md-3" style={{ marginLeft: 5 }}>delete</button>
                            </td>
                    </tr>               
            )
    }
}

export default PersonRow;