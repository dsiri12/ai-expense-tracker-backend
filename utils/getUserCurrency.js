import pool from '../db.js';

export const getUserCurrency = async (userId) => {
  const result = await pool.query('SELECT currency FROM users WHERE id = $1', [userId]);
  return result.rows[0]?.currency || 'USD';
}
