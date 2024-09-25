import React from 'react';
import './App.css';  // This is for any custom styles you may have, adjust as needed
import BookingForm from './components/BookingForm';  // Import the booking form component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Book an Appointment</h1>
      </header>
      <main>
        {/* Render the BookingForm component */}
        <BookingForm />
      </main>
    </div>
  );
}

export default App;
