import { RootCss } from "../../ui/RootCss";

export const SidebarCss = {
    sideBarMenuContainer: {
        // border: 'solid 1px white',
        height: '50px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'transparent',
        cursor: 'pointer',
        borderRadius: '5px',
        transition: '0.1s',
        '&:hover': {
            background: `${RootCss.colors.secondaryColor}`,
        }
    },
    iconContainer: {
        // border: 'solid 1px white',
        minWidth: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    labelContainer: {
        // border: 'solid 1px white',
        flex: '1',
        color: 'white',
        fontFamily: `${RootCss.fonts.mainFont}`,
        fontSize: '14px',
        padding: '0px 0px 0px 10px',
        whiteSpace: 'nowrap'
    },
}