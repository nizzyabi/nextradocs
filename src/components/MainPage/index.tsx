import Link from "@docusaurus/Link";
import { QrCode, Bug, Ampersands, CodeXml, GitBranch } from "lucide-react";

import "./index.module.css";

export default function MainPage(): JSX.Element {
  return (
    <section className="w-full flex-1 pt-12 md:pt-24 lg:pt-32 overflow-hidden">
      <div className="flex flex-col items-center space-y-10 xl:space-y-16">
        <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16 max-w-6xl">
          <div className="flex flex-col items-start gap-4">
            <h2 className="m-0">Welcome to the Nizzy Starter Docs!</h2>
            <span className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              This docs contain a series of guides with examples for libraries
              and tools I use on all my projects. New content will be
              continuously added, so feel free to suggest guides or
              improvements!
            </span>
            <div className="space-x-4">
              <Link
                href="/docs/intro"
                className="inline-flex text-white hover:text-white hover:no-underline h-9 items-center justify-center rounded-md bg-primary hover:bg-primary-dark px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Read Docs
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto w-full  flex-grow relative text-white opacity-5">
          <div className="w-full absolute top-0 left-0 h-full bg-gradient-to-b from-background z-10 pointer-events-none"></div>
          <QrCode className="absolute top-12 md:top-1/4 left-1/2 -translate-x-1/2 w-72 lg:w-96 h-auto hover:text-primary transition" />
          <Bug className="absolute top-12 right-12 md:w-48 lg:w-52 h-auto hidden xmd:block rotate-12 hover:text-primary transition" />
          <Ampersands className="absolute top-12 left-12 md:w-56 lg:w-60 h-auto hidden xmd:block -rotate-12 hover:text-primary transition" />
          <CodeXml className="absolute bottom-8 translate-y-1/2 md:right-40 lg:right-56 md:w-24 lg:w-32 h-auto hidden xmd:block hover:text-primary transition" />
          <GitBranch className="absolute bottom-8 translate-y-1/2 md:left-40 lg:left-56 md:w-24 lg:w-32 h-auto hidden xmd:block hover:text-primary transition" />
          <CodeXml className="absolute bottom-1/4 translate-y-1/2 right-12 md:right-20 lg:right-56 w-24 h-auto hidden sm:block xmd:hidden hover:text-primary transition" />
          <GitBranch className="absolute bottom-1/4 translate-y-1/2 left-12 md:left-20 lg:left-56 w-24 h-auto hidden sm:block xmd:hidden hover:text-primary transition" />
        </div>
      </div>
    </section>
  );
}
