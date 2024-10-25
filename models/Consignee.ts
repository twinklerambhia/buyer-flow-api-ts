
import {DataTypes, Model, Optional} from 'sequelize';
import sequelize from '../config/config';
interface ConsigneeAttributes{
    consigneeId: number;
    name: string;
    phoneNumber:string
}
interface ConsigneeCreationAttributes extends Optional<ConsigneeAttributes, 'consigneeId'>{}
class Consignee extends Model<ConsigneeAttributes, ConsigneeCreationAttributes> implements ConsigneeAttributes{
   public consigneeId!: number;
   public name!: string;
   public phoneNumber!: string;
}
Consignee.init({
    consigneeId:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    phoneNumber:{
        type:DataTypes.STRING,
        allowNull:false
    }
},
    {
        sequelize
    }
);


export default Consignee;