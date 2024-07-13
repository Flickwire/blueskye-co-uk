import type { MetaFunction } from "@remix-run/node";
import LabelLink from "../components/LabelLink";

export const meta: MetaFunction = () => {
  return [
    { title: "Skye Brady" },
    { name: "description", content: "Skye Brady's Portfolio" },
  ];
};

export default function Index() {
  return (
    <main className="text-lg bg-white h-full text-brand-5 max-w-4xl mx-auto px-8 py-12">
      <h1 className="text-6xl text-brand-6">Hi, I&rsquo;m Skye!</h1>
      <p>
        Welcome to my site. I build things for the web.
      </p>
      <p>
        You can find me on{' '}
        <LabelLink href="https://github.com/flickwire" title="My Github Account">
          Github
        </LabelLink>
        {' '}and{' '}
        <LabelLink href="https://linkedin.com/in/skyebrady" title="My LinkedIn Profile">
          LinkedIn
        </LabelLink>.
      </p>
      <p>
        If you want to get in touch you can <LabelLink href="mailto:skye@blueskye.co.uk" title="email address">email me</LabelLink>
      </p>
    </main>
  );
}
