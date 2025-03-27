import React from "react";

export default function Home() {
  return (
    <div className="mx-auto max-w-2xl space-y-6 px-8 py-20">
      <h1 className="text-center text-2xl font-bold">
        NextJs 15 Starter with ShadCN, TailwindCSS, Prettier Plugin for
        TailwindCSS, and JavaScript.
      </h1>

      <h2 className="text-xl font-bold">Why did I choose these?</h2>

      <ol className="list-decimal space-y-4">
        <li>
          ShadCN: An amazing component library:{" "}
          <a
            href="https://ui.shadcn.com"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 underline"
          >
            {" "}
            https://ui.shadcn.com
          </a>
        </li>
        <li>
          Prettier Plugin for TailwindCSS sorts classes according to an order
          agreed upon at Tailwind Labs:{" "}
          <a
            href="https://github.com/tailwindlabs/prettier-plugin-tailwindcss"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 underline"
          >
            https://github.com/tailwindlabs/prettier-plugin-tailwindcss
          </a>
        </li>
        <li>JavaScript, because I don&apos;t know TypeScript.</li>
        <li>
          The default font is set to Geist Sans in{" "}
          <code className="rounded bg-neutral-800 px-1 py-0.5 text-sm">
            globals.css
          </code>{" "}
          - the current default font in NextJs.
        </li>
      </ol>

      <div>
        <p>
          This example uses{" "}
          <code className="rounded bg-neutral-800 px-1 py-0.5 text-sm">
            pnpm
          </code>{" "}
          as the package manager. If you are using a different package manager,
          first delete the{" "}
          <code className="rounded bg-neutral-800 px-1 py-0.5 text-sm">
            pnpm-lock.yaml
          </code>{" "}
          file before installing{" "}
          <code className="rounded bg-neutral-800 px-1 py-0.5 text-sm">
            node_modules
          </code>
          , otherwise it will cause a conflict in your project.
        </p>

        <p className="mt-8">
          <strong>UPDATE:</strong> I added{" "}
          <code className="rounded bg-neutral-800 px-1 py-0.5 text-sm">
            "next/babel"
          </code>{" "}
          in the{" "}
          <code className="rounded bg-neutral-800 px-1 py-0.5 text-sm">
            .eslintrc.json
          </code>{" "}
          file because I was getting a weird error in all the files saying that
          it could not find the module.
        </p>
      </div>

      <small className="mt-8 block text-center">
        <a
          href="https://youtube.com/tsbsankara"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 underline"
        >
          Find me here
        </a>
      </small>
    </div>
  );
}
