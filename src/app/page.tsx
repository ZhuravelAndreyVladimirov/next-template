import { PrimaryBtn, SecondaryBtn } from "@/ui";
import { Button, Group } from "@mantine/core";

export default function Home() {
  return (
    <Group py={10} justify="center">
      <PrimaryBtn variant="light">Primary button</PrimaryBtn>
      <SecondaryBtn>Secondary btn</SecondaryBtn>
    </Group>
  );
}
