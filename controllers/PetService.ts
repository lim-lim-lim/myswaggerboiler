
export function addPet(args, res, next) {
  /**
   * Add a new pet to the store
   *
   *
   * body Pet Pet object that needs to be added to the store
   * no response value expected for this operation
   **/

  res.end();
}

export function deletePet(args, res, next) {
  /**
   * Deletes a pet
   *
   *
   * petId Long Pet id to delete
   * api_key String  (optional)
   * no response value expected for this operation
   **/
  res.end();
}

export function findPetsByStatus(args, res, next) {
  /**
   * Finds Pets by status
   * Multiple status values can be provided with comma separated strings
   *
   * status List Status values that need to be considered for filter
   * returns List
   **/
  const examples = {};
  examples['application/json'] = [ {
  "photoUrls" : [ "aeiou" ],
  "name" : "doggie",
  "id" : 0,
  "category" : {
    "name" : "aeiou",
    "id" : 6
  },
  "tags" : [ {
    "name" : "aeiou",
    "id" : 1
  } ],
  "status" : "available"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

export function findPetsByTags(args, res, next) {
  /**
   * Finds Pets by tags
   * Muliple tags can be provided with comma separated strings. Use         tag1, tag2, tag3 for testing.
   *
   * tags List Tags to filter by
   * returns List
   **/
  const examples = {};
  examples['application/json'] = [ {
  "photoUrls" : [ "aeiou" ],
  "name" : "doggie",
  "id" : 0,
  "category" : {
    "name" : "aeiou",
    "id" : 6
  },
  "tags" : [ {
    "name" : "aeiou",
    "id" : 1
  } ],
  "status" : "available"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

export function getPetById(args, res, next) {
  /**
   * Find pet by ID
   * Returns a single pet
   *
   * petId Long ID of pet to return
   * returns Pet
   **/
  const examples = {};
  examples['application/json'] = {
  "photoUrls" : [ "aeiou" ],
  "name" : "doggie",
  "id" : 0,
  "category" : {
    "name" : "aeiou",
    "id" : 6
  },
  "tags" : [ {
    "name" : "aeiou",
    "id" : 1
  } ],
  "status" : "available"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

export function updatePet(args, res, next) {
  /**
   * Update an existing pet
   *
   *
   * body Pet Pet object that needs to be added to the store
   * no response value expected for this operation
   **/
  res.end();
}

export function updatePetWithForm(args, res, next) {
  /**
   * Updates a pet in the store with form data
   *
   *
   * petId Long ID of pet that needs to be updated
   * name String Updated name of the pet (optional)
   * status String Updated status of the pet (optional)
   * no response value expected for this operation
   **/
  res.end();
}

export function uploadFile(args, res, next) {
  /**
   * uploads an image
   *
   *
   * petId Long ID of pet to update
   * additionalMetadata String Additional data to pass to server (optional)
   * file File file to upload (optional)
   * returns ApiResponse
   **/
  const examples = {};
  examples['application/json'] = {
  "code" : 0,
  "type" : "aeiou",
  "message" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}
