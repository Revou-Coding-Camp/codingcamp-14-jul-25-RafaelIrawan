
let userName = prompt("Please enter your name : ");
if (userName != '') {
    document.getElementById("anony").innerHTML = userName;
}

document.getElementById('formid').addEventListener('submit', function(event) {
    event.preventDefault();

    const NameValid = validate_name();  
    const DateValid = validate_date();
    const GenderValid = validate_gender();
    const MessageValid = validate_message();

    if (NameValid && DateValid && GenderValid && MessageValid) {
        const name = document.getElementById('name').value;
        const birthDate = document.getElementById('birthDate').value;
        const genderElems = document.getElementsByName('gender');
        const message = document.getElementById('message').value;

        let genderValue = '';
        for (let i = 0; i < genderElems.length; i++) {
            if (genderElems[i].checked) {
                genderValue = genderElems[i].value;
                break;
            }
        }

        document.getElementById('displayName').innerText = name;
        document.getElementById('displayBirthDate').innerText = birthDate;
        document.getElementById('displayGender').innerText = genderValue;
        document.getElementById('displayMessage').innerText = message;

    }
});


function validate_name(){

    const name = document.getElementById('name').value;

    if (name.trim() === "") {
        document.getElementById('nameError').innerHTML = "Name required"
        return false
    }else if (name.length < 4 ) {
        document.getElementById('nameError').innerHTML = "Name length must more than 4"
        return false
    }else{
        document.getElementById('nameError').innerHTML = ""
        return true
    }

}

function validate_date(){
    
    const date = document.getElementById('birthDate').value;

    if(date == ""){
        document.getElementById('birthDateError').innerHTML = "Date required"
        return false
    }else{
        document.getElementById('birthDateError').innerHTML = ""
        return true
    }

}


function validate_gender() {
            const gender = document.getElementsByName('gender');
            let selected = false;

            for (let i = 0; i < gender.length; i++) {
                if (gender[i].checked) {
                    selected = true;
                    break;
                }
            }

            if (!selected) {
                document.getElementById('genderError').innerHTML = "Gender is required"
                return false
            } else {
                document.getElementById('genderError').innerHTML = ""
                return true
            }

            return selected;
        }



function validate_message() {
            const message = document.getElementById('message').value;

            if(message.trim() === ""){
                document.getElementById('messageError').innerHTML = "Message required"
                return false
            }else if(message.length < 10 ){
                document.getElementById('messageError').innerHTML = "Message must be at least 10 characters"
                return false
            }
            else{
                document.getElementById('messageError').innerHTML = ""
                return true
            }
        }





