//#region Imports

import React, { useState } from 'react';
import FormLogin from './FormLogin';
import FormRegister from './FormRegister/';
import useStyles from './styles';

//#endregion

const Login = () => {
    const styles = useStyles();
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className={styles.container}>
            {isLogin ? <FormLogin setIsLogin={setIsLogin} /> : <FormRegister setIsLogin={setIsLogin} />}
        </div>
    );
};

export default Login;
