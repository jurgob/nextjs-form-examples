import Image from "next/image";
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

const ExampleCard = ({title, description, href}: {title: string, description: string, href: string}) => (
  <a
  className=""
  href={href}
    >
        <div className="border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex flex-col justify-top hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm p-2 gap-2 w-[200px] h-[100px]" >
        <b>{title}</b>
        <p>{description}</p>
      </div>
    </a>
)

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center gap-4 p-4">
        <p>A list of example of how to use forms in <VercelLogo />.</p>
        <div className="flex flex-row gap-4 items-center">
          <ExampleCard title="Simple Button Only" description="This is the simplest way you can manage a 'form', without using a form tag"  href="/simple_noform" />
          <ExampleCard title="Simple With Form" description="This is the simplest way you can manage a 'form', actually using form tag"  href="/simple_withform" />
          <ExampleCard title="Server Side Only" description="Only server side is involved" href="/server_side_only" />
          <ExampleCard title="WIth Zod" description="use zod for error hanling"  href="/with_zod" />
        </div>
      </main>
    </div>
  );
}
