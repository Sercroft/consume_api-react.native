const path = require('path')
const createExpoWebpackConfigAsync = require('@expo/webpack-config')

module.exports = async function(env, argv){
    const config = await createExpoWebpackConfigAsync(env, argv)

    // Regla para poder compilar dependencias de react router native sin problemas
    config.module.rules.oush({
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
            path.join(__dirnmae, 'node_modules/react-router-native')
        ]
    })

    return config
}