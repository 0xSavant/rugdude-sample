import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Title, Center, Container, Image, Stack, Flex, Group, ActionIcon } from '@mantine/core'

export default function Home() {
  return (
    <>
      <Head>
        <title>rugg'd: an nft experience by rugdude</title>
        <meta name="description" content="web3 is about to get rugg'd." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <img
          className={styles.logoImg}
          src="./neonmain.gif"
          alt="RugDude Logo"
          width="20%"
          height="20%"
        />
        <Group
          spacing="sm"
          position="center"
          noWrap
          sx={{
            marginTop: 5,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <ActionIcon
            component="a"
            href="https://twitter.com/rugdudenft"
            size={75}
            variant="transparent"
            sx={{
              "@media (max-width: 400px)": {
                blockSize: 25,
              },
            }}
          >
            <Image src="./twitterneon.gif" />
          </ActionIcon>
          <ActionIcon
            component="a"
            href="https://discord.gg/TbP7rhhvRd"
            size={75}
            variant="transparent"
            sx={{
              "@media (max-width: 400px)": {
                blockSize: 25,
              },
            }}
          >
            <Image src="./discordneon.gif" />
          </ActionIcon>
        </Group>
      </main>
    </>
  )
}
