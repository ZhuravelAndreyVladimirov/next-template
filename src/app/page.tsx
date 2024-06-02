import { UiText } from "@/ui/UiText/UiText";

export default function Home() {
  return (
    <>
      <UiText
        aria-atomic
        fz={30}
        fw="500"
        lh={123}
        ff="--font-roboto-regular"
        color="red"
        fs="italic"
      >
        Hello world!
      </UiText>
    </>
  );
}
