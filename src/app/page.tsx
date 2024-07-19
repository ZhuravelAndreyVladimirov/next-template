import { CustomLink } from "@/ui";
import { Button, Flex, Group, Text, Title } from "@mantine/core";

export default function Home() {
  return (
    <Flex gap={10} direction={"column"} justify="center" align={"center"}>
      <Title variant="black" order={1}>
        Hello template
      </Title>
      <Text w={800} variant="black">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores id
        expedita laborum tempora vel totam doloribus eius nulla quas debitis!
        Repellendus porro consectetur optio magnam deleniti corrupti illo fugit
        atque!
      </Text>
      <Group w={"100%"} py={{ base: 10, desktop: 20 }} justify="center">
        <Button variant="light">Primary button</Button>
        <Button variant="white" sm>
          Secondary btn
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
    </Flex>
  );
}
