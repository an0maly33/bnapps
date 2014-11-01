toons = new Mongo.Collection("toons");

if (Meteor.isClient) {

	Template.body.helpers({
		toons: function(){
			return toons.find({ owner: Meteor.userId() });
		}
  });

	Template.body.events({"submit .new-toon": function (event) {
    // This function is called when the new toon form is submitted

    var newToon = event.target.text.value;
		var newToon = newToon.toLowerCase();
console.log("nT:  " + newToon);

		var existingToon = toons.findOne({ toon: newToon });
console.log("eT:  " + existingToon);

		if (existingToon){
			// User feedback
	    event.target.text.value = "CHARACTER ALREADY EXISTS!";
		} else {
		  toons.insert({
				owner: Meteor.userId(),
		    toon: newToon.toLowerCase(),
		    proficiencies: {
					mining: 0,
					commerce: 0,
					artistry: 0
				}
		  });
	    // Clear form
	    event.target.text.value = "";
		}



    // Prevent default form submit
    return false;
 	 }
	});


	Accounts.ui.config({
		passwordSignupFields: "USERNAME_ONLY"
	});

}
