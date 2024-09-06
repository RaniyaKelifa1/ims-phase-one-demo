import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddContactPerson = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    PersonID: '',
    FirstName: '',
    LastName: '',
    AddressID: '',
    PhoneNumber: '',
    Email: '',
    Type: '',
    NationalID: '' // Added National ID
  });
  const [message, setMessage] = useState(null); // For success or error messages

  // Sample data for address attributes
  const addresses = [
    { AddressID: 1, City: "Addis Ababa", Subcity: "Subcity1", HouseNo: "123", Wereda: "Wereda1" },
    { AddressID: 2, City: "Addis Ababa", Subcity: "Subcity2", HouseNo: "456", Wereda: "Wereda2" },
    { AddressID: 3, City: "Addis Ababa", Subcity: "Subcity3", HouseNo: "789", Wereda: "Wereda3" },
    { AddressID: 4, City: "Addis Ababa", Subcity: "Subcity4", HouseNo: "101", Wereda: "Wereda4" },
    { AddressID: 5, City: "Addis Ababa", Subcity: "Subcity5", HouseNo: "102", Wereda: "Wereda5" }
    ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // Simulate form submission
      console.log('Form Data:', formData);
      setMessage({ type: 'success', text: 'Contact person added successfully!' });
      setFormData({
        PersonID: '',
        FirstName: '',
        LastName: '',
        AddressType: '', // Reset address type
        PhoneNumber: '',
        Email: '',
        Type: '',
        NationalID: '' // Reset National ID
      }); // Reset form
    } catch (error) {
      console.error('Error adding contact person:', error);
      setMessage({ type: 'error', text: 'Failed to add contact person.' });
    }
  };

  return (
    <section className="min-h-screen flex bg-white">
      <div className="w-full md:w-1/2 p-8 bg-white flex flex-col justify-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Add New Contact Person
        </h1>
        <p className="text-lg text-gray-900">
          Fill out the form to add a new contact person. Ensure all required fields are filled out correctly.
        </p>
      </div>
      <div className="w-full md:w-1/2 p-8">
        <form onSubmit={handleSubmit} className="space-y-6 bg-neutral-900 rounded-md p-6 shadow-lg">
          {message && (
            <div className={`p-4 mb-4 text-white ${message.type === 'success' ? 'bg-green-600' : 'bg-red-600'} rounded-md`}>
              {message.text}
            </div>
          )}
          <input
            type="text"
            name="FirstName"
            value={formData.FirstName}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full p-2 rounded-md border border-neutral-700 bg-neutral-800 text-white"
            required
          />
          <input
            type="text"
            name="LastName"
            value={formData.LastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full p-2 rounded-md border border-neutral-700 bg-neutral-800 text-white"
            required
          />
          <input
            type="text"
            name="PhoneNumber"
            value={formData.PhoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full p-2 rounded-md border border-neutral-700 bg-neutral-800 text-white"
          />
          <input
            type="email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 rounded-md border border-neutral-700 bg-neutral-800 text-white"
            required
          />
          <input
            type="text"
            name="NationalID"
            value={formData.NationalID}
            onChange={handleChange}
            placeholder="National ID No"
            className="w-full p-2 rounded-md border border-neutral-700 bg-neutral-800 text-white"
          />
         <select
            name="AddressID"
            value={formData.AddressID}
            onChange={handleChange}
            className="w-full p-2 rounded-md border border-neutral-700 bg-neutral-800 text-white"
            required
          >
            <option value="">Select Address</option>
            {addresses.map((address) => (
              <option key={address.AddressID} value={address.City}>
                {address.City} -   {address.Subcity} -  {address.HouseNo} -   {address.Wereda}
              </option>
            ))}
          </select>
          <select
            name="Type"
            value={formData.Type}
            onChange={handleChange}
            className="w-full p-2 rounded-md border border-neutral-700 bg-neutral-800 text-white"
          >
            <option value="">Select Type</option>
            <option value="SalesAgent">Sales Agent</option>
            <option value="FreelanceAgent">Freelance Agent</option>
            <option value="PolicyRegisteredUser">Policy Registered User</option>
            <option value="ContactPersonForOrganization">Contact Person for Organization</option>
            <option value="ContactPersonOnInsuranceCompany">Contact Person on Insurance Company</option>
          </select>
          <button
            type="submit"
            className="w-full p-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700"
          >
            Add Person
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddContactPerson;
