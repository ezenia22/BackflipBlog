import styles from '../styles/signin.module.css';
import Head from 'next/head';


function SignIn() {
    return (
        <div className={styles.main}>
            <Head>
                <title>Sign In</title>
            </Head>
            <form autoComplete='off' action="/login" method="post" className={styles.form}>
                <div className={styles.title}>Welcome</div>
                <div className={styles.subtitle}>Let's sign up!</div>
                <div className={styles.inputContainer1}>
                    <input id="username" className={styles.input} type="text" placeholder=" " />
                    <div className={styles.cut}></div>
                    <label for="username" className={styles.placeholder}>Username</label>
                </div>
                <div className={styles.inputContainer2}>
                    <input id="password" className={styles.input} type="password" placeholder=" " />
                    <div className={styles.cut}></div>
                    <label for="password" className={styles.placeholder}>Password</label>
                </div>
                <button type="text" className={styles.submit}>Sign in</button>
                <button type="text" className={styles.haveAccount}>Have an account?</button>
            </form>
        </div>
    )
}

export default SignIn