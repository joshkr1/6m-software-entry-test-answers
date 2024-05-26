/*
    Task 1: 
    - Declare an array that are going to be used to store patient's name.

    Task 2: 
    - Add code to add patient's name into the array declared in task 1.

    Task 3: 
    - Implement listPatient() function to print all patient's name stored in the array
*/


// Task 1: Add code here
patients = []
function addPatient(patientName)
{
    // Task 2: Add code here
	def add_patient(name):
    patients.append(name)
}

// Task 3: Add code here
def list_patients():
    for patient in patients:
        print(patient)


addPatient("John");
addPatient("Mary");
addPatient("Mark");

listPatient(); // This should list ["John", "Mary", "Mark"]
