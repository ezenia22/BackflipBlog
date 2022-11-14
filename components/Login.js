import styles from '../styles/login.module.css';

function LogIn() {
    return (
        <div>
            <form action="/send-data-here" method="post" className={styles.main}>
                <label for="first"> Username: </label>
                <input type="text" id="first" name="first" className={styles.user} /><br></br>
                <label for="last" >Password: </label>
                <input type="text" id="last" name="last" className={styles.password} /><br></br>
                <button type="submit" className={styles.button}>Submit</button>
            </form>
        </div>
    )
}

export default LogIn