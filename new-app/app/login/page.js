"use client"
import { useRouter } from 'next/navigation'
import styles from './login.module.css'

export default function Page() {
    const router = useRouter()
    return (
        <div className={styles.wrapper}>
            <div className={styles.formContent}>
                <h2>Login</h2>
                <form>
                    <input className={styles.input} type="text" id="login" name="login" placeholder="login" />
                    <input className={styles.input} type="text" id="password" name="login" placeholder="password" />
                    <button type="button" className={styles.button} onClick={() => router.push('/')}>Log In</button>
                </form>
            </div>
        </div>
    )
}