import { UiText } from "@/ui/UiText/UiText";

export default function Home() {
  return (
    <>
      <UiText
        aria-atomic
        fz={30}
        fw="400"
        lh={123}
        ff="--font-roboto-regular"
        color="red"
      >
        Hello world!
      </UiText>
    </>
  );
}
