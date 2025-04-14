"use client";

import { Dropzone } from "@/components/Dropzone/Dropzone";
import { QRCode, QRRef } from "@/components/QRCode/QRCode";
import {
  Button,
  CloseButton,
  ColorInput,
  Flex,
  Text,
  TextInput,
  useMantineTheme,
} from "@mantine/core";
import { FileWithPath } from "@mantine/dropzone";
import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";

export default function Home() {
  const [url, setURL] = useState("");
  const qrcodeRef = useRef<QRRef>(null);
  const [qrColor, setQRColor] = useState("#000000");
  const [file, setFilePath] = useState<FileWithPath | null>(null);
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const theme = useMantineTheme();

  const onChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setURL(event.currentTarget.value);

    qrcodeRef.current?.generateQRCode(event.currentTarget.value);
  };

  const cleanURL = () => {
    qrcodeRef.current?.generateQRCode("");
    setURL("");
  };

  const onChangeFile = (files: FileWithPath[]) => {
    setFilePath(files[0]);
  };

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexGrow: 1,
        justifyContent: "center",
        minHeight: "100vh",

        padding: 20,
      }}
    >
      <Flex direction={"row"} flex={1} gap={10} maw={800}>
        <Flex
          align={"center"}
          direction={"column"}
          flex={1}
          gap={20}
          justify={"space-between"}
        >
          <Flex flex={1}>
            <div style={{ height: 240, width: 240 }}>
              <QRCode
                backgroundColor={backgroundColor}
                icon={file}
                qrColor={qrColor}
                ref={qrcodeRef}
                url={url}
              />
            </div>
          </Flex>

          <Flex direction={"column"} flex={1} gap={20}>
            <TextInput
              description="Ссылка на сайт"
              onChange={onChangeText}
              placeholder="https://qr.korotkovs.ru"
              radius={"lg"}
              rightSection={<CloseButton onClick={cleanURL} />}
              size="lg"
              value={url}
            />

            {/* <ColorPicker format="rgba" value={value} onChange={onChange} /> */}

            <ColorInput
              description={"Цвет точек"}
              onChange={setQRColor}
              radius={"lg"}
              size="lg"
              value={qrColor}
            />
            <ColorInput
              description={"Цвет фона"}
              onChange={setBackgroundColor}
              radius={"lg"}
              size="lg"
              value={backgroundColor}
            />

            <Dropzone onDrop={onChangeFile} />

            <Flex direction={"column"}>
              <Text
                c={"gray"}
                fz={"md"}
                mb={5}
                mr={0}
                style={{ color: theme.colors.gray[6] }}
              >
                Скачать QR в формате
              </Text>

              <Flex gap={20} justify={"space-between"}>
                <Button
                  fullWidth
                  onClick={() =>
                    qrcodeRef?.current?.downloadQRCode({
                      extension: "png",
                      name: "qr",
                    })
                  }
                  radius={"lg"}
                  size="lg"
                >
                  .png
                </Button>

                <Button
                  fullWidth
                  onClick={() =>
                    qrcodeRef?.current?.downloadQRCode({
                      extension: "jpeg",
                      name: "qr",
                    })
                  }
                  radius={"lg"}
                  size="lg"
                >
                  .jpeg
                </Button>

                <Button
                  fullWidth
                  onClick={() =>
                    qrcodeRef?.current?.downloadQRCode({
                      extension: "svg",
                      name: "qr",
                    })
                  }
                  radius={"lg"}
                  size="lg"
                >
                  .svg
                </Button>
              </Flex>
            </Flex>
          </Flex>
          <Flex align={"flex-end"} flex={1} style={{ bottom: 20 }}>
            <a href={"https://korotkovs.com"} target="_blank">
              <Image
                alt={"korotkovs studio"}
                height={42 / 1.5}
                src={"/images/korotkovs.png"}
                width={185.5 / 1.5}
              />
            </a>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}
