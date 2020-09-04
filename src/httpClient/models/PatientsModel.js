class PatientsModel {
  constructor(
    firstName,
    lastName,
    sex,
    nationality,
    religion,
    maritalStatus,
    address,
    email,
    weight,
    age,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sex = sex;
    this.nationality = nationality;
    this.religion = religion;
    this.maritalStatus = maritalStatus;
    this.address = address;
    this.email = email;
    this.weight = weight;
    this.age = age;
  }

  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }

  getSex() {
    return this.sex;
  }

  getNationality() {
    return this.nationality;
  }

  getReligion() {
    return this.religion;
  }

  getMaritalStatus() {
    return this.maritalStatus;
  }

  getAddress() {
    return this.address;
  }
}

export default PatientsModel;
