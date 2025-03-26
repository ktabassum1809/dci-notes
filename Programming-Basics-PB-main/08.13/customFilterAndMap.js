const users = [
    {
      firstName: "John",
      lastName: "Doe",
      age: 33,
      role: "Admin",
      email: "john@example",
      isVerified: true,
    },
    {
      firstName: "Jane",
      lastName: "smith",
      age: 45,
      role: "User",
      email: "jane@example",
      isVerified: true,
    },
    {
      firstName: "James",
      lastName: "smith",
      age: 15,
      role: "User",
      email: "james@example",
      isVerified: false,
    },
    {
      firstName: "Johanna",
      lastName: "Doe",
      age: 20,
      role: "Admin",
      email: "john@example",
      isVerified: false,
    },
  ];

  function filterArray(array, filterer){
    const filteredArray = [];
    for(let i=0; i <array.length; i++){
        if(filterer(array[i])){
            filteredArray.push(array[i])
        }
    }
    return filteredArray
  }


  function isUserVerified(user){
    return user.isVerified
  }

  function isUserAdult(user){
    return user.age >= 18
  }

  function isUserAdmin(user){
    return user.role === "Admin"
  }

  console.log(filterArray(users, isUserVerified))
  console.log(filterArray(users, isUserAdult))
  console.log(filterArray(users, isUserAdmin))

//=====================================
//this function represents the 'map'
function convertArray(array, converter){
const convertedArray = [];
for(let i = 0; i<array.length; i++){
    convertedArray.push(converter(array[i]))
}
return convertedArray
}

function getUsersFirstName(user){
    return user.firstName
}

function verifyUser(user){
    
    return {...user, isVerified: true}
}

function addFullName(user){
    return {...user, fullName: user.firstName + ' ' + user.lastName}
}

console.log(convertArray(users, getUsersFirstName))
console.log(convertArray(users, verifyUser))
console.log(convertArray(users, addFullName))


