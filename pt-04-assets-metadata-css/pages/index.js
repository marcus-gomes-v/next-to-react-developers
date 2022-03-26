import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Um curioso fuçador</p>
        <p className="description">
          <a href="https://nextjs.org">Next.js</a>
          {' '}by{' '}
          <a href="https://decriptando.blogspot.com">Decriptando</a>
          {' '}Bora codar simples, bora decriptar o conhecimento. 
        </p>
        <p>
          Navigate to{' '}
          <Link href="/posts/first-post">
            <a>first page!</a>
          </Link>
        </p>
      </section>
    </Layout>
  )
}
