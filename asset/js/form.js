function validateForm () {
    let job = document.forms["personal_form"]["job"].value;
    let fName = document.forms["personal_form"]["fName"].value;
    let lName = document.forms["personal_form"]["lName"].value;
    let gender = document.forms["personal_form"]["male"].value;
    let email = document.forms["personal_form"]["email"].value;
    let dob = document.forms["personal_form"]["dob"].value;
    let address = document.forms["personal_form"]["address"].value;

    if (job === "") {
        alert("Job must be filled");
        return false;
    }
    if (fName === "") {
        alert("First name must be filled");
        return false;
    }
    if (lName === "") {
        alert("Last name must be filled");
        return false;
    }
    if (gender === "") {
        alert("Gender must be filled");
        return false;
    }
    if (email === "") {
        alert("Email must be filled");
        return false;
    }
    if (dob === "") {
        alert("Dob must be filled");
        return false;
    }
    if (address === "") {
        alert("Address must be filled");
        return false;
    }

    alert(
        "Job: " + job + "\n" +
        "First Name: " + fName + "\n" +
        "Last Name: " + lName + "\n" +
        "Gender: " + gender + "\n" +
        "Email: " + email + "\n" +
        "Dob: " + dob + "\n" +
        "Address: " + address + "\n"
    );

    return true;

}


