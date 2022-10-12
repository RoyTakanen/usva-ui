import styles from "@/styles/Home.module.scss"
import Header from "./Header"

export default function TermsCondensed() {
    return <div className={styles.termscondensed}>
        <Header
            title="Summary of Usva's terms and policies"
            description={`
                A quick overview of your privacy and rights with Usva. 
                Here you can find the most notable parts of both privacy policy and terms of service.
            `}
        />

        <div className={styles.content}>
            <div className={styles.terms}>
                <h2 className={styles.title}>Terms of Service</h2>
                <ul>
                    <li>Uploads including any form of pornographic content is strictly prohibited.</li>
                    <li>Uploads including any illegal documents, including copyrighted content is prohibited.</li>
                    <li>
                        Uploads including personal information should be always encrypted when possible,
                        to prevent possible breaches from leaking them.
                    </li>
                </ul>
                <p className={styles.tosnotice}>
                    In case prohibited content is uploaded, the uploader will be banned from uploading for the next 30 days
                    and files the user has uploaded will be deleted without further notice.
                </p>
            </div>
            <div className={styles.terms}>
                <h2 className={styles.title}>Privacy Policy</h2>
                <p className={styles.desc}>
                    Usva is not meant to be another service with distorted privacy policies, nor
                    want it to be disrespectful to user's privacy. In nutshell,
                    we save IP addresses of file uploaders as hashed strings to make temporary banning 
                    of guilty uploaders possible.
                    All personal information is strictly processed either in the browser or at the latest in the 
                    server.
                </p>
            </div>
        </div>
    </div>
}