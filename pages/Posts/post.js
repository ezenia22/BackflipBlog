import Image from 'next/image'
import truong from '/images/truong.png'
import bar from '/images/bar.png'
import babi from '/images/pig.png'
import styles from '/styles/post.module.css'

function Post() {
    return (
        <div className={styles.container}>
            <section className={styles.item}>
                <h4>Truong</h4>
                <Image src='https://ca.slack-edge.com/T1GA2PMEF-U03QWJGNXS9-32aa1b746ee9-512' alt='post' width='400' height='400' />
                <p className={styles.text}>What a boring day it is :(</p>
            </section>
            <section className={styles.item}>
                <h4>Xin Long</h4>
                <Image src='https://ca.slack-edge.com/T1GA2PMEF-U02CBKCGUH5-cd6420ca4fba-512' alt='post' width='400' height='400' />
                <p className={styles.text}>Just went out on a date hehe</p>
            </section>
            <section className={styles.item}>
                <h4>Babi</h4>
                <Image src='https://ca.slack-edge.com/T1GA2PMEF-U043U2X2TK5-e06206e4fbba-512' alt='post' width='400' height='400' />
                <p className={styles.text}>I hope I won't be eaten today O.o</p>
            </section>
        </div>
    )
}

export default Post
