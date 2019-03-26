function getFullName(person) {
    var fullname = person.firstname + " " + person.lastname;
    return fullname;
}
var user = { firstname: "sakine", lastname: "mazlomyar" };
var callTheFunc = getFullName(user);
console.log(callTheFunc);
