import { Box, Typography } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mui",
  description: "Подключение простое чуть сложнее чакры",
};

export default function Mui() {
  return (
    <Box>
      <Typography
        color={"green"}
        fontWeight={"100"}
        fontSize={10}
        lineHeight={"100%"}
      >
        Hello, World!!!
      </Typography>
      <Typography
        color={"green"}
        fontWeight={"100"}
        fontSize={12}
        lineHeight={"100%"}
      >
        Hello, World!!!
      </Typography>
      <Typography
        color={"green"}
        fontWeight={"200"}
        fontSize={15}
        lineHeight={"120%"}
      >
        Hello, World!!!
      </Typography>
      <Typography
        color={"green"}
        fontWeight={"300"}
        fontSize={20}
        lineHeight={"130%"}
      >
        Hello, World!!!
      </Typography>
      <Typography
        color={"green"}
        fontWeight={"300"}
        fontSize={25}
        lineHeight={"135%"}
      >
        Hello, World!!!
      </Typography>
      <Typography
        color={"green"}
        fontWeight={"100"}
        fontSize={30}
        lineHeight={"111%"}
      >
        Hello, World!!!
      </Typography>
      <Typography
        color={"green"}
        fontWeight={"700"}
        fontSize={35}
        lineHeight={"170%"}
      >
        Hello, World!!!
      </Typography>
      <Typography
        color={"green"}
        fontWeight={"800"}
        fontSize={40}
        lineHeight={"105%"}
      >
        Hello, World!!!
      </Typography>
      <Typography
        color={"green"}
        fontWeight={"900"}
        fontSize={45}
        lineHeight={"103%"}
      >
        Hello, World!!!
      </Typography>
      <Typography
        color={"green"}
        fontWeight={"normal"}
        fontSize={50}
        lineHeight={"normal"}
      >
        Hello, World!!!
      </Typography>
    </Box>
  );
}
