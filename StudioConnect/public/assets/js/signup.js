//Global Variables
var emailInput = $("#email");
var pw1 = $("#password");
var pw2 = $("#password-conf");
var checkboxValue = "studio";
//$("input[id='check']:checked").val();

// ====================================================

// Code to change text when toggle is on or off.
$('#check').on('click',function () {
    if ($('#check').is(':checked')) {
        $("#user-check").text("I own a studio.");
        checkboxValue = "studio";
    } else {
        $("#user-check").text("I want to rent a studio.");
        checkboxValue = "";
    }
});

// ======================================================

//On click event for submit button
//When you click the submit button
$(".submit").on("click", function(event){
    event.preventDefault();

    //capture value of the checkbox
    //When box is checked value = "studio"
    //When box is not checked value = 0
    //If the checkbox value = "studio"
    if(checkboxValue === "studio"){
        //Run createStudio function
        createStudio();
    }
    //If checkbox does not = studio
    else{
        //Run createMusician function
        createMusician();
    }

});


//Function that takes input from signup page...
function createStudio(){    
    event.preventDefault();
    var studioInfo = {
        email: emailInput.val().trim(),
<<<<<<< HEAD
        pw: pw1.val().trim(),
        pw2: pw2.val().trim(),
=======
>>>>>>> 295cd69aceef18338d3fd64204eb2109f0e7cb0b
        password: pw1.val().trim(),
        type: "studio"
    };
    //...And then adds it to the Studios table
    $.post("/signup/new-studio", studioInfo, function () {
        //empty text boxes once submitted
        emailInput.val("");
        pw1.val("");
        pw2.val("");
        //Stores submitted email into session storage
        //THIS IS WILL BE REMOVED WHEN WE FIGURE OUT AUTHENTICATION
        sessionStorage.setItem("email", studioInfo.email);
        var storedEmail = sessionStorage.getItem("email");
        //Sends user to the edit listing page so they can update their listing information
        window.location.href = ("/edit-listing/" + storedEmail);
    });

};


//Function that takes input from signup page...
function createMusician(){
    event.preventDefault();
    var musicianInfo = {
        email: emailInput.val().trim(),
        password: pw1.val().trim(),
        type: "musician"
    }
    //...And then adds it to the Musician table
    $.post("/signup/new-musician", musicianInfo, function (musicianInfo) {
        //empty text boxes once submitted
        emailInput.val("");
        pw1.val("");
        pw2.val("");
        //Stores submitted email into session storage
        //THIS IS WILL BE REMOVED WHEN WE FIGURE OUT AUTHENTICATION
        sessionStorage.setItem("email", musicianInfo.email);
         //Alert page that new Musician is created
        //Eventually we will replace this alert with other things but this is to just let us know that everything went through
        alert("New Musician Created");
    });


};
