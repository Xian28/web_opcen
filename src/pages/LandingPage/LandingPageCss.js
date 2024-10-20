import { RootCss } from "../../ui/RootCss";

export const LandingPageCss = {
    // inputs // inputs // inputs // inputs
    inputField: {
        // border: 'solid 1px black',
        width: '100%',
        marginTop: '16px',
        boxSizing: 'border-box',
    },
    // inputs // inputs // inputs // inputs

    wrapper: {
        // border: 'solid 10px red',
        // background: `${RootCss.colors.secondaryColor}`,
        background: '#1C1C1C',
        height: '100%',
        minHeight: '100vh',
        minWidth: '100vw',
        flexDirection: 'column',
        overflow: 'auto',
        boxSizing: 'border-box'
    },
    headerContainer: {
        // background: 'red',
        background: 'white',
        display: 'flex',
        alignItems: 'center',
        height: '60px',
        padding: '4px 16px',
        overflow: 'auto',
        boxSizing: 'border-box'
    },
    header: {
        // border: 'solid 1px green',
        margin: 'auto',
        maxWidth: '1200px',
        display: 'flex',
        flex: '1',
        overflow: 'auto',
        boxSizing: 'border-box'
    },

    headerLogoContainer: {
        // border: 'solid 1px black',
        height: '40px',
        display: 'flex',
        // width: '10px',
        overflow: 'auto',
        boxSizing: 'border-box'
    },
    headerLogoName: {
        // border: 'solid 1px black',
        color: `${RootCss.colors.primaryColor}`,
        display: 'flex',
        alignItems: 'center',
        padding: '0px 8px',
        fontFamily: `${RootCss.fonts.mainFont}`,
        fontWeight: 'bold',
        boxSizing: 'border-box'
    },
    bodyContainer: {
        background: `${RootCss.colors.secondaryColor}`,
        // border: 'solid 10px green',
        // display: 'flex',
        // flex: '1',
        // maxHeight: '100%',
        alignItems: 'center',
        padding: '40px 16px',
        overflow: 'auto',
        boxSizing: 'border-box'
    },
    body: {
        // border: 'solid 10px white',
        minHeight: '100%',
        // height: '100%',
        margin: 'auto',
        maxWidth: '1200px',
        display: 'flex',
        // flex: '1',
        alignItems: 'center',
        overflow: 'auto',
        boxSizing: 'border-box'
    },
    leftBodyContainer: {
        // border: 'solid 1px black',
        display: 'flex',
        alignItems: 'center',
        width: '400px',
        height: '100%',
        minHeight: '450px',
        paddingRight: '120px',
        overflow: 'auto',
        // boxSizing: 'border-box'
    },
    loginContainer: {
        border: `solid 1px ${RootCss.colors.secondaryColor}`,
        background: 'white',
        width: '100%',
        // height: '100%',
        borderRadius: '16px',
        padding: '24px 40px',
        overflow: 'auto',
        boxSizing: 'border-box'
    },
    loginCaption: {
        // border: 'solid 1px black',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: `${RootCss.fonts.mainFont}`,
        fontSize: '16px',
        paddingBottom: '16px',
        fontWeight: 'bold',
        overflow: 'auto',
        boxSizing: 'border-box'
    },
    loginButtonContainer: {
        // border: 'solid 1px black',
        paddingTop: '16px',
        overflow: 'auto',
        boxSizing: 'border-box'
    },
    rightBodyContainer: {
        // border: 'solid 1px black',
        display: 'flex',
        flex: '1',
        alignItems: 'center',
        // width: '360px',
        // height: '450px',
        overflow: 'auto',
        boxSizing: 'border-box'
    },
    heroImage: {
        // border: 'solid 1px yellow',
        width: '100%',
        // height: '500px',
        overflow: 'auto',
        boxSizing: 'border-box',
    },
    footerContainer: {
        // border: 'solid 10px white',
        padding: '4px 16px',
        minHeight: '120px',
        overflow: 'auto',
        boxSizing: 'border-box',
    },
    footer: {
        // border: 'solid 1px red',
        maxWidth: '1200px',
        margin: 'auto',
        // color: `${RootCss.colors.neutralColor}`,
        color: 'white',
        padding: '8px 0px',
        textAlign: 'center',
        fontFamily: `${RootCss.fonts.mainFont}`,
        overflow: 'auto',
        boxSizing: 'border-box',
    },
    footerCopyright: {
        // border: 'solid 1px red',
        padding: '4px 0px',
        fontSize: '12px',
        overflow: 'auto',
        boxSizing: 'border-box',
    },
    footerSlogan: {
        fontSize: '16px',
        fontWeight: 'bold',
        padding: '4px 0px',
        overflow: 'auto',
        boxSizing: 'border-box',
    },
    footerVersoin: {
        padding: '4px 0px',
        fontSize: '12px',
        overflow: 'auto',
        boxSizing: 'border-box',
    }
}