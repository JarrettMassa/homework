var emailInput = $(".email");
var pw = $(".password");

    $(".submit").on("click", function(){
        
        event.preventDefault();
        var userFound = 0;
        var passwordFound = 0;
        var userType = " ";

        $.get("/api/signin", {}, function (result) {
            console.log(result);

            for (var i = 0; i<result.length; i++){
                if (emailInput.val().trim().toLowerCase() == result[i].email.toLowerCase()){
                    userFound = 1;
                    if (pw.val() == result[i].password & userFound){
                        passwordFound = 1;
                        userType = result[i].type;
                    }
                    break;
                }
            }


            if (userFound == 0){
                alert("User not found");
            }
            else if(passwordFound == 0){
                alert("Incorrect Password!")
            }
            else {
                // Save email address for future authentication
                sessionStorage.setItem("email", emailInput.val());

                pw.val("");
                emailInput.val("");

                // Redirect based on what kind of user is logging in
                if (userType == "musician"){
                    window.location.replace("/musician-main");
                }
                else if (userType = "studio"){
                    window.location.replace("/studio-main");
                }
                else{
                    Alert("Uh oh...");
                }
            }
        }); // End get /api/signin
    });


