const config = require('../knexfile.js');
const knex = require('knex');
const db = knex(config.development);
const bcrypt = require('bcryptjs');

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
  login,
};

const database = "users";

//////////////////////////////////////////////////////////////////////////
// Only the above const needs changed, unless a function is being added //
//////////////////////////////////////////////////////////////////////////

function login(username) {
return db(`${database}`)
	.where ({ username })
	.first();
}

function find() {
  return db(`${database}`);
}

function findById(id) {
  return db(`${database}`)
    .where({ id })
    .first();
}

function add(thing) {
  return db(`${database}`)
    .insert(thing)
    .into(`${database}`);
}

function update(id, changes) {
  return db(`${database}`)
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db(`${database}`)
    .where({ id })
    .del();
}