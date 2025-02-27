import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GtagScript, GA_TRACKING_ID } from '../analytics'
import injected from '../injected.json'
import Script from 'next/script'

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang={injected.defaultLocale}>
        <Head>
          <Script
            href='https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css'
            rel='stylesheet'
            strategy='afterInteractive'
          />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin={'true'} />
          <link
            href='https://fonts.googleapis.com/css2?family=Onest:wght@100..900&display=swap'
            rel='stylesheet'
          />
        </Head>
        {GA_TRACKING_ID && <GtagScript />}
        <body>
          <Main />
          <NextScript />
          <Script
            async
            strategy='afterInteractive'
            src='https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js'
          />
        </body>
      </Html>
    )
  }
}
