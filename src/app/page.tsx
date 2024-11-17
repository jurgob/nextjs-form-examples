import Image from "next/image";
import { Github, ArrowRight } from 'lucide-react';

const VercelLogo = () => (
  <Image
    className="dark:invert inline-block"
    src="/next.svg"
    alt="Next.js logo"
    width={55}
    height={16}
    priority
  />
)

const githubPath = "https://github.com/jurgob/nextjs-form-examples/tree/main/src/app"

const ExampleCard = ({title, description, href, code_href}: {title: string, description: string, href: string, code_href: string}) => (
  <div className="border border-solid border-black/[.08] " >
    <a
    className=""
    href={href}
      >
          <div className="hover:bg-[#f2f2f2] w-[300px] h-[100px] flex flex-col justify-top  text-sm p-2 gap-2" >
          <b>{title}</b>
          <p>{description}</p>
        </div>
      </a>
      <div >
        <a  className="p-2 text-xs hover:bg-[#f2f2f2] inline-block" href={href} ><ArrowRight height={13} width={13} className="inline-block"/>View Example</a> 
        <span className="inline-block"> | </span>
        <a  className="p-2 text-xs hover:bg-[#f2f2f2] inline-block" href={code_href} target="_blank"> <Github height={13} width={13} className="inline-block" /> View Code</a> </div>
    </div>
)

const EXAMPLES = [
  {title: "Simple Button Only", description: "This is the simplest way you can manage a 'form', without using a form tag", href: "/simple_noform", code_href: `${githubPath}/simple_noform`},
  {title: "Simple With Form", description: "This is the simplest way you can manage a 'form', actually using form tag", href: "/simple_withform", code_href: `${githubPath}/simple_withform`},
  {title: "Server Side Only", description: "Only server side is involved", href: "/server_side_only", code_href: `${githubPath}/server_side_only`},
  {title: "WIth Zod", description: "use zod for error hanling", href: "/with_zod", code_href: `${githubPath}/with_zod`},
]


export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center gap-4 p-4">
        <p>A list of example of how to use forms in <VercelLogo />.</p>
        <div className="flex flex-row gap-4 items-center">
            {EXAMPLES.map(({ title, description, href, code_href }, id) => (
            <ExampleCard key={id} title={title} description={description} href={href} code_href={code_href} />
            ))}
        </div>
      </main>
    </div>
  );
}
