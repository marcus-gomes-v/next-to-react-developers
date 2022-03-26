import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
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
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
      </section>
    </Layout>
  )
}
