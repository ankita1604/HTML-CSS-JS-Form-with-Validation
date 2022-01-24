//function clear errors on rectifying
function clearErrors() {

    errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }
}

function seterror(id, error) {
    //sets error inside tag of id 

    alert(error);
    errorID = `formerror-${id}`;
    document.getElementById(errorID).innerHTML = error;

}

function validate() {
    // validates different attribute
    clearErrors();

    var fname = document.reg_form.fname;
    var mname = document.reg_form.mname;
    var lname = document.reg_form.lname;
    var age = document.reg_form.age;
    var email = document.reg_form.email;
    var mobile = document.reg_form.mobile;
    var city = document.reg_form.city;
    var state = document.reg_form.state;
    var pincode = document.reg_form.pincode;



    if (fname.value.length <= 0) {
        seterror("fname", "*Length of name cannot be zero!");
        return false;
    }
    if (fname.value.length > 20) {
        seterror("fname", "*Length of name is too long");
        return false;
    }
    if (mname.value.length > 20) {
        seterror("mname", "*Length of name is too long");
        return false;
    }
    if (lname.value.length <= 0) {
        seterror("lname", "*Length of name cannot be zero!");
        return false;
    }
    if (lname.value.length > 20) {
        seterror("lname", "*Length of name is too long");
        return false;
    }
    if (age.value.length <= 0) {
        seterror("age", "*Age is required");
        return false;
    }
    if (age.value < 18) {
        seterror("age", "*You must be 18 and above to proceed.");
        return false;
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        // return (true)
    } else {
        seterror("email", "*You have entered an invalid email address!");
        return (false)
    }
    if (email.value.length = 0) {
        seterror("email", "*Email Id is required");
        return false;
    }

    if (city.value.length <= 0) {
        seterror("city", "*City name is required");
        return false;
    }
    if (state.value.length <= 0) {
        seterror("state", "*State name is required");
        return false;
    }
    return true;

}