


function sum (x, y) {
try {
    if (x !== Number && y !== Number) {
        throw new Error("your input must be a number ")
    }
} catch(err) {
    console.log(err)
}

    return x + y
}
console.log(sum(2, 2))

try {
    sum("1", "2")
    throw new Error("you must input a number") 
}
catch(err){
    console.log(err)
}

 
var user = {username: "sam", password: "123abc"}

function login(username, password) {
    try {
        if (username !== user.username || password !== user.password) {
            throw("Username or Password Incorrect")
        } else if (username === user.username && password === user.password) {
            return "login Succsessful"
        }
    
    } 
    catch(err) {
       return err
    }
}

console.log(login("sam", "123abc"))