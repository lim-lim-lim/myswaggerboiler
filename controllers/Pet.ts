import * as Pet from './PetService';

export function addPet (req, res, next) {
  Pet.addPet(req.swagger.params, res, next);
}

export function deletePet(req, res, next) {
  Pet.deletePet(req.swagger.params, res, next);
}

export function findPetsByStatus (req, res, next) {
  Pet.findPetsByStatus(req.swagger.params, res, next);
}

export function findPetsByTags (req, res, next) {
  Pet.findPetsByTags(req.swagger.params, res, next);
}

export function getPetById (req, res, next) {
  Pet.getPetById(req.swagger.params, res, next);
}

export  function updatePet (req, res, next) {
  Pet.updatePet(req.swagger.params, res, next);
}

export function updatePetWithForm (req, res, next) {
  Pet.updatePetWithForm(req.swagger.params, res, next);
}

export function uploadFile (req, res, next) {
  Pet.uploadFile(req.swagger.params, res, next);
}
