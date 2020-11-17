//#region Imports

import AddIcon from '@material-ui/icons/Add';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import ButtonUI from 'components/ButtonUI';
import ContextBox from 'components/ContextBox';
import Loader from 'components/Loader';
import React, { useMemo } from 'react';
import useStyles from './styles';

//#endregion

const ContentBox = ({ title, children, research, add, loading }) => {
    const styles = useStyles();
    const buttonText = useMemo(() => `Adicionar ${title}`, [title]);

    return (
        <ContextBox title={title}>
            <div className={styles.buttonContent}>
                <div className={styles.left}>
                    <ButtonUI className={styles.button} isLoading={loading} onClick={async () => await research()}>
                        <RotateLeftIcon className={styles.icon} />
                    </ButtonUI>
                </div>

                <div className={styles.right} onClick={() => add()}>
                    <ButtonUI className={styles.button} isDisabled={loading} startIcon={<AddIcon />}>
                        {buttonText}
                    </ButtonUI>
                </div>
            </div>

            {!loading && children}
            <Loader isLoading={loading} />
        </ContextBox>
    );
};

export default ContentBox;
