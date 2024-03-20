// Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.
// Explain & TIP: This is like having labels you can rewrite anytime, which is great for when you need to adjust your list based on new information.
function createFlexiblekey(key, value) {
    var myobject = {};
    // Setting up a section in the list with a changeable name
    myobject[key] = value;
    return myobject;
}
// Using the flexible list setup for a user's preference
var userPreference2 = createFlexiblekey("user", "student");
// Showing the user's choice
console.log(userPreference2);
