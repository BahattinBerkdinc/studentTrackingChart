
import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addStudent } from '../../redux/studentsSlice'

const AddStudentForm = () => {

    const [student, setStudent] = useState({
        name: "",
        lastname: "",
        number: ""
    })
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { id, value } = e.target;
        setStudent((prevStudent) => ({
            ...prevStudent,
            [id]: value,
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addStudent(student));
        setStudent({
            name: "",
            lastname: "",
            number: "",
        });
    };





    return (
        <Form onSubmit={handleSubmit}>
            {["name", "lastname", "number"].map((field) => (
                <Form.Group key={field}>
                    <Form.Control
                        type="text"
                        id={field}
                        value={student[field]}
                        onChange={handleChange}
                        placeholder={field}
                    />
                </Form.Group>
            ))}
            <Button type="submit">Ekle</Button>
        </Form>
    )
}

export default AddStudentForm
