import { Stack, Text } from "@chakra-ui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chakra",
  description: "Подключение простое",
};

export default function Chakra() {
  return (
    <Stack>
      <Text fontSize="10" color={"red"} lineHeight={"100%"} fontWeight={"100"}>
        Hello, world!!!
      </Text>
      <Text
        fontSize="15px"
        color={"red"}
        lineHeight={"110%"}
        fontWeight={"200"}
      >
        Hello, world!!!
      </Text>
      <Text
        fontSize="20px"
        color={"red"}
        lineHeight={"120%"}
        fontWeight={"300"}
      >
        Hello, world!!!
      </Text>
      <Text
        fontSize="25px"
        color={"red"}
        lineHeight={"140%"}
        fontWeight={"400"}
      >
        Hello, world!!!
      </Text>
      <Text
        fontSize="30px"
        color={"red"}
        lineHeight={"150%"}
        fontWeight={"500"}
      >
        Hello, world!!!
      </Text>
      <Text
        fontSize="40px"
        color={"red"}
        lineHeight={"160%"}
        fontWeight={"600"}
      >
        Hello, world!!!
      </Text>
      <Text
        fontSize="45px"
        color={"red"}
        lineHeight={"145%"}
        fontWeight={"700"}
      >
        Hello, world!!!
      </Text>
      <Text
        fontSize="50px"
        color={"red"}
        lineHeight={"150%"}
        fontWeight={"800"}
      >
        Hello, world!!!
      </Text>
      <Text
        fontSize="55px"
        color={"red"}
        lineHeight={"revert"}
        fontWeight={"900"}
      >
        Hello, world!!!
      </Text>
      <Text fontSize="60px" color={"red"} lineHeight={"normal"}>
        Hello, world!!!
      </Text>
    </Stack>
  );
}
