
var users = [];
let georges = {
    "name": "Georges Kayembe",
    "email": "kayss.g@gmail.com",
    "password": "12345678",
    "phone": "0729350501"
};
users.push(georges);
const userDB = {
    
    getDb: async function getDb() {
        return users;
    },
    saveToDb: async function saveToDb(data) {
        users.push(data);
        return "success";
    },
};

module.exports = userDB;