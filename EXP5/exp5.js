let employees = [];

function addEmployee() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("empId").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let dept = document.getElementById("dept").value;

    if (name === "" || id === "" || isNaN(salary) || dept === "") {
        alert("Please fill all fields correctly");
        return;
    }

    employees.push({ name, id, salary, dept });

    document.getElementById("name").value = "";
    document.getElementById("empId").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("dept").value = "";
}

function displayEmployees() {
    document.querySelector(".container").classList.add("active");

    let output = document.getElementById("output");
    output.innerHTML = "";

    if (employees.length === 0) {
        output.innerHTML = "No employees added.";
        return;
    }

    employees.forEach(emp => {
        output.innerHTML += 
`Name: ${emp.name}
ID: ${emp.id}
Salary: ₹${emp.salary}
Department: ${emp.dept}

`;
    });
}

function filterSalary() {
    document.querySelector(".container").classList.add("active");

    let output = document.getElementById("output");
    let filtered = employees.filter(emp => emp.salary > 50000);

    output.innerHTML = "";

    if (filtered.length === 0) {
        output.innerHTML = "No employees with salary > 50000.";
        return;
    }

    filtered.forEach(emp => {
        output.innerHTML += 
`Name: ${emp.name}
ID: ${emp.id}
Salary: ₹${emp.salary}
Department: ${emp.dept}

`;
    });
}

function totalSalary() {
    document.querySelector(".container").classList.add("active");

    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    document.getElementById("output").innerHTML = "Total Salary: ₹" + total;
}

function averageSalary() {
    document.querySelector(".container").classList.add("active");

    if (employees.length === 0) {
        document.getElementById("output").innerHTML = "No data available.";
        return;
    }

    let avg = employees.reduce((sum, emp) => sum + emp.salary, 0) / employees.length;
    document.getElementById("output").innerHTML = "Average Salary: ₹" + avg.toFixed(2);
}

function countDepartment() {
    document.querySelector(".container").classList.add("active");

    let count = {};

    employees.forEach(emp => {
        count[emp.dept] = (count[emp.dept] || 0) + 1;
    });

    let output = "";
    for (let dept in count) {
        output += `${dept}: ${count[dept]} employees\n`;
    }

    document.getElementById("output").innerText = output;
}