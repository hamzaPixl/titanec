import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import manifest from '../../public/manifest.json'
import injected from '../injected.json'
import doctors from '../doctors.json'
import services from '../services.json'
import sitemap from '../sitemap.json'
import { useTranslate } from '../hooks/useTranslate'

const defaultMeta = {
  type: 'website',
  robots: 'follow, index',
}

export default function SEO() {
  const { t } = useTranslate()
  const router = useRouter()

  const pageInfo = injected.pages.find((page) => page.link === router.route)
  const route = router.route.replace(/^\/|\/$/g, '') || 'home'
  const sitemapInfo = sitemap[route] || sitemap[route.split('/')[0] + '/:id'] || {}

  const themeColor = injected.manifest.themeColor
  const name = injected.manifest.projectShortName
  const author = injected.author.url
  const url = injected.manifest.url

  let dynamicName = ''

  if (route.includes('doctors')) {
    dynamicName = doctors.find((doctor) => doctor.id === router.query.slug)?.title
  } else if (route.includes('services')) {
    const service = services.find((service) => service.id === router.query.slug)?.title
    dynamicName = t(service)
  }

  const replaceTemplate = (template) => template.replace('{name}', dynamicName || '')

  const image = sitemapInfo.image || pageInfo?.image || '/gallery3.png'
  const metaKeywords = t(sitemapInfo.keywords).split(', ')
  const meta = [{ name: 'keywords', content: metaKeywords.join(', ') }]

  const title =
    sitemapInfo && sitemapInfo.title ? t(replaceTemplate(t(sitemapInfo.title))) : injected.title

  const description =
    sitemapInfo && sitemapInfo.description
      ? t(replaceTemplate(t(sitemapInfo.description)))
      : injected.description

  const metaData = [
    {
      name: 'google-site-verification',
      content: injected.gVerification,
    },
    {
      property: `og:url`,
      content: `${url}${router.asPath}`,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      property: `og:site_name`,
      content: name,
    },
    {
      property: `og:image`,
      name: 'image',
      content: image,
    },
    {
      name: `twitter:card`,
      content: `summary_large_image`,
    },
    {
      name: `twitter:image`,
      content: image,
    },
    {
      name: `twitter:site`,
      content: `${url}${router.asPath}`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
    {
      name: `theme-color`,
      content: themeColor,
    },
    {
      name: 'robots',
      content: defaultMeta.robots,
    },
    {
      name: 'description',
      content: description,
    },
  ].concat(meta)

  const favicons = manifest.icons.concat([
    {
      rel: 'manifest',
      src: '/manifest.json',
    },
    {
      rel: 'icon',
      src: '/favicon.ico',
    },
  ])

  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content, property }, i) => (
        <meta key={i} property={property} name={name} content={content} />
      ))}
      {favicons.map((linkProps) => (
        <link
          key={linkProps.src}
          rel={linkProps.rel}
          sizes={linkProps.sizes}
          href={linkProps.src}
        />
      ))}
      <link rel='canonical' href={`${url}${router.asPath}`} />
      <link rel='alternate' href={`${url}${router.asPath}`} hrefLang='x-default' />
      <link rel='alternate' href={`${url}${router.asPath}`} hrefLang={injected.defaultLocale} />
      {injected.locales.map((item, index) => (
        <link key={index} rel='alternate' href={`${url}${router.asPath}/${item}`} hrefLang={item} />
      ))}
    </Head>
  )
}
