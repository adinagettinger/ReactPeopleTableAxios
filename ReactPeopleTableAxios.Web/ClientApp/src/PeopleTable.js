import React from 'react';
import PersonForm from './PersonForm';
import PersonRow from './PersonRow';
import axios from 'axios';
import EditForm from './EditForm';
import 'bootstrap/dist/css/bootstrap.css';



class PeopleTable extends React.Component {
    state = {
        people: [],
        currentPerson: {
            firstName: '',
            lastName: '',
            age: ''
            
        },
        editPerson: ''
        
    }
    componentDidMount = () => {
        this.GetAllPeople();
    };
    GetAllPeople = () => {
        axios.get('api/people/GetAll').then(response => {
            this.setState({ people: response.data });
        });
    };
    onTextChange = (e) => {
        const PersonCopy = {...this.state.currentPerson};
        PersonCopy[e.target.name] = e.target.value;
        this.setState({ currentPerson: PersonCopy });
        
    }
    AddPerson = () => {

        axios.post('/api/people/AddPerson', { ...this.state.currentPerson, age: +this.state.currentPerson.age}).then(() => {
            
            this.GetAllPeople();
           
        });
        this.setState({ currentPerson: {firstName: '', lastName: '', age: ''}})
    }    
    EditPersonDetails = (clickedOnPerson) => {

        let newEditPerson = { ...clickedOnPerson };
        this.setState({ editPerson: newEditPerson });
        console.log(this.state.editPerson);
    };
    onEditTextChange = (e) => {
        const EditPersonCopy = { ...this.state.editPerson };
        EditPersonCopy[e.target.name] = e.target.value;
        this.setState({ editPerson: EditPersonCopy });

    }
    UpdatePerson = () => {
        axios.post('/api/people/EditPerson', { ...this.state.editPerson, id: +this.state.editPerson.id, age: +this.state.editPerson.age }).then(() => {
            this.GetAllPeople();
            this.setState({ editPerson: '' })
        });
    };
    DeletePerson = (person) => {
        axios.post('/api/people/DeletePerson', person).then(() => {
            this.GetAllPeople();
        });
      };

    render() {
        return (
            <div>
                <PersonForm onTextChange={this.onTextChange} onAddClick={this.AddPerson} textBoxValue={this.state} />
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
                        {this.state.people.map((p, i) => <PersonRow
                            person={p}
                            key={i}
                            onEditClick={() => { this.EditPersonDetails(p) }}
                            onDeleteClick={() => { this.DeletePerson(p) }} />)}
                     </tbody>
                </table>
                <EditForm PersonIsBeingEdited={this.state.editPerson} OnUpdateClick={this.UpdatePerson} OnTextChange={this.onEditTextChange} />
            </div>
            );

    }
}

export default PeopleTable;