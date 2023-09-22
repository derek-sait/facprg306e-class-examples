import Link from "next/link";
import MyComp from "./my-test-component";

export default function Home() {
  return (
    <main>
      <h1>Hello World!</h1>
      <MyComp />
      <Link href="aboutme">About Me</Link>
      <Link href="contact">Contact</Link>
    </main>
  )
}
