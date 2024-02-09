import mssql from 'mssql';



export const sqlConfig = {
  user: 'sa',
  password: 'Haha',
  database: 'Teach2Give',
  server: 'DESKTOP-A58QF1P\\KIAMA',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: false, // for azure
    trustServerCertificate: false // change to true for local dev / self-signed certs
  }
}

console.log(sqlConfig);


let connect =async () => {
 try {
  // make sure that any items are correctly URL encoded in the connection string
  let pool = await mssql.connect(sqlConfig)
  if (pool.connected) {
    console.log('Connected');

    // let query = 'CREATE TABLE Notes(name VARCHAR(100) NOT NULL, email VARCHAR(100)NOT NULL UNIQUE, phoneNumber VARCHAR(15) UNIQUE, role VARCHAR(50), password VARCHAR(20), profileImage VARCHAR(50), location VARCHAR(50))'

    let result = (await pool.connect())

    console.log(result);
    
    
  }else{
    
    console.log('Not connected');
    
  }

 } catch (err) {
  // ... error checks
  console.error(err);
    
 }
}

connect()