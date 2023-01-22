const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Curators = sequelize.define('curators', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    FIO: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Teachers = sequelize.define('teachers', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    FIO: {type: DataTypes.STRING, unique: true, allowNull: false},
    contacts: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Disciplines = sequelize.define('disciplines', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Groups = sequelize.define('groups', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Students = sequelize.define('students', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    FIO: {type: DataTypes.STRING, unique: true, allowNull: false},
    birthdate: {type: DataTypes.DATE, unique: false, allowNull: false},
    contacts: {type: DataTypes.STRING, unique: true, allowNull: false},
    education_form: {type: DataTypes.STRING, unique: false, allowNull: false},
    stud_info: {type: DataTypes.STRING, unique: false, allowNull: false},
    parent_info: {type: DataTypes.STRING, unique: false, allowNull: false}
})

const Meetings = sequelize.define('meetings', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    reason: {type: DataTypes.STRING, unique: false, allowNull: false},
    result: {type: DataTypes.STRING, unique: false, allowNull: false}
})

const Events = sequelize.define('events', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: false, allowNull: false},
    date: {type: DataTypes.DATE, unique: false, allowNull: false},
    place: {type: DataTypes.STRING, unique: false, allowNull: false},
    responsible: {type: DataTypes.STRING, unique: false, allowNull: false},
    note: {type: DataTypes.STRING, unique: false, allowNull: false}
})

const Loads = sequelize.define('loads', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    type: {type: DataTypes.STRING, unique: false, allowNull: false}
})

const Grades = sequelize.define('grades', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    result: {type: DataTypes.STRING, unique: false, allowNull: false}
})

const Arrears = sequelize.define('arrears', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    offset_date: {type: DataTypes.DATE, unique: false, allowNull: false},
    reason: {type: DataTypes.STRING, unique: false, allowNull: false},
    planned_date: {type: DataTypes.DATE, unique: false, allowNull: false},
    actual_date: {type: DataTypes.DATE, unique: false, allowNull: false},
})

Curators.hasMany(Groups)
Groups.belongsTo(Curators)

Groups.hasMany(Students)
Students.belongsTo(Groups)

Students.hasMany(Meetings)
Meetings.belongsTo(Students)

Groups.hasMany(Loads)
Loads.belongsTo(Groups)

Teachers.hasMany(Loads)
Loads.belongsTo(Teachers)

Disciplines.hasMany(Loads)
Loads.belongsTo(Disciplines)

Loads.hasMany(Grades)
Grades.belongsTo(Loads)

Loads.hasMany(Arrears)
Arrears.belongsTo(Loads)

Students.hasMany(Grades)
Grades.belongsTo(Students)

Students.hasMany(Arrears)
Arrears.belongsTo(Students)

Students.hasMany(Events)
Events.belongsTo(Students)

module.exports = {
    Curators, Teachers, Disciplines, Grades, Groups, Students, Arrears, Events, Meetings, Loads
}