import styles from './transactions.module.css';
import Image from 'next/image';

const Transactions = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Latest Transactions</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                {/* <Image
                                    src="/3024.avif"
                                    alt=""
                                    width={40}
                                    height={40}
                                    className={styles.userImage}
                                /> */}
                                Nandini 
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>Pending</span>
                        </td>
                        <td>05.04.2024</td>
                        <td>32000</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                {/* <Image
                                    src="/noavatar.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                    className={styles.userImage}
                                /> */}
                                
                                radha
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.done}`}>Done</span>
                        </td>
                        <td>24.03.2024</td>
                        <td>59200</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                {/* <Image
                                    src="/noavatar.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                    className={styles.userImage}
                                /> */}
                                Prajwal
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.cancelled}`}>Cancelled</span>
                        </td>
                        <td>04.03.2024</td>
                        <td>53800</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                {/* <Image
                                    src="/noavatar.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                    className={styles.userImage}
                                /> */}
                                Aastha
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>Pending</span>
                        </td>
                        <td>01.02.2024</td>
                        <td>19200</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Transactions;
