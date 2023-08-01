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
        marginBottom: theme.margins.mr1,
        textAlign: 'center'
    },
    description: {
        textAlign: 'center',
        marginBottom: theme.margins.mr2,
    },
    textRegister: {
        marginTop: 15,
        marginHorizontal: theme.margins.mr1,
    },
    btnRegister: {
        color: theme.colors.principalColor,
        fontWeight: theme.fontWeights.bold
    },
    displayName: {
        fontWeight: theme.fontWeights.bold,
        paddingBottom: 5,
    },
})


export default function StyledText({ align, children, color, fontSize, fontWeight, title, text, btn, loader, display, style, ...restOfProps }) {
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
        text === 'textRegister' && styles.textRegister,
        btn === 'btnRegister' && styles.btnRegister,
        display === 'name' && styles.displayName,
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
        borderRadius: theme.borders.br1,
    },
    overlayModal: {
        height: 'auto',
        width: '90%',
        backgroundColor: '#fff',
    },
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentUserGuest: {
        marginHorizontal: theme.margins.mr3,
    },
    image: {
        resizeMode: 'contain',
        height: 300,
        width: '100%',
        marginBottom: theme.margins.mr4,
    },
    imgLogin: {
        resizeMode: 'contain',
        width: '100%',
        height: 150,
        marginTop: theme.margins.mr2,
    },
    btn: {
        backgroundColor: theme.colors.principalColor,
    },
    btnLogout: {
        marginTop: theme.margins.mr3,
        paddingVertical: theme.paddings.pd1,
        borderRadius: 0,
        backgroundColor: theme.colors.white,
        borderTopWidth: 1,
        borderTopColor: '#e3e3e3',
        borderBottomWidth: 1,
        borderBottomColor: '#e3e3e3',
    },
    btnLogoutText: {
        color: theme.colors.principalColor,
    },
    btnForm: {
        marginTop: theme.margins.mr2,
        width: '95%'
    },
    btnFormEdit: {
        marginTop: theme.margins.mr1,
        width: '95%'
    },
    content: {
        marginHorizontal: theme.margins.mr4,
    },
    contentForm: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: theme.margins.mr3,
    },
    contentFormEdit: {
        alignItems: 'center',
        paddingVertical: 10
    },
    contentInfoUser: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingVertical: theme.paddings.pd3,
    },
    input: {
        width: '100%',
        marginTop: theme.margins.mr2,
    },
    inputFormEdit: {
        marginBottom: theme.margins.mr1,
    },
    icon: {
        color: '#c1c1c1'
    },
    avatar: {
        marginRight: theme.margins.mr2,
        backgroundColor: theme.colors.principalColor,
    }
});