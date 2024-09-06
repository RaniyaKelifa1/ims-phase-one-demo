import React from 'react';

// Sample data
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

const organizations = [
  { OrganizationID: 1, Name: "Bizuhan Insurance", PhoneNumber: "1112223333", Email: "contact@bizuhaninsurance.com", OrganizationType: "InsuranceCompany", TIN: "TIN123456789", AddressID: 1 },
  { OrganizationID: 2, Name: "Mebratu Import and Export", PhoneNumber: "4445556666", Email: "info@mebratuinsurance.com", OrganizationType: "PolicyRegisteredUser", TIN: "TIN987654321", AddressID: 2 },
  { OrganizationID: 3, Name: "Global Insurance", PhoneNumber: "2223334444", Email: "contact@globalinsurance.com", OrganizationType: "InsuranceCompany", TIN: "TIN112233445", AddressID: 3 },
  { OrganizationID: 4, Name: "NextGen Construction", PhoneNumber: "3334445555", Email: "info@nextgenbrokers.com", OrganizationType: "PolicyRegisteredUser", TIN: "TIN556677889", AddressID: 4 },
  { OrganizationID: 5, Name: "Future Insurance", PhoneNumber: "5556667777", Email: "contact@futureinsurance.com", OrganizationType: "InsuranceCompany", TIN: "TIN998877665", AddressID: 5 }
];

// Helper function to format table data
const formatTableData = (data, columns) => {
  return data.map((item, index) => (
    <tr key={index}>
      {columns.map((col, colIndex) => (
        <td key={colIndex} className="px-4 py-2 border-b">{item[col]}</td>
      ))}
    </tr>
  ));
};

const DemoCViewPage = () => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Clients Page</h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Persons List</h3>
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border-b">PersonID</th>
                <th className="px-4 py-2 border-b">First Name</th>
                <th className="px-4 py-2 border-b">Last Name</th>
                <th className="px-4 py-2 border-b">Phone Number</th>
                <th className="px-4 py-2 border-b">Email</th>
                <th className="px-4 py-2 border-b">National ID</th>
                <th className="px-4 py-2 border-b">Type</th>
                <th className="px-4 py-2 border-b">AddressID</th>
              </tr>
            </thead>
            <tbody>
              {formatTableData(persons, ['PersonID', 'FirstName', 'LastName', 'PhoneNumber', 'Email', 'NationalID', 'Type', 'AddressID'])}
            </tbody>
          </table>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Organizations List</h3>
          <table className="min-w-full bg-white border border-gray-200 ">
            <thead className="bg-gray-100 ">
              <tr>
                <th className="px-4 py-2 border-b">OrganizationID</th>
                <th className="px-4 py-2 border-b">Name</th>
                <th className="px-4 py-2 border-b">Phone Number</th>
                <th className="px-4 py-2 border-b">Email</th>
                <th className="px-4 py-2 border-b">Organization Type</th>
                <th className="px-4 py-2 border-b">TIN</th>
                <th className="px-4 py-2 border-b">AddressID</th>
              </tr>
            </thead>
            <tbody>
              {formatTableData(organizations, ['OrganizationID', 'Name', 'PhoneNumber', 'Email', 'OrganizationType', 'TIN', 'AddressID'])}
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Addresses List</h3>
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border-b">AddressID</th>
                <th className="px-4 py-2 border-b">City</th>
                <th className="px-4 py-2 border-b">Subcity</th>
                <th className="px-4 py-2 border-b">House Number</th>
                <th className="px-4 py-2 border-b">Wereda</th>
              </tr>
            </thead>
            <tbody>
              {formatTableData(addresses, ['AddressID', 'City', 'Subcity', 'HouseNo', 'Wereda'])}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DemoCViewPage;
