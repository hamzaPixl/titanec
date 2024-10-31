import React from 'react'
import Layout from '../components/layout'
import { ComingSoon } from '../components/comingSoon'
import Container from '../components/container'

export default function Home() {
  return (
    <Layout>
      <Container id='#coming-soon'>
        <ComingSoon />
      </Container>
    </Layout>
  )
}
