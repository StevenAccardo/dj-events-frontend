import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Layout.module.css';          

export default function Layout({title, keywords, description, children}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description}/>
                <meta name='keywords' content={keywords}  />
            </Head>
            <Header />
            <div className={styles.container}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    title: 'DJ Events | Find the hottest parties!',
    description: 'Find the latest musical events.',
    keywords: 'music, concerts, edm, raves'
}
