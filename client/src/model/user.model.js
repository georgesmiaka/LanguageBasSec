const userModel = {
    getUserModel: async function getUserModel(userP) {
        let user = {
            "id": new Date().toUTCString(),
            "password": userP.password, // Implemente hash-function
            "name": userP.name,
            "email": userP.email,
            "phone": userP.phone
        }
        return user;
    },
};

module.exports = userModel;