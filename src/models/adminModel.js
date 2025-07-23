const db = require('../config/db');

const Admin = {

// Open filing of candidacy
  openFilingOfCandidacy: async (_secretkey, _admin_id, _start_date, _end_date, _status) => {
    const [rows] = await db.execute('CALL OpenFilingOfCandidacy(?, ?, ?, ?, ?)', [
        _secretkey,    
        _admin_id,
        _start_date,
        _end_date,
        _status,
    ]);
    return rows[0][0]; // stored procedure returns array of arrays
 },  

 getFilingStatus: async() => {
  const [rows] = await db.execute('CALL GetFilingStatus()');
  return rows[0][0]; 
}
};

module.exports = Admin;
