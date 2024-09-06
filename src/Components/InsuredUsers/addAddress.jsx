import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddAddress = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    City: '',
    Subcity: '',
    HouseNo: '',
    Wereda: '',
  });
  const [message, setMessage] = useState(null); // For success or error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // Simulate form submission
      console.log('Form Data:', formData);
      setMessage({ type: 'success', text: 'Address added successfully!' });
      setFormData({
        City: '',
        Subcity: '',
        HouseNo: '',
        Wereda: '',
      }); // Reset form
    } catch (error) {
      console.error('Error adding address:', error);
      setMessage({ type: 'error', text: 'Failed to add address.' });
    }
  };

  return (
    <section className="min-h-screen flex bg-white">
      <div className="w-full md:w-1/2 p-8 bg-white flex flex-col justify-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Add New Address
        </h1>
        <p className="text-lg text-gray-900">
          Fill out the form to add a new address. Ensure all required fields are filled out correctly to add an address to your system.
        </p>
      </div>
      <div className="w-full md:w-1/2 p-12">
        <form onSubmit={handleSubmit} className="space-y-6 bg-neutral-900 rounded-md p-6 shadow-lg">
          {message && (
            <div className={`p-4 mb-4 text-white ${message.type === 'success' ? 'bg-green-600' : 'bg-red-600'} rounded-md`}>
              {message.text}
            </div>
          )}
          <input
            type="text"
            name="City"
            value={formData.City}
            onChange={handleChange}
            placeholder="City"
            className="w-full p-2 rounded-md border border-neutral-700 bg-neutral-800 text-white"
          />
          <input
            type="text"
            name="Subcity"
            value={formData.Subcity}
            onChange={handleChange}
            placeholder="Subcity"
            className="w-full p-2 rounded-md border border-neutral-700 bg-neutral-800 text-white"
          />
          <input
            type="text"
            name="HouseNo"
            value={formData.HouseNo}
            onChange={handleChange}
            placeholder="House No"
            className="w-full p-2 rounded-md border border-neutral-700 bg-neutral-800 text-white"
          />
          <input
            type="text"
            name="Wereda"
            value={formData.Wereda}
            onChange={handleChange}
            placeholder="Wereda"
            className="w-full p-2 rounded-md border border-neutral-700 bg-neutral-800 text-white"
          />
          <button
            type="submit"
            className="w-full p-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700"
          >
            Add Address
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddAddress;
