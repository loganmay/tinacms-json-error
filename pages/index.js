import Link from "next/link";
import { useJsonForm } from "next-tinacms-json";

export default function Home() {
  const myJsonFile = {
    fileRelativePath: "my-file.json",
    data: {
      hello: "world",
    },
  };
  const [, form] = useJsonForm(myJsonFile);
  return (
    <ul>
      <li>
        <Link href='/b' as='/a'>
          <a>a</a>
        </Link>
      </li>
      <li>
        <Link href='/a' as='/b'>
          <a>b</a>
        </Link>
      </li>
    </ul>
  );
}
