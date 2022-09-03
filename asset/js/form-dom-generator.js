var form_generator = document.getElementById('form-generator');
var fieldSet = document.createElement('fieldset');
var legend = document.createElement('legend');
var form = document.createElement('form');

const inputs =
    {
        "job": [
            {
                "key": "label",
                "for": "job-generator",
                "value": "Job: "
            },
            {
                "key": "select",
                "id": "job-generator",
                "name": "job",
                "options": [
                    "",
                    "IT",
                    "Developer",
                    "Barista",
                    "Call Girl"
                ]
            }
        ],
        "fName": [
            {
                "key": "label",
                "for": "fName-generator",
                "value": "First Name: "
            },
            {
                "key": "input",
                "name": "fName",
                "type": "text",
                "id": "fName-generator"
            }
        ],
        "lName": [
            {
                "key": "label",
                "for": "lName-generator",
                "value": "Last Name: "
            },
            {
                "key": "input",
                "name": "lName",
                "type": "text",
                "id": "lName-generator"
            }
        ],
        "gender": [
            {
                "key": "label",
                "value": "Gender: "
            },
            {
                "key": "label",
                "for": "male-generator",
                "value": "Male: "
            },
            {
                "key": "input",
                "name": "male",
                "type": "radio",
                "id": "male-generator"
            },
            {
                "key": "label",
                "for": "female-generator",
                "value": "Female: "
            },
            {
                "key": "input",
                "name": "female",
                "type": "radio",
                "id": "female-generator"
            }
        ],
        "email": [
            {
                "key": "label",
                "for": "email-generator",
                "value": "Email: "
            },
            {
                "key": "input",
                "name": "email",
                "type": "email",
                "id": "email-generator"
            }
        ],
        "dob": [
            {
                "key": "label",
                "for": "dob-generator",
                "value": "Date of Birth: "
            },
            {
                "key": "input",
                "name": "dob",
                "type": "date",
                "id": "dob-generator"
            }
        ],
        "address": [
            {
                "key": "label",
                "for": "add-generator",
                "value": "Address: "
            },
            {
                "key": "textarea",
                "name": "address",
                "id": "add-generator"
            }
        ],
        "submit": [
            {
                "key": "label",
                "for": "submit-generator"
            },
            {
                "key": "input",
                "name": "submit",
                "type": "submit",
                "id": "submit-generator"
            }
        ],
    }

//Set attribute form
form.setAttribute('action', '#');
form.setAttribute('method', 'post');
form.setAttribute('class', 'personal-form');
form.setAttribute('name', 'personal_form');

//Set textContext legend element
legend.textContent = "Personal Details";

//append fieldset into form_generator
form_generator.append(fieldSet);

//append legend into fieldset
fieldSet.append(legend);

//append form into fieldset
fieldSet.append(form);

for (let input in inputs){
    let newDiv = document.createElement('div');
    for (let element in inputs[input]){
        if(inputs[input].hasOwnProperty(element)){
            for (let object in inputs[input][element]){

                if(object === "key"){
                    if(inputs[input][element][object] === "label"){
                        var newEl = document.createElement(inputs[input][element].key);
                        newDiv.append(newEl);
                    }

                    if(inputs[input][element][object] === "input"){
                        let newInput = document.createElement(inputs[input][element].key);
                        newInput.setAttribute('type', inputs[input][element].type);
                        newInput.setAttribute('name', inputs[input][element].name);
                        newInput.setAttribute('id', inputs[input][element].id);
                        newDiv.append(newInput);
                    }

                    if(inputs[input][element][object] === "textarea"){
                        let newTextarea = document.createElement(inputs[input][element].key);
                        newTextarea.setAttribute('name', inputs[input][element].name);
                        newTextarea.setAttribute('id', inputs[input][element].id);
                        newDiv.append(newTextarea);
                    }

                    if(inputs[input][element][object] === "select"){
                        var newSelect = document.createElement(inputs[input][element].key);
                        newSelect.setAttribute('name', inputs[input][element].name);
                        newSelect.setAttribute('id', inputs[input][element].id);

                        //Generate options tag
                        inputs[input][element].options.forEach(option => {
                            var newOption = document.createElement('option');
                            newOption.setAttribute('value', option);

                            // if(option === ""){
                            //     newOption.textContent = "--None--";
                            // } else {
                            //     newOption.textContent = option;
                            // }

                            (option === "") ? newOption.textContent = "--None--" : newOption.textContent = option;

                            newSelect.append(newOption);
                        });

                        newDiv.append(newSelect);
                    }
                }

                if(object === "for"){
                    newEl.setAttribute('for', inputs[input][element][object]);
                }

                if(object === "value"){
                    newEl.textContent = inputs[input][element][object];
                }


            }
        }
    }
    form.append(newDiv);
}