import { CustomLink, PrimaryBtn, SecondaryBtn, Title } from "@/ui";
import { Flex, Group } from "@mantine/core";

export default function Home() {
  return (
    <Flex gap={10} direction={"column"} justify="center" align={"center"}>
      <Title variant="black" order={1}>
        Hello template
      </Title>
      <Group w={"100%"} py={{ base: 10, desktop: 20 }} justify="center">
        <PrimaryBtn variant="light">Primary button</PrimaryBtn>
        <SecondaryBtn>Secondary btn</SecondaryBtn>
        <CustomLink
          link={{
            href: "https://tabler.io/docs/getting-started/download",
            target: "_blank",
          }}
        >
          styles btn Link
        </CustomLink>
      </Group>
    </Flex>
  );
}
