import React from "react"
import { Text, StyleSheet } from 'react-native'
import theme from '../../theme.js'

export default function StyledText({children, align, flexDirection, justifyContent, color, fontSize, fontWeight, style, ...restOfProps}){
    const textStyles = [
        styles.text,
        flexDirection === 'center' && styles.flexDirection,
        justifyContent === 'center' && styles.justifyContent,
        align === 'center' && styles.textAlignCenter,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        color === 'subHeading' && styles.subHeading,
        fontWeight === 'bold' && styles.bold,
        style
    ]

    return(
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>     
    )
}

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    colorPrimary: {
        color: theme.colors.primary
    },
    colorSecondary: {
        color: theme.colors.textSecondary
    },
    bold: {
        fontWeight: theme.fontWeights.bold
    },
    subHeading: {
        fontSize: theme.fontSizes.subHeading
    },
    textAlignCenter: {
        textAlign: 'center'
    },
    flexDirection: {
        flexDirection: 'row'
    },
    justifyContent: {
        justifyContent: 'space-around'
    }
})