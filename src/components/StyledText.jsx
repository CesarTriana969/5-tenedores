import React from 'react'
import { StyleSheet, Text } from 'react-native'
import theme from '../theme'


const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    colorPrymary: {
        color: theme.colors.primary
    },
    colorSecondary: {
        color: theme.colors.textSecondary
    },
    bold: {
        fontWeight: theme.fontWeights.bold
    },
    subheading: {
        fontSize: theme.fontSizes.subheading
    },
    textAlignCenter: {
        textAlign: 'center'
    },
    textLoading: {
        color: theme.colors.principalColor,
        textTransform: theme.textTransform.uppercase,
        marginTop: theme.margins.mr1,
    },
    title: {
        fontWeight: theme.fontWeights.bold,
        fontSize: 19,
        marginBottom: 10,
        textAlign: 'center'
    },
    description: {
        textAlign: 'center',
        marginBottom: 20,
    }
})


export default function StyledText({ align, children, color, fontSize, fontWeight, title, text, style, loader, ...restOfProps }) {
    const textStyles = [
        styles.text,
        align === 'center' && styles.textAlignCenter,
        color === 'primary' && styles.colorPrymary,
        color === 'secondary' && styles.colorSecondary,
        fontSize === 'subheading' && styles.subheading,
        fontWeight === 'bold' && styles.bold,
        loader === 'loader' && styles.textLoading,
        title === 'titlePrimary' && styles.title,
        text === 'description' && styles.description,
        style
    ]

    return (
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )
}


export const layout = StyleSheet.create({
    overlay: {
        height: 100,
        width: 200,
        backgroundColor: theme.colors.white,
        borderColor: theme.colors.principalColor,
        borderWidth: 2,
        borderRadius: 10,
    },
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentUserGuest: {
        marginHorizontal: 30,
    },
    image: {
        resizeMode: 'contain',
        height: 300,
        width: '100%',
        marginBottom: 40
    },
    imgLogin: {
        resizeMode: 'contain',
        width: '100%',
        height: 150,
        marginTop: 20,
    },
    btn: {
        backgroundColor: theme.colors.principalColor,
    },
    btnForm: {
        marginTop: 20,
        width: '95%'
    },
    content: {
        marginHorizontal: 40,
    },
    contentForm: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    input: {
        width: '100%',
        marginTop: 20
    },
    icon: {
        color: '#c1c1c1'
    }
});