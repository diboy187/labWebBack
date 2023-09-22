import { Sequelize } from "sequelize";

const db = new Sequelize('database_app', 'root', '1597', {
    host:'localhost',
    dialect:'mysql'
})

export default db