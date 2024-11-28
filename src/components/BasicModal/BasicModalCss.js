import { RootCss } from "../../ui/RootCss";


export const BasicModalCss = {
    wrapper: {
        // border: 'solid 1px black',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '500px',
        minWidth: '500px',
        minHeight: '200px',
        maxHeight: '90%',
        background: 'white',
        borderRadius: '5px',
        display: 'flex',
        overflow: 'auto',
        // '&:hover': {
        //     overflow: 'auto'
        // }
    },
    wrapperForBigModal: {
        // border: 'solid 1px black',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        minWidth: '1000px',
        // height: '600px',
        // minHeight: '90vh',
        // maxHeight: '100%',
        maxHeight: '800px',
        background: 'white',
        borderRadius: '5px',
        display: 'flex',
        overflow: 'auto',
        boxSizing: 'border-box'
        // '&:hover': {
        //     overflow: 'auto'
        // }
    },
    modalContent: {
        // border: 'solid 5px black',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
        width: '100%',
    },
    modalHeader: {
        background: `${RootCss.colors.primaryColor}`,
        // borderBottom: 'solid 1px #ccc',
        padding: '20px 20px 20px 20px',
        display: 'flex',
        alignItems: 'end',
        justifyContent: 'space-between'
    },
    closeIconContainer: {
        // border: 'solid 1px black',
        borderRadius: '50%',
        height: '40px',
        width: '40px',
        position: 'absolute',
        right: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: '0.2s',
        '&:hover': {
            background: `${RootCss.colors.primaryColorHover}`,
        }

    },
    modalHeaderCaption: {
        // border: 'solid 1px black',
        height: '40px',
        color: 'white',
        fontFamily: `${RootCss.fonts.mainFont}`,
        fontSize: '20px',
        fontWeight: '400',
        display: 'flex',
        alignItems: 'center',
    },
    modalBody: {
        borderBottom: 'solid 1px #ccc',
        // display: 'flex',
        flex: '1',
        padding: '20px 20px 0px 20px',
    },
    modalFooter: {
        // border: 'solid 1px black',
        flex: '1',
        padding: '20px',
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'end'
    },
}