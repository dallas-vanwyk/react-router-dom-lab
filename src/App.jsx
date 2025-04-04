// src/App.jsx

import { useState } from "react";
import { Route, Routes } from "react-router";

import NavBar from "./components/NavBar/NavBar";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";
import MailboxForm from "./components/MailboxForm/MailboxForm";

const initialState = [
  { _id: 1, boxOwner: 'your mom', boxSize: 'Large' },
];

const App = () => {

  const [mailboxes, setMailboxes] = useState(initialState);

  const addBox = (newBoxData) => {
    newBoxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newBoxData]);
  };

  return (
    <>
      <h1>Post Office</h1>
      <NavBar />
      <Routes>

        <Route
          path="/"
          element={<main><h1>Post Office</h1></main>}
        />

        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />

        <Route
          path="/new-mailbox"
          element={<MailboxForm addBox={addBox} />}
        />

        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />

        <Route
          path="/mailboxes/*"
          element={<h2>Error, mailbox not found</h2>}
        />

        <Route
          path="*"
          element={<h2>Error page</h2>}
        />

      </Routes>
    </>
  );
};

export default App;


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
