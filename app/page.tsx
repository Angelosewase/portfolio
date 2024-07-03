import Image from "next/image";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <About />
    </>
  );
}
