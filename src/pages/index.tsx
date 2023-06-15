import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Title, Center, Container, Image, Stack, Flex, Group, ActionIcon } from '@mantine/core'

export default function Home() {
  return (
    <>
      <Head>
        <title>rugg'd: an experience by rugdude</title>
        <meta name="description" content="web3 is about to get rugg'd." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <Center>
          <Stack align="center">
            <Image src="./logo.gif" alt="RugDude Logo" />
            <Title
              order={1}
              size={52}
              color="green"
              sx={{
                fontFamily: "Consolas"
              }}
            >
              rugg'd
            </Title>
            <Title
              order={2}
              size={32}
              align="center"
              color="green"
              sx={{
                fontFamily: "Consolas",
                "@media (max-width: 400px)": {
                  alignSelf: "center",
                  fontSize: 24,
                },
              }}
            >
              web3 is about to get rugg'd.
            </Title>
          </Stack>
        </Center>
        <Group
          spacing="sm"
          position="center"
          noWrap
          sx={{
            marginTop: 15,
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
            <Image src="./twitter.jpg" />
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
            <Image src="./discord.jpg" />
          </ActionIcon>
        </Group>
      </main>
    </>
  )
}
