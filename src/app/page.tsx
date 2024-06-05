import { UiText } from "@/ui/UiText/UiText";

export default function Home() {
  return (
    <>
      <UiText
        fz={30}
        fw="500"
        lh={123}
        ff="--font-roboto-regular"
        color="red"
        fs="italic"
        font="revert"
        fv="all-small-caps"
        fv_num="oldstyle-nums"
        text_align="center"
        vertical_align={"text-bottom"}
      >
        Hello world! 1234567
      </UiText>
    </>
  );
}
