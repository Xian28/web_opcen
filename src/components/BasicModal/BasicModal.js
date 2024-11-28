import { Box, Modal, Typography } from '@mui/material'
import React from 'react'
import { BasicModalCss } from './BasicModalCss'
import CloseIcon from '@mui/icons-material/Close';
import { RootCss } from '../../ui/RootCss';
import FilledButton from '../BasicButton/FilledButton/FilledButton';
import TextButton from '../BasicButton/TextButton/TextButton';

const BasicModal = ({
    open,
    handleClose,
    modalTitle,
    modalBody,
    buttonLabel,
    cancelButtonLabel,
    onClick,
    hasNoCancel,
    big
}) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            sx={{
                zIndex: '11',
            }}
        >
            <Box 
                sx={big == true ? BasicModalCss.wrapperForBigModal : BasicModalCss.wrapper}
            >
                <Box sx={BasicModalCss.modalContent}>
                    <Box sx={BasicModalCss.modalHeader}>
                        <Typography sx={BasicModalCss.modalHeaderCaption}>
                            {modalTitle}
                        </Typography>
                        <Box sx={BasicModalCss.closeIconContainer}>
                            <CloseIcon 
                                sx={{
                                    color: `${RootCss.colors.redColor}`,
                                    cursor: 'pointer'
                                }}
                                fontSize='medium'
                                onClick={handleClose}
                            />
                        </Box>
                    </Box>
                    <Box sx={BasicModalCss.modalBody}>
                        {modalBody}
                    </Box>
                    <Box sx={BasicModalCss.modalFooter}>
                        <FilledButton
                            title={buttonLabel}
                            disableElevation={true}
                            onClick={onClick}
                            padding='0px 20px'
                        />
                        <TextButton
                            isCancelButton={true}
                            title={cancelButtonLabel}
                            fontFamily={RootCss.fonts.mainFont}
                            onClick={handleClose}
                            visibility={hasNoCancel ? 'hidden' : 'visible'}
                        />
                    </Box>
                </Box>
            </Box>
        </Modal>
    )
}

export default BasicModal
