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
                <div className={styles.inputContainer}>
                    <div className={styles.inputContainerFirst}>
                        <input id="first" className={styles.input} type="text" placeholder=" " />
                        <div className={styles.cut}></div>
                        <label for="first" className={styles.placeholder}>First name</label>
                    </div>
                    <div className={styles.inputContainerLast}>
                        <input id="last" className={styles.input} type="text" placeholder=" " />
                        <div className={styles.cut}></div>
                        <label for="last" className={styles.placeholder}>Last name</label>
                    </div>
                </div>
                <div className={styles.inputContainer1}>
                    <input id="email" className={styles.input} type="email" placeholder=" " />
                    <div className={styles.cut}></div>
                    <label for="email" className={styles.placeholder}>Email</label>
                </div>
                <div className={styles.inputContainer1}>
                    <input id="password" className={styles.input} type="password" placeholder=" " />
                    <div className={styles.cut}></div>
                    <label for="password" className={styles.placeholder}>Password</label>
                </div>
                <div className={styles.inputContainer2}>
                    <input id="password" className={styles.input} type="password" placeholder=" " />
                    <div className={styles.cut}></div>
                    <label for="password" className={styles.placeholder}>Confirm password</label>
                </div>
                <button type="text" className={styles.submit}>Sign in</button>
                <button type="text" className={styles.haveAccount}>Have an account?</button>
            </form>
        </div>
    )
}

export default SignIn