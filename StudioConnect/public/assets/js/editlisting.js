//Global variables
var studioName = $("#studio-name");
var email = $("#studio-email");
var address1 = $("#studio-address-1");
var address2 = $("#studio-address-2");
var city = $("#studio-city");
var state = $("#studio-state");
var zipcode = $("#studio-zip");
var photoURL = $("#studio-photo");
var desc = $("#studio-desc");
var equip = $("#studio-equip");
var price = $("#studio-price");
var studioInfo= {};

//Populates session stored email into email field
//WE MAY NEED TO GET RID OF THIS WHEN WE FIGURE OUT AUTHENTICATION
var storedEmail = sessionStorage.getItem("email");
email.attr("placeholder",storedEmail);
email.attr("value",storedEmail);

getStudioInfo(storedEmail);

// Function that populates data into fields if an account already exists
function getStudioInfo(storedEmail){
$.get("/test/" + encodeURIComponent(storedEmail), function(data) {
    if (data){
    console.log(data);
        studioName.val(data[0].name);
        address1.val(data[0].address_1);
        address2.val(data[0].address_2);
        city.val(data[0].city);
        state.val(data[0].state);
        zipcode.val(data[0].zip);
        photoURL.val(data[0].photo_url);
        desc.val(data[0].desc);
        equip.val(data[0].equip);
        price.val(data[0].price);
    }
    else {

    };

    });
};


//On click event for submit button
//When you click the submit button
$(".submit-btn").on("click", function(event){
    event.preventDefault();
    //capture form data into studioInfo object
    studioInfo = {
        name: studioName.val().trim(),
        email: email.val().trim(), //At the moment, email is being used to identify which record to update
        address_1: address1.val().trim(),
        address_2: address2.val().trim(),
        city: city.val().trim(),
        state: state.val().trim(),
        zip: zipcode.val().trim(),
        photo_url: photoURL.val().trim(),
        description: desc.val().trim(),
        equipment: equip.val().trim(),
        price: price.val().trim()
    };
    //Pass on studioInfo object to updateListing function in order to update database
    updateListing(studioInfo);

});

//function to update listing on database
function updateListing(studioInfo){
    console.log("updateListing is running");
    //AJAX call to pass studioInfo into the specified api route (API route specified by URL)
    $.ajax({
        method: "PUT",
        url: "/edit-listing/update",
        data: studioInfo
    }).then(function(){
        //Confirms updates went through to database
        //Will replace this soon
        alert("Studio Listing Updated!");
    });
};