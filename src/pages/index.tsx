import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Paper, Title, Center, Group, ActionIcon, Image } from '@mantine/core'
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";

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
        <Center p="sm">
          <Title order={1} size={75}>Coming Soon...</Title>
        </Center>
        <Paper mt="sm" p="lg" radius="lg" shadow="lg">
          <Image src="https://i.imgur.com/JzLgrRM.gif" alt="Stockpile x Rug Roulette Chip" width={350} height={350} />
          <Group
            spacing="xs"
            position="center"
            noWrap
            sx={{
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <ActionIcon component="a" href="https://github.com/StockpileProtocol" target="_blank" size="xl" variant="default" radius="xl">
              <FaGithub size={24} color="gray" />
            </ActionIcon>
            <ActionIcon component="a" href="https://twitter.com/0xgoonie" target="_blank" size="xl" variant="default" radius="xl">
              <FaTwitter size={24} color="gray" />
            </ActionIcon>
            <ActionIcon component="a" href="https://discord.gg/mCN2gj2vgz" target="_blank" size="xl" variant="default" radius="xl">
              <FaDiscord size={24} color="gray" />
            </ActionIcon>
          </Group>
        </Paper>
      </main>
    </>
  )
}
