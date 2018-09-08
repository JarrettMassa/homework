//Global Variables
var emailInput = $("#email");
var pw1 = $("#password");
var pw2 = $("#password-conf");

//On click event for submit button
//When you click the submit button
    $(".submit").on("click", function(event){
        event.preventDefault();

//==============================================================       
//SOMEONE STILL NEEDS TO DO THIS PART
   // Form validaion.
       // Make sure the email field is accurate / correct.
       // Make sure the passwords match.
//==============================================================   

        //capture value of the checkbox
            //When box is checked value = "studio"
            //When box is not checked value = 0
        var checkboxValue = $("input[id='check']:checked").val();

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
function createStudio(event){    
    //event.preventDefault();
    var studioInfo = {
        email: emailInput.val().trim(),
        password: pw1.val().trim(),
        type: "studio"
    };
    //...And then adds it to the Studios table
    $.post("/signup/new-studio", studioInfo, function (result) {
        //empty text boxes once submitted
        emailInput.val("");
        pw1.val("");
        pw2.val("");
        //Alert page that new studio is created
        //Eventually we will replace this alert with other things but this is to just let us know that everything went through
        alert("New Studio Created");

    });

};


//Function that takes input from signup page...
function createMusician(event){
    //event.preventDefault();
    var musicianInfo = {
        email: emailInput.val().trim(),
        pw: pw1.val().trim(),
        type: "musician"
    };
    //...And then adds it to the Studios table
    $.post("/signup/new-musician", musicianInfo, function (result) {
        //empty text boxes once submitted
        emailInput.val("");
        pw1.val("");
        pw2.val("");
         //Alert page that new studio is created
        //Eventually we will replace this alert with other things but this is to just let us know that everything went through
        alert("New Musician Created");
    });

};
