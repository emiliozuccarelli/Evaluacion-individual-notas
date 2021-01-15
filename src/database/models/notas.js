module.exports = function(sequelize, dataTypes) {
    let alias = "notas";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: dataTypes.STRING,
            notNull: true
        },
        mensaje: {
            type: dataTypes.STRING,
            notNull: true
        },
        
        

    };
    let config = {
        tableName: 'notas',
        timestamps: true,
        underscored: true
    }

    const notas = sequelize.define(alias, cols, config)
    
    return notas
    
}