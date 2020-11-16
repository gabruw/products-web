//#region Imports

import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import React from 'react';
import useStyles from './styles';

//#endregion

const ModalUI = ({ children, modalRef }) => {
    const styles = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (modalRef && !modalRef.current) {
            modalRef.current = {
                open: () => setOpen(true),
                hide: () => handleClose()
            };
        }
    }, [modalRef, setOpen, handleClose]);

    return (
        <Modal
            open={open}
            closeAfterTransition
            onClose={handleClose}
            className={styles.modal}
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500
            }}
        >
            <Fade in={open}>
                <div className={styles.paper}>{children}</div>
            </Fade>
        </Modal>
    );
};

export default ModalUI;
