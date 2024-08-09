import { Sequelize } from 'sequelize';
const db_name = 'bankappdb';

const db = new Sequelize(`postgres://localhost:5432/${db_name}`,{
    logging:false
})

export default db