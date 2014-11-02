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
		var existingToon = toons.findOne({ toon: newToon });

		if (existingToon){
			// User feedback
	    alert("CHARACTER ALREADY EXISTS!");
		} else {
		  toons.insert({
				owner: Meteor.userId(),
		    toon: newToon.toLowerCase(),
				level: 1,
				combat: {
					battlerage: 1,
					sorcery: 1,
					archery: 1,
					vitalism: 1,
					occultism: 1,
					shadowplay: 1,
					defense: 1,
					auramancy: 1,
					witchcraft: 1,
					songcraft: 1
				},
		    proficiencies: {
					alchemy: 0,
					handicrafts: 0,
					fishing: 0,
					machining: 0,
					mining: 0,
					leatherwork: 0,
					larceny: 0,
					construction: 0,
					husbandry: 0,
					logging: 0,
					metalwork: 0,
					masonry: 0,
					weaponry: 0,
					commerce: 0,
					cooking: 0,
					farming: 0,
					gathering: 0,
					printing: 0,
					tailoring: 0,
					carpentry: 0,
					artistry: 0
				}
		  });
		}

		// Clear form
    event.target.text.value = "";

    // Prevent default form submit
    return false;
	}});

	Template.body.events({"submit .toonLevel": function (event) {

		var toonLevel = event.target.name;
console.log("tL:  " + toonLevel);
			
	}});

	Accounts.ui.config({
		passwordSignupFields: "USERNAME_ONLY"
	});

}
