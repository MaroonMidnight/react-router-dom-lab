import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function mailboxForm(props) {

    const [form, setForm] = useState({
        _id: Number,
        boxSize: '',
        boxHolder: '',
    })

    function handleChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()
        props.addBox(form)
        navigate('/mailboxes')
    }

    return (
        <>
            <h2>New Mailbox</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='boxHolder'>Enter a BoxHolder</label>
                <input type='text' name='boxHolder' id='boxHolder' value={form.boxHolder} onChange={handleChange} />
                <label htmlFor='boxSize'>Select a Box Size: </label>
                <select name='boxSize' id='boxSize' value={form.boxSize} onChange={handleChange}>
                    <option value='Small'>Small</option>
                    <option value='Medium'>Medium</option>
                    <option value='Large'>Large</option>
                </select>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}