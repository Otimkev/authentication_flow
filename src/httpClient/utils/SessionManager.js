class SessionManager {
  constructor(
    sessionIdArg,
    userFirstNameArg,
    userLastNameArg,
    userEmailArg,
    userPhoneNumberArg,
  ) {
    if (SessionManager.UserSessionInstance instanceof SessionManager) {
      return SessionManager.UserSessionInstance;
    }
    this.id = sessionIdArg;
    this.firstName = userFirstNameArg;
    this.lastName = userLastNameArg;
    this.email = userEmailArg;
    this.phoneNumber = userPhoneNumberArg;

    SessionManager.UserSessionInstance = this;
  }
  getUser() {
    return SessionManager.UserSessionInstance;
  }

  getUserId() {
    return this.id;
  }
  getUserFirstName() {
    return this.firstName;
  }
  getUserLastName() {
    return this.lastName;
  }
  getUserEmail() {
    return this.email;
  }
  getUserPhoneNumber() {
    return this.phoneNumber;
  }
}

export default SessionManager;
