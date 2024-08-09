import db from './database';
import Account from './models/Account';
import User from './models/User'


// models relationships:
User.hasMany(Account, { foreignKey: 'userId'})
Account.belongsTo(User, { foreignKey:'userId'})

//sync database:
const syncDatabase = async ()=> {
    await db.sync({force:true})
}

export { db, User, Account, syncDatabase}