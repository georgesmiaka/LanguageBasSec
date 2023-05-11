const sessionController = {
    setSession: function setSession(user) {
        sessionStorage.setItem('logged', user);
    },
    getSession: function getSession() {
        return sessionStorage.getItem("logged");
    },
    removeSession: function removeSession() {
        sessionStorage.removeItem("logged");
        sessionStorage.clear();
    }
};

module.exports = sessionController;