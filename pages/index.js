import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://www.nextjs.cn/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = {name:'1'}

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: data
  }
}