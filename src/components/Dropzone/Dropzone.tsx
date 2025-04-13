import { Group, Text } from "@mantine/core";
import {
  DropzoneProps,
  IMAGE_MIME_TYPE,
  Dropzone as MDropzone,
} from "@mantine/dropzone";
import { IconPhoto, IconUpload, IconX } from "@tabler/icons-react";

export function Dropzone(props: Partial<DropzoneProps>) {
  return (
    <MDropzone
      accept={IMAGE_MIME_TYPE}
      maxSize={5 * 1024 ** 2}
      onDrop={(files) => console.log("accepted files", files)}
      onReject={(files) => console.log("rejected files", files)}
      style={{ borderRadius: 20 }}
      {...props}
    >
      <Group gap="xl" justify="center" style={{ pointerEvents: "none" }}>
        <MDropzone.Accept>
          <IconUpload size={52} stroke={1.5} />
        </MDropzone.Accept>
        <MDropzone.Reject>
          <IconX size={52} stroke={1.5} />
        </MDropzone.Reject>
        <MDropzone.Idle>
          <IconPhoto size={52} stroke={1.5} />
        </MDropzone.Idle>

        <div>
          <Text inline size="xl">
            Перенисите картинку или нажмите на область
          </Text>
          <Text inline mt={7} size="sm">
            Вы можете выбрать один файл не более 5мб
          </Text>
        </div>
      </Group>
    </MDropzone>
  );
}
