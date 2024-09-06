import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddOrganization = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    OrganizationID: '',
    Name: '',
    PhoneNumber: '',
    Email: '',
    OrganizationType: 'InsuranceCompany', // default to 'InsuranceCompany'
    OrganizationTypeID: '',
    AddressID: '',
    tin_no: '',
    ContactPersonID: '' // Field for selecting a contact person
  });

  // Sample data for organization types, addresses, and persons
  const organizationTypes = [
    { OrganizationTypeID: '1', Type: 'InsuranceCompany' },
    { OrganizationTypeID: '2', Type: 'PolicyRegisteredUser' }
  ];

  const addresses = [
  { AddressID: 1, City: "Addis Ababa", Subcity: "Subcity1", HouseNo: "123", Wereda: "Wereda1" },
  { AddressID: 2, City: "Addis Ababa", Subcity: "Subcity2", HouseNo: "456", Wereda: "Wereda2" },
  { AddressID: 3, City: "Addis Ababa", Subcity: "Subcity3", HouseNo: "789", Wereda: "Wereda3" },
  { AddressID: 4, City: "Addis Ababa", Subcity: "Subcity4", HouseNo: "101", Wereda: "Wereda4" },
  { AddressID: 5, City: "Addis Ababa", Subcity: "Subcity5", HouseNo: "102", Wereda: "Wereda5" }
  ];

  const persons = [
    { PersonID: 1, FirstName: "John", LastName: "Doe", PhoneNumber: "1234567890", Email: "john.doe@example.com", NationalID: "ID123456789", Type: "SalesAgent", AddressID: 1 },
    { PersonID: 2, FirstName: "Jane", LastName: "Smith", PhoneNumber: "0987654321", Email: "jane.smith@example.com", NationalID: "ID987654321", Type: "FreelanceAgent", AddressID: 2 },
    { PersonID: 3, FirstName: "Alice", LastName: "Johnson", PhoneNumber: "5555555555", Email: "alice.johnson@example.com", NationalID: "ID112233445", Type: "PolicyRegisteredUser", AddressID: 3 },
    { PersonID: 4, FirstName: "Bob", LastName: "Brown", PhoneNumber: "6666666666", Email: "bob.brown@example.com", NationalID: "ID556677889", Type: "ContactPersonForOrganization", AddressID: 4 },
    { PersonID: 5, FirstName: "Emma", LastName: "Davis", PhoneNumber: "7777777777", Email: "emma.davis@example.com", NationalID: "ID998877665", Type: "ContactPersonOnInsuranceCompany", AddressID: 5 }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form Data:', formData);
    navigate('/'); // Navigate back to the entry page or a success page
  };

  return (
    <section className="min-h-screen flex bg-white">
      <div className="w-full md:w-1/2 p-8 bg-white flex flex-col justify-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Add New Organization
        </h1>
        <p className="text-lg text-gray-900">
          Register a new organization by filling in the details. Select the type of organization, address, and contact person from the available options.
        </p>
      </div>
      <div className="w-full md:w-1/2 p-8">
        <form onSubmit={handleSubmit} className="space-y-6 bg-neutral-900 rounded-md p-6 shadow-lg">
          {/* <input
            type="text"
            name="OrganizationID"
            value={formData.OrganizationID}
            onChange={handleChange}
            placeholder="Organization ID"
            className="w-full p-2 rounded-md border border-neutral-700 bg-neutral-800 text-white"
            required
          /> */}
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            placeholder="Organization Name"
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
            name="tin_no"
            value={formData.tin_no}
            onChange={handleChange}
            placeholder="TIN Number"
            className="w-full p-2 rounded-md border border-neutral-700 bg-neutral-800 text-white"
          />
          <select
            name="OrganizationTypeID"
            value={formData.OrganizationTypeID}
            onChange={handleChange}
            className="w-full p-2 rounded-md border border-neutral-700 bg-neutral-800 text-white"
            required
          >
            <option value="">Select Organization Type</option>
            {organizationTypes.map((type) => (
              <option key={type.OrganizationTypeID} value={type.OrganizationTypeID}>
                {type.Type}
              </option>
            ))}
          </select>
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
            name="ContactPersonID"
            value={formData.ContactPersonID}
            onChange={handleChange}
            className="w-full p-2 rounded-md border border-neutral-700 bg-neutral-800 text-white"
            required
          >
            <option value="">Select Contact Person</option>
            {persons.map((person) => (
              <option key={person.PersonID} value={person.PersonID}>
                {person.FirstName} -  {person.LastName}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="w-full p-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700"
          >
            Add Organization
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddOrganization;
