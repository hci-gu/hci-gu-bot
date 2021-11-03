import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import Keyboard from '../components/Keyboard'
import Trackpad from '../components/Trackpad'

const Container = styled.div`
  margin: 100px auto;
  width: 70%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>HCI-GU-BOT</title>
        <meta name="description" content="Control the bot" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Keyboard />
        <Trackpad />
      </Container>
    </>
  )
}
