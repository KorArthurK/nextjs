import Link from "next/link";
import Counter from "../components/counter";

export default function Home() {
  return (
    <>
      <h1>home</h1>
      <h2>
        <Link href="/">
          <a>go to main page</a>
        </Link>
        <Counter />                    
      </h2>
    </>
  )
}