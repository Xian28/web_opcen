import { RootCss } from "../../ui/RootCss";

export const HomeCss = {
    wrapper: {
        // border: 'solid 1px red',
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        minHeight: '100vh',
        maxHeight: '100vh',
        overflow: 'auto',
        boxSizing: 'border-box'
    },
    header: {
        // border: 'solid 1px red',
        display: 'flex',
        minHeight: '60px',
        width: '100%',
        background: `${RootCss.colors.secondaryColor}`,
        boxSizing: 'border-box'
    },
    sidebarHeaderContainer: {
        // border: 'solid 1px white',
        padding: '0px 20px',
        display: 'flex',
        width: '250px',
        alignItems: 'center',
        boxSizing: 'border-box'
    },
    menuContainer: {
        // border: 'solid 1px white',
        display: 'flex',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        boxSizing: 'border-box',
        marginRight: '10px',
        boxSizing: 'border-box'
    },
    sidebarLogo: {
        // border: 'solid 1px black',
        width: '40px',
        height: '40px',
        padding: '4px',
        boxSizing: 'border-box'
    },
    sidebarSystemname: {
        // border: 'solid 1px black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0px 10px',
        fontFamily: `${RootCss.fonts.mainFont}`,
        fontSize: '24px',
        fontWeight: 'bold',
        // color: `${RootCss.colors.primaryColor}`
        color: 'white',
    },
    subHeaderContainer: {
        // border: 'solid 1px black',
        padding: '0px 20px',
        display: 'flex',
        flex: '1',
        justifyContent: 'end',
        alignItems: 'center',
    },
    bodyContainer: {
        // border: 'solid 1px black',
        flex: '1',
        display: 'flex',
        boxSizing: 'border-box'
    },
    sidebarWrapper: {
        // border: 'solid 1px black',
        display: 'flex',
        flexDirection: 'column',
        width: '250px',
        padding: '8px 20px',
        background: `${RootCss.colors.primaryColor}`,
        transition: '0.3s',
    },
    contentContainer: {
        // border: 'solid 10px red',
        flex: '1',
        background: '#ffffff',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 70px)',
        overflow: 'auto',
        boxSizing: 'border-box',
        background: '#FAFAFA',
        boxSizing: 'border-box'
    },
    // pageTitle: {
    //     // border: 'solid 1px black',
    //     fontFamily: `${RootCss.fonts.mainFont}`,
    //     color: `${RootCss.colors.pageTitleBlack}`,
    //     fontWeight: '600',
    //     fontSize: '20px',
    //     padding: '0px 0px 20px 0px',
    // },
}