import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Title, Center, Container, Image, Stack, Flex, Group, ActionIcon } from '@mantine/core'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rug Roulette: Coming Soon</title>
        <meta name="description" content="Rug Roulette: Coming Soon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <Center>
          <Stack align="center">
            <Image src="./logo.gif" alt="RugDude Logo" />
            <Title order={1} size={52} color="green" sx={{ fontFamily: "Consolas" }}>rugg'd</Title>
            <Title order={2} color="green" sx={{ fontFamily: "Consolas" }}>an nft experience by rugdude.</Title>
          </Stack>
        </Center>
        <Group
          spacing="sm"
          position="center"
          noWrap
          sx={{
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <ActionIcon component="a" href="https://twitter.com/0xgoonie" size={75} variant="transparent">
            <Image src="./twitter.jpg" />
          </ActionIcon>
          <ActionIcon component="a" size={75} variant="transparent">
            <Image src="./discord.jpg" />
          </ActionIcon>
        </Group>
      </main>
    </>
  )
}
