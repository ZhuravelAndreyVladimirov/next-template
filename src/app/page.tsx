import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start",
};

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Link href={"/chacra"}>chacra</Link>
      <Link href={"/mui"}>mui</Link>
      <Link href={"/mantine"}>mantine</Link>
    </div>
  );
}
