import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    appointmentDate: '',
    timeSlot: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/appointments', formData)
      .then(response => {
        alert('Appointment booked successfully!');
      })
      .catch(error => {
        console.error('There was an error booking the appointment!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Phone:</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
      </div>
      <div>
        <label>Service Type:</label>
        <select name="serviceType" value={formData.serviceType} onChange={handleChange} required>
          <option value="">Select Service Type</option>
          <option value="repair">Repair</option>
          <option value="consultation">Consultation</option>
        </select>
      </div>
      <div>
        <label>Appointment Date:</label>
        <input type="date" name="appointmentDate" value={formData.appointmentDate} onChange={handleChange} required />
      </div>
      <div>
        <label>Time Slot:</label>
        <input type="time" name="timeSlot" value={formData.timeSlot} onChange={handleChange} required />
      </div>
      <button type="submit">Book Appointment</button>
    </form>
  );
};

export default BookingForm;
