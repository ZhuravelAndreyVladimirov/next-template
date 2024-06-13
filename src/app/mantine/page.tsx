import { Metadata } from "next";
import { MantineProvider, Stack, Text } from "@mantine/core";
import "@mantine/core/styles.css";

export const metadata: Metadata = {
  title: "mantine",
  description: "Подключение простое",
};

export default function Mantine() {
  return (
    <MantineProvider>
      <Stack>
        <Text fz="10" c={"blue"} lh={"100%"} fw={"100"}>
          Hello, world!!!
        </Text>
        <Text fz="15px" c={"blue"} lh={"110%"} fw={"200"}>
          Hello, world!!!
        </Text>
        <Text fz="20px" c={"blue"} lh={"120%"} fw={"300"}>
          Hello, world!!!
        </Text>
        <Text fz="25px" c={"blue"} lh={"140%"} fw={"400"}>
          Hello, world!!!
        </Text>
        <Text fz="30px" c={"blue"} lh={"150%"} fw={"500"}>
          Hello, world!!!
        </Text>
        <Text fz="40px" c={"blue"} lh={"160%"} fw={"600"}>
          Hello, world!!!
        </Text>
        <Text fz="45px" c={"blue"} lh={"145%"} fw={"700"}>
          Hello, world!!!
        </Text>
        <Text fz="50px" c={"blue"} lh={"150%"} fw={"800"}>
          Hello, world!!!
        </Text>
        <Text fz="55px" c={"blue"} lh={"revert"} fw={"900"}>
          Hello, world!!!
        </Text>
        <Text fz="60px" c={"blue"} lh={"normal"}>
          Hello, world!!!
        </Text>
      </Stack>
    </MantineProvider>
  );
}
