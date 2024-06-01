import { UiText } from "@/ui/UiText/UiText";

export default function Home() {
  return (
    <>
      <UiText
        fz={30}
        fw="400"
        lh={"200%"}
        ff="--font-roboto-regular"
        color="red"
      >
        Hello world!
      </UiText>
    </>
  );
}
