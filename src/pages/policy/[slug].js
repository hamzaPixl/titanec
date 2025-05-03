import React from 'react'
import Layout from '../../components/layout'
import Newsletter from '../../components/newsletter'
import { getAllMarkdown } from '../../lib/markdown'
import Link from 'next/link'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

export default function PolicyDetail({ content }) {
  return (
    <Layout>
      <div className='flex flex-col gap-10 justify-between items-center w-full'>
        <div className='text-center text-light-900 max-w-3xl flex flex-col gap-5'>
          <MDXRemote {...content} />
        </div>
        <Link href={'/'} className='text-4xl'>
          Titanec
        </Link>
      </div>
      <Newsletter />
    </Layout>
  )
}

export async function getStaticProps(context) {
  const { params, locale } = context
  const allPosts = getAllMarkdown(locale)
  const { content } = allPosts.find((item) => item.slug === params.slug)
  const mdxSource = await serialize(content)

  return {
    props: {
      content: mdxSource,
    },
  }
}

export async function getStaticPaths() {
  const locales = ['en', 'fr'] // Add your supported locales here
  const paths = []

  locales.forEach((locale) => {
    getAllMarkdown(locale).forEach((post) => {
      paths.push({
        params: {
          slug: post.slug,
        },
        locale,
      })
    })
  })

  return {
    paths,
    fallback: false,
  }
}
