import { DataTypes, Model, Optional } from "sequelize";
import sequelize from '../config/config';

interface ConsignorAttributes {
    consignorId: number;
    name:string,
    phoneNumber:string
}
interface ConsignorCreationAttributes extends Optional<ConsignorAttributes, 'consignorId'>{ }

class Consignor extends Model<ConsignorAttributes, ConsignorCreationAttributes> implements ConsignorAttributes{
    public consignorId!: number;
    public name!: string;
    public phoneNumber!: string;
}

Consignor.init({

    consignorId:{
        type:DataTypes.NUMBER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    name:{
        type:DataTypes.NUMBER,
        allowNull:false
    },
    phoneNumber:{
        type:DataTypes.STRING,
        allowNull:false
    }
},
{sequelize}

);

export default Consignor;