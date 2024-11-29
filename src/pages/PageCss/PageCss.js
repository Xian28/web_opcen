import { RootCss } from "../../ui/RootCss";

export const PageCss = {
    pageTitle: {
        // border: 'solid 1px black',
        fontFamily: `${RootCss.fonts.mainFont}`,
        color: `${RootCss.colors.pageTitleBlack}`,
        fontWeight: '600',
        fontSize: '20px',
        padding: '0px 0px 20px 0px',
    },
    wrapper: {
        // border: 'solid 1px black',
        display: 'flex',
        width: '100%',
        flexDirection: 'column'
    },
    pageHeader: {
        // border: 'solid 1px black',
        display: 'flex',
        justifyContent: 'space-between'
    },
    searchInput: {
        // border: 'solid 1px black',
        display: 'flex',
        width: '300px',
    },
    inputs: {
        width: '100%'
    },
    formInput: {
        width: '100%',
        marginBottom: '5px',
    },
    headerButton: {
        // border: 'solid 1px black',
        // display: 'flex',
        width: '100px',
    },
    seachMessage: {
        color: 'red',
        fontWeight: '500',
        fontFamily: `${RootCss.fonts.mainFont}`,
        fontSize: '20px'
    },
    tableContainer: {
        // border: 'solid 1px black',
        padding: '20px 0px',
    },
    modalNote: {
        fontSize: '16px',
        fontFamily: `${RootCss.fonts.mainFont}`,
        // color: '#777',
        // color: 'black',
        color: `${RootCss.colors.textBlack}`,
        padding: '0px 0px 20px 0px'
    },
}