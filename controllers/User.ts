import * as User from './UserService';

export function createUser (req, res, next) {
  User.createUser(req.swagger.params, res, next);
}

export function createUsersWithArrayInput (req, res, next) {
  User.createUsersWithArrayInput(req.swagger.params, res, next);
}

export function createUsersWithListInput (req, res, next) {
  User.createUsersWithListInput(req.swagger.params, res, next);
}

export function deleteUser (req, res, next) {
  User.deleteUser(req.swagger.params, res, next);
}

export function getUserByName (req, res, next) {
  User.getUserByName(req.swagger.params, res, next);
}

export function loginUser (req, res, next) {
  User.loginUser(req.swagger.params, res, next);
}

export function logoutUser (req, res, next) {
  User.logoutUser(req.swagger.params, res, next);
}

export function updateUser (req, res, next) {
  User.updateUser(req.swagger.params, res, next);
}
