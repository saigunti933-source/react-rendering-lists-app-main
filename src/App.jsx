
import React from 'react'

function App() {
  const patients = [
    {
      id: 1,
      name: 'John Smith',
      age: 32,
      gender: 'Male',
      disease: 'Fever',
      status: 'Recovered',
    },
    {
      id: 2,
      name: 'Mary Johnson',
      age: 28,
      gender: 'Female',
      disease: 'Headache',
      status: 'Under Treatment',
    },
    {
      id: 3,
      name: 'David Brown',
      age: 45,
      gender: 'Male',
      disease: 'Diabetes',
      status: 'Under Treatment',
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      age: 36,
      gender: 'Female',
      disease: 'Cold',
      status: 'Recovered',
    },
    {
      id: 5,
      name: 'Michael Davis',
      age: 52,
      gender: 'Male',
      disease: 'Blood Pressure',
      status: 'Under Treatment',
    },
  ]

  return (
    <div className="container">
      <h1>React List Rendering App</h1>
      <p className="subtitle">
        Patient Records Using the map() Method
      </p>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Patient Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Disease</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.id}</td>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.gender}</td>
                <td>{patient.disease}</td>
                <td>
                  <span
                    className={
                      patient.status === 'Recovered'
                        ? 'recovered'
                        : 'treatment'
                    }
                  >
                    {patient.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="total">
        Total Patients: {patients.length}
      </h3>
    </div>
  )
}

export default App
