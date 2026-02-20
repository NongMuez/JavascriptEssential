const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'Software Development' },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 ,  specialization: 'Recruitment'},
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Javascript Developer' },
      //... สามารถเพิ่มบันทึกพนักงานเพิ่มเติมที่นี่
    ];

function  displayEmployees() {
    const employeeDetail = employees.map(employee => {
        return `
            <div class="employee-card">
                <h3>${employee.name}</h3>
                <p>Age: ${employee.age}</p>
                <p>Department: ${employee.department}</p>
                <p>Salary: $${employee.salary}</p>
            </div>
        `;
    }).join('');

    document.getElementById('employeesDetails').innerHTML = employeeDetail;
}

function calculateTotalSalaries() {
    const totalSalary = employees.reduce((total, employee) => total + employee.salary, 0);
    document.getElementById('employeesDetails').innerHTML += `<p>Total Salary: $${totalSalary}</p>`;
}

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeeDetails = hrEmployees.map(employee => {
        return `
            <div class="employee-card">
                <h3>${employee.name}</h3>
                <p>Age: ${employee.age}</p>
                <p>Salary: $${employee.salary}</p>
            </div>
        `;
    }).join('');

    document.getElementById('employeesDetails').innerHTML += `<h2>HR Employees:</h2>${hrEmployeeDetails}`;
}

function findEmployeeById(id) {
    const employee = employees.find(emp => emp.id === id);
    if (employee) {
        document.getElementById('employeesDetails').innerHTML += `
            <div class="employee-card">
                <h3>${employee.name}</h3>
                <p>Age: ${employee.age}</p>
                <p>Department: ${employee.department}</p>
                <p>Salary: $${employee.salary}</p>
            </div>
        `;
    } else {
        document.getElementById('employeesDetails').innerHTML += `<p>Employee with ID ${id} not found.</p>`;
    }
}

function findSpecialization() {
        const specialization = employees.filter(employee => employee.specialization === 'Javascript Developer');
        const specializationDetails = specialization.map(employee => {
            return `
                <div class="employee-card">
                    <h3>${employee.name}</h3>
                    <p>Age: ${employee.age}</p>
                    <p>Department: ${employee.department}</p>
                    <p>Salary: $${employee.salary}</p>
                </div>
            `;
        }).join('');

        document.getElementById('employeesDetails').innerHTML += `<h2>Employees with specialization in Javascript Developer:</h2>${specializationDetails}`;
    }


