import pool from '../db.js';

export const getTransactions = async (req, res) => {
  res.json({result: "getTransactions"});
}

export const getTransactionById = async (req, res) => {
  res.json({result: "getTransactionById"});
}

export const createTransaction = async (req, res) => {
  res.json({result: "createTransaction"});
}

export const updateTransaction = async (req, res) => {
  res.json({result: "updateTransaction"});
}

export const deleteTransaction = async (req, res) => {
  res.json({result: "deleteTransaction"});
}