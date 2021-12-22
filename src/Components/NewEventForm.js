import { useState } from 'react';
import './NewEvemtForm.css';

export default function NewEventForm({addEvent}) {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');

    const resetForm = ()=>{
        setDate('');
        setTitle('');
    }
    const handleSubmit = (e) =>{
        e.preventDefault();

        const event = {id: Math.floor(Math.random()*1000), title:title, date: date };
        console.log(event);
        addEvent(event);
        resetForm();
    }
    return (
        <form className="new-event-form" onSubmit={handleSubmit}>
            <label>
                <span>Event Title:</span>
                <input type="text"onChange={(e)=>{ setTitle(e.target.value)}} value={title}>
                </input>
            </label>
            <label>
                <span> Event Date:</span>
                <input type="date" onChange={(e)=>{ setDate(e.target.value)}} value={date}/>
            </label>
            <button>Submit</button>
        </form>
    )
}
