import React, { Component } from 'react';
import PersonForm from './PersonForm';
import PersonRow from './PersonRow';
import 'bootstrap/dist/css/bootstrap.css';



class PeopleTable extends React.Component {
    state = {
        people: []
    }
    render() {
        return (
            <div>
                <PersonForm />
                <table className="table table-bordered table-striped col-md-8 col-md-offset-2" style={{ marginTop: 60, textAlign: "center", marginLeft: 100 }}>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Edit/Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.people.map((p, i) => <PersonRow person={p} key={i} />)}
                </tbody>
                </table>
            </div>
            );

    }
}

export default PeopleTable;