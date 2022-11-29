import styles from '../styles/login.module.css';
import Head from 'next/head';


function LogIn() {
    return (
        <div className={styles.main}>
            <Head>
                <title>Log In</title>
            </Head>
            <form autoComplete='off' action="/" method="post" className={styles.form}>
                <div className={styles.title}>Welcome</div>
                <div className={styles.subtitle}>Let's log into your account!</div>
                <div className={styles.inputContainer1}>
                    <input id="email" className={styles.input} type="email" placeholder=" " />
                    <div className={styles.cut}></div>
                    <label for="email" className={styles.placeholder}>Email</label>
                </div>
                <div className={styles.inputContainer2}>
                    <input id="password" className={styles.input} type="password" placeholder=" " />
                    <div className={styles.cut}></div>
                    <label for="password" className={styles.placeholder}>Password</label>
                </div>
                <button type="text" className={styles.submit}>Log in</button>
            </form>
        </div>
    )
}

export default LogIn