interface Person{
    firstname: string,
    lastname: string
}

function getFullName(person: Person){
    let fullname = person.firstname + " "+ person.lastname
    return fullname;

}

let user = {firstname:"sakine", lastname:"mazlomyar"}

let callTheFunc = getFullName(user)
console.log(callTheFunc);