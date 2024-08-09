import db from '../database';
import { DataTypes } from 'sequelize';

const User = db.define("user",{
    id:{
        type:DataTypes.INTEGER.UNSIGNED,
        primaryKey:true,
        autoIncrement:true
    },
    firstName:{
        type: DataTypes.STRING,
        allowNull:false
    },
    lastName:{
        type: DataTypes.STRING,
        allowNull:false
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            isEmail:true
        }
    },
    phoneNumber:{
        type:DataTypes.STRING,
        allowNull:true,
        validate:{
            is: /^[\d\s\+\-\(\)]{7,15}$/,
            // Custom validation:
            customPhoneValidator(value:string){
                if (value && !/^[\d\s\+\-\(\)]{7,15}/.test(value)){
                    throw new Error('Invalid phone number format')
                }
            }
        }
    }
})

export default User
