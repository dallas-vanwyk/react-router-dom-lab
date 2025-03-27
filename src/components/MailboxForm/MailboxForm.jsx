// src/components/MailboxForm/MailboxForm.jsx

import { useState } from "react";
import { useNavigate } from "react-router";

const initialState = {
    boxOwner: '',
    boxSize: 'Small',
};

const MailboxForm = (props) => {

    const [formData, setFormData] = useState(initialState);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        console.log(formData);
        event.preventDefault();
        props.addBox(formData);
        setFormData(initialState);
        navigate('/mailboxes');
    };

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
    };

    return (
        <>
            <h2>Create New Mailbox</h2>
            <form onSubmit={handleSubmit}>

                <label htmlFor="boxOwner">Box Name:</label>
                <input
                    type="text"
                    id="boxOwner"
                    name="boxOwner"
                    value={formData.boxName}
                    onChange={handleChange}
                />
                <br />

                <label htmlFor="boxSize">Box Size:</label>
                <select
                    id="boxSize"
                    name="boxSize"
                    value={formData.boxSize}
                    onChange={handleChange}
                >
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
                <br />

                <button type="submit">Create Mailbox</button>
            </form>

        </>
    );
};

export default MailboxForm;