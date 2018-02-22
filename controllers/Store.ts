import * as Store from './StoreService';

export function deleteOrder (req, res, next) {
  Store.deleteOrder(req.swagger.params, res, next);
}

export function getInventory (req, res, next) {
  Store.getInventory(req.swagger.params, res, next);
}

export function getOrderById (req, res, next) {
  Store.getOrderById(req.swagger.params, res, next);
}

export function placeOrder (req, res, next) {
  Store.placeOrder(req.swagger.params, res, next);
}
