'use strict';

const response = require ('./response');
const connection = require ('./connect');

exports.users = function (req, res) {
  connection.query ('SELECT * FROM person', function (error, rows, fields) {
    if (error) {
      console.log (error);
    } else {
      response.ok (rows, res);
    }
  });
};

exports.welcome = function (req, res) {
  response.ok ('Welcome!', res);
};

exports.user = function (req, res) {
  connection.query (`SELECT * FROM person WHERE id=${req.params.id}`, function (
    error,
    rows,
    fields
  ) {
    if (error) {
      console.log (error);
    } else {
      response.ok (rows, res);
    }
  });
};

exports.add = function (req, res) {
  let first_name = req.body.first_name;
  let last_name = req.body.last_name;
  connection.query (
    `INSERT INTO person SET first_name="${first_name}", last_name="${last_name}"`,
    function (error, rows, fields) {
      if (error) {
        throw error;
      } else {
        return res.send ({
          error: false,
          data: rows,
          message: 'New data has been created',
        });
      }
    }
  );
};

exports.update = function (req, res) {
  let id = req.params.id;
  let first_name = req.body.first_name;
  let last_name = req.body.last_name;
  connection.query (
    `UPDATE person SET first_name="${first_name}", last_name="${last_name}" WHERE id=${id}`,
    function (error, rows, fields) {
      if (error) {
        throw error;
      } else {
        return res.send ({
          error: false,
          data: rows,
          message: 'Data has been Changed',
        });
      }
    }
  );
};

exports.destroy = function (req, res) {
  let id = req.params.id;
  connection.query (`DELETE FROM person WHERE id=${id}`, function (
    error,
    rows,
    field
  ) {
    if (error) {
      throw error;
    } else {
      return res.send ({
        error: false,
        data: rows,
        message: 'Data has been Deleted',
      });
    }
  });
};
