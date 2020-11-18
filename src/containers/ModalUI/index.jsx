//#region Imports

import Backdrop from '@material-ui/core/Backdrop';
import Divider from '@material-ui/core/Divider';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import React, { Fragment, useCallback, useEffect } from 'react';
import useStyles, { useClasses } from './styles';

//#endregion

const ModalUI = ({ modalRef, title = '', onClose, width, children }) => {
    const styles = useStyles({ width });
    const classes = useClasses();

    const [open, setOpen] = React.useState(false);

    const handleClose = useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    useEffect(() => {
        if (modalRef && !modalRef.current) {
            modalRef.current = {
                show: () => setOpen(true),
                hide: () => handleClose()
            };
        }
    }, [modalRef, setOpen, handleClose]);

    useEffect(() => {
        return () => {
            onClose && onClose();
        };
    }, [onClose]);

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
            <Fragment>
                <div className={styles.paper}>
                    <div className={styles.header}>
                        <div className={styles.row}>
                            <Typography variant='h2' color='primary'>
                                {title}
                            </Typography>
                        </div>

                        <div className={styles.row}>
                            <Divider className={styles.divider} classes={{ root: classes.divider }} />
                        </div>
                    </div>

                    <div className={styles.modal}>{children}</div>
                </div>
            </Fragment>
        </Modal>
    );
};

export default ModalUI;
