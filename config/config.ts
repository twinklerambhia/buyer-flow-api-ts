import {Sequelize} from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();
const database: string= 'twinkle_db';
const username: string= 'root';
const password :string = process.env.DB_PASSWORD || '';

const sequelize=new Sequelize(database, username, password,
    {
        host:'localhost', 
        dialect:'mysql',
        logging:console.log,
        define:{
            timestamps:true,
            underscored:true
        }
    }
);
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err:Error) => {
        console.error('Unable to connect to the database:', err);
    });

sequelize.sync({ force: false }) // 'force: false' ensures tables are not dropped if they already exist
    .then(() => {
        console.log("Database & tables created!");
    })
    .catch((err:Error) => {
        console.error("Error creating database tables: ", err);
    });

export default sequelize;