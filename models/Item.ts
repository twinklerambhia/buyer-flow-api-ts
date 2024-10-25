import {DataTypes, Model, Optional} from 'sequelize';
import sequelize from '../config/config';

interface ItemAttributes {
    itemId: number;
    orderId: number;
    itemName: string;
    quantity:number;
}
interface ItemCreationAttributes extends Optional<ItemAttributes,'itemId'>{}
class Item extends Model<ItemAttributes, ItemCreationAttributes> implements ItemAttributes{
    public itemId!: number;
    public orderId!: number;
    public itemName!: string;
    public quantity!: string;
}
Item.init({
    itemId:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull:false,
        autoIncrement:true
    },
    orderId:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    itemName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    quantity:{
        type:DataTypes.INTEGER.
        allowNull:false
    }
});
export default Item;

