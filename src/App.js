import './App.css';
import React, {useState} from 'react';
import Title from './Components/Title';
import Modal from './Components/Modal';
import EventList from './Components/EventList';
import NewEventForm from './Components/NewEventForm';
function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const [events, setEvents] = useState([]);

  const addEvent = (event) =>{
    setEvents((prevEvents) =>{
      return [...prevEvents, event]
    });
    setShowModal(false);
  }

  const handleClick = (id) =>{
    setEvents((prevEvents)=>{
      return prevEvents.filter((event)=>  id!==event.id)
    })
  }

  const handleClose = () =>{
    setShowModal(false);
  }

  const handleShowModal = () =>{
    setShowModal(true);
  }

  return (
    <div className="App">
      <Title/>
      {showEvents && (<div>
        <button onClick={()=>{setShowEvents(false)}}>hide events</button>
      </div>)}
      {!showEvents && (<div>
        <button onClick={()=>{setShowEvents(true)}}>show events</button>
      </div>)}
      {showEvents && <EventList events = {events} handleClick={handleClick}></EventList>}
      <button onClick={handleShowModal}>Add New Event</button>
      {showModal && <Modal>
       <NewEventForm addEvent={addEvent}/>
      </Modal>}
    </div>
  );
}

export default App;
