// src/App.jsx
import { useState } from 'react';

import {Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar';

import MailboxList from './components/MailboxList';
import MailboxDetails from './components/mailboxDetails';
import MailboxForm from './components/MailboxForm';

const App = () => {
  const [mailboxes, setMailboxes] = useState([])

  function addBox(formData) {
    console.log(formData, '<- formData')
    formData._id = mailboxes.length + 1
    setMailboxes([...mailboxes, formData])
  }

  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<main><h1>Post Office</h1></main>} />
      <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes} />} />
      <Route path='/new-mailbox' element={<MailboxForm addBox={addBox} />} />
      <Route path='/mailboxes/:mailboxId' element={<MailboxDetails  mailboxes={mailboxes} />} />

      <Route path='*' element={<h2>Mailbox Not Found!</h2>} />
    </Routes>
    </>
  )
};

export default App;
