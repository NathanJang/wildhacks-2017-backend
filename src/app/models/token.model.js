// @flow

import Sequelize from 'sequelize';
import models from '../models';

export default function(
            sequelize: Sequelize, 
            DataTypes: Sequelize.DataTypes): Sequelize.Model {

    const {
        STRING,
        INTEGER
    } = DataTypes;

    const Token = sequelize.define('Token', {
        user_id: {
            type: INTEGER,
            onDelete: 'CASCADE',
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        value: {
            type: STRING
        }
    }, {
        timestamps: true,
        underscored: true,
        tableName: 'tokens'
    });

    // Class Methods
    Token.associate = function(models: Object) {
        Token.belongsTo(models.User, {
            onDelete: 'CASCADE'
        });
    };

    // Hooks
    Token.beforeDestroy = function(token: Token, options: Object) {
        console.log(this);
    };

    return Token;
};