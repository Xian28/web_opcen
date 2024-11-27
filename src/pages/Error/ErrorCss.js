import { RootCss } from "../../ui/RootCss";

export const ErrorCss = {
    wrapper: {
        // border: 'solid 1px red',
        position: 'absolute',
        background: 'white',
        top: 0,
        left: 0,
        display: 'flex',
        color: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontFamily: `${RootCss.fonts.mainFont}`,
        fontSize: '40px',
        flexDirection: 'column',
        width: '100vw',
        minHeight: '100vh',
        maxHeight: '100vh',
        overflow: 'auto',
        boxSizing: 'border-box'
    },
}