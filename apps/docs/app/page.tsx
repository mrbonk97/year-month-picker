import { CodeHighlight } from "@/components/code-highlight";
import { Example1 } from "@/components/examples/example-1";
import { Example2 } from "@/components/examples/example-2";
import { Example3 } from "@/components/examples/example-3";
import { Example4 } from "@/components/examples/example-4";
import Link from "next/link";

export default async function Home() {
  return (
    <main>
      <header className="py-12 mx-auto max-w-3xl">
        <hgroup className="mx-auto max-w-5xl">
          <h1 className="text-6xl font-bold">Year Month Picker</h1>
          <p className="mt-2">
            A React library for year and month picker(selector)
          </p>
        </hgroup>
      </header>

      <section className="mt-12 mx-auto max-w-3xl">
        <h4 className="text-2xl font-semibold opacity-80">Example</h4>
        <Example1 />
      </section>

      <section className="mt-12 mx-auto max-w-3xl">
        <h4 className="text-2xl font-semibold opacity-80">Installation</h4>
        <CodeHighlight
          lang="npm"
          className="mt-2 rounded"
          code="npx install year-month-picker"
        />
      </section>

      <section className="mt-12 mx-auto max-w-3xl">
        <h4 className="text-2xl font-semibold opacity-80">Usecase</h4>
        <p>Integrate with headLessUI(shadcn.popover)</p>
        <Example2 />
      </section>

      <section className="mt-12 mx-auto max-w-3xl">
        <h4 className="text-2xl font-semibold opacity-80">3 mode available</h4>
        <Example3 />
      </section>

      <section className="mt-12 mx-auto max-w-3xl">
        <h4 className="text-2xl font-semibold opacity-80">API Reference</h4>
        <table className="mt-2 w-full border-separate border-spacing-0">
          <thead>
            <tr>
              <th className="p-2 text-left rounded-tl-md border bg-secondary">
                Props
              </th>
              <th className="p-2 text-left border-y bg-secondary">Type</th>
              <th className="p-2 text-left rounded-tr-md border bg-secondary">
                Default
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border-l border-b">mode</td>
              <td className="p-2 border-x border-b space-x-2">
                <span className="p-1.5 px-2 text-sm rounded-lg bg-secondary">
                  year-month
                </span>
                <span className="p-1.5 px-2 text-sm rounded-lg bg-secondary">
                  year
                </span>
                <span className="p-1.5 px-2 text-sm rounded-lg bg-secondary">
                  month
                </span>
              </td>
              <td className="p-2 border-r border-b">
                <span className="p-1.5 px-2 text-sm rounded-lg bg-secondary">
                  year-month
                </span>
              </td>
            </tr>
            <tr>
              <td className="p-2 border-l border-b">ym</td>
              <td className="p-2 border-x border-b text-sm">
                {`{year: number | null, month: number | null }`}
              </td>
              <td className="p-2 border-r border-b">-</td>
            </tr>
            <tr>
              <td className="p-2 border-l border-b">onSelect</td>
              <td className="p-2 border-x border-b text-sm whitespace-pre">
                {`({year: number | null, month: number | null }) => void`}
              </td>
              <td className="p-2 border-r border-b">-</td>
            </tr>
            <tr>
              <td className="p-2 border-l border-b">message</td>
              <td className="p-2 border-x border-b">string</td>
              <td className="p-2 border-r border-b">Select date</td>
            </tr>
            <tr>
              <td className="p-2 border-l border-b">container</td>
              <td className="p-2 border-x border-b text-sm">{`React.HTMLAttributes<HTMLDivElement>`}</td>
              <td className="p-2 border-r border-b">-</td>
            </tr>
            <tr>
              <td className="p-2 border-l border-b">header</td>
              <td className="p-2 border-x border-b text-sm">{`React.HTMLAttributes<HTMLDivElement>`}</td>
              <td className="p-2 border-r border-b">-</td>
            </tr>
            <tr>
              <td className="p-2 border-l border-b">yearGrid</td>
              <td className="p-2 border-x border-b text-sm">{`React.HTMLAttributes<HTMLDivElement>`}</td>
              <td className="p-2 border-r border-b">-</td>
            </tr>
            <tr>
              <td className="p-2 border-l border-b">monthGrid</td>
              <td className="p-2 border-x border-b text-sm">{`React.HTMLAttributes<HTMLDivElement>`}</td>
              <td className="p-2 border-r border-b">-</td>
            </tr>
            <tr>
              <td className="p-2 border-l border-b rounded-bl-md">button</td>
              <td className="p-2 border-x border-b text-sm">{`React.HTMLAttributes<HTMLDivElement>`}</td>
              <td className="p-2 border-r border-b rounded-br-md">-</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mt-12 mx-auto max-w-3xl">
        <h4 className="text-2xl font-semibold opacity-80">Customize</h4>
        <p>Fully customizable design with tailwindCSS</p>
        <Example4 />
      </section>

      <section className="p-4 mt-48 h-96 bg-secondary">
        <p className="mt-12 text-sm text-center">
          Built by{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"https://github.com/mrbonk97"}
            className="underline"
          >
            @mrbonk97
          </Link>
          . The source code is available in{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"https://github.com/mrbonk97/year-month-picker"}
            className="underline"
          >
            Github
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
