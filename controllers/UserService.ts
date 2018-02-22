export function createUser(args, res, next) {
  /**
   * Create user
   * This can only be done by the logged in user.
   *
   * body User Created user object
   * no response value expected for this operation
   **/
  res.end();
}

export function createUsersWithArrayInput(args, res, next) {
  /**
   * Creates list of users with given input array
   *
   *
   * body List List of user object
   * no response value expected for this operation
   **/
  res.end();
}

export function createUsersWithListInput(args, res, next) {
  /**
   * Creates list of users with given input array
   *
   *
   * body List List of user object
   * no response value expected for this operation
   **/
  res.end();
}

export function deleteUser(args, res, next) {
  /**
   * Delete user
   * This can only be done by the logged in user.
   *
   * username String The name that needs to be deleted
   * no response value expected for this operation
   **/
  res.end();
}

export function getUserByName(args, res, next) {
  /**
   * Get user by user name
   *
   *
   * username String The name that needs to be fetched. Use user1 for testing.
   * returns User
   **/
  const examples = {};
  examples['application/json'] = {
  "firstName" : "aeiou",
  "lastName" : "aeiou",
  "password" : "aeiou",
  "userStatus" : 6,
  "phone" : "aeiou",
  "id" : 0,
  "email" : "aeiou",
  "username" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

export function loginUser(args, res, next) {
  /**
   * Logs user into the system
   *
   *
   * username String The user name for login
   * password String The password for login in clear text
   * returns String
   **/
  const examples = {};
  examples['application/json'] = "aeiou";
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

export function logoutUser(args, res, next) {
  /**
   * Logs out current logged in user session
   *
   *
   * no response value expected for this operation
   **/
  res.end();
}

export function updateUser(args, res, next) {
  /**
   * Updated user
   * This can only be done by the logged in user.
   *
   * username String name that need to be updated
   * body User Updated user object
   * no response value expected for this operation
   **/
  res.end();
}
