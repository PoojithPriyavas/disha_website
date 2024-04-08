function sendMailJs() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        messege: document.getElementById("messege").value,
        phone: document.getElementById("phone").value

    };

    const serviceID = "service_7c40sqm";
    const templateID = "template_dy9gs4u";

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        // Display an error message or prevent form submission
        alert('Please fill in all the required fields.');
        return false; // Prevent form submission
    }


    emailjs.send(serviceID, templateID, params)
        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("messege").value = "";
                document.getElementById("phone").value = "";

                console.log(res);
                alert("your messege sent succesfully");

            }
        ).catch((err) => console.log(err));

}


