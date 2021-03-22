const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cookie = require('cookie-parser');
const JSONdb = require('simple-json-db');
const init = require(__dirname+'/logic/init.js');
const db = require(__dirname+'/db/maindb.js');

const imports = {
	express, 
	bodyParser,
	mongoose,
	bcrypt,
	cookie,
	JSONdb,
	init,
	db
}

module.exports = imports;