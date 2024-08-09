import db from '../database';
import { DataTypes } from 'sequelize';
import User from './User';

const Account = db.define("account", {
    id:{
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement:true,
        primaryKey:true
    },
    accountNumber:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    balance:{
        type:DataTypes.DECIMAL(15,2),
        allowNull:false,
        defaultValue:0.00,
    },
    userId:{
        type:DataTypes.INTEGER.UNSIGNED,
        references:{
            model: User,
            key:'id'
        }
    }
})

export default Account