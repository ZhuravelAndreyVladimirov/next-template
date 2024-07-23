import { ThemeToggle } from "@/components";
import { Bears } from "@/components/bearsStoreExample";
import { CustomLink } from "@/ui";
import { Button, Flex, Group, Text, Title } from "@mantine/core";

export default function Home() {
  return (
    <Flex align={"center"} direction={"column"} gap={10} justify="center">
      <Flex pos={"fixed"} right={10} top={10}>
        <ThemeToggle />
      </Flex>
      <Title order={1} variant="black">
        Hello template
      </Title>
      <Text variant="black" w={800}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores id
        expedita laborum tempora vel totam doloribus eius nulla quas debitis!
        Repellendus porro consectetur optio magnam deleniti corrupti illo fugit
        atque!
      </Text>
      <Group justify="center" py={{ base: 10, desktop: 20 }} w={"100%"}>
        <Button variant="light">Primary button</Button>
        <Button sm={true} variant="white">
          sm btn
        </Button>
        <CustomLink
          link={{
            href: "https://tabler.io/docs/getting-started/download",
            target: "_blank",
          }}
        >
          styles Link
        </CustomLink>
      </Group>
      <Bears />
    </Flex>
  );
}
