import styles from '../styles/login.module.css';


function LogIn() {
    return (
        <div className={styles.main}>
            <form autoComplete='off' action="/send-data-here" method="post" className={styles.form}>
                <div className={styles.title}>Welcome</div>
                <div className={styles.subtitle}>Let's log into your account!</div>
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
                <button type="text" className={styles.submit}>submit</button>
            </form>
        </div>
    )
}

export default LogIn