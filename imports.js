const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cookie = require('cookie-parser');
const JSONdb = require('simple-json-db');
const fs = require('fs');
const init = require(__dirname+'/logic/init.js');

const imports = {
	express, 
	bodyParser,
	mongoose,
	bcrypt,
	cookie,
	JSONdb,
	fs,
	init
}

module.exports = imports;