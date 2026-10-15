import type { Metadata } from "next"

import {
  LegalCallout,
  LegalList,
  LegalSection,
} from "@/components/legal-section"

export const metadata: Metadata = {
  title: "Privacy Policy — Crew",
  description:
    "What Crew collects, why, and who processes it. Crew is a personal project run by Utkarsh Singh.",
}

export default function Page() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground">
          Last updated 15 October 2026
        </p>
      </div>

      <LegalCallout>
        <p>
          <strong>The short version.</strong> Crew is a personal side project,
          not a company. I don&apos;t sell your data, I don&apos;t share it for
          advertising, and I don&apos;t use your chats to train models. Your
          data is processed only by the service providers Crew needs in order to
          run, listed below, and only to run Crew for you.
        </p>
        <p>
          Crew is also not an enterprise product. Please don&apos;t put secrets,
          credentials, or anything confidential or regulated into it.
        </p>
      </LegalCallout>

      <LegalSection title="1. Who runs Crew">
        <p>
          Crew is built and operated by <strong>Utkarsh Singh</strong> as an
          individual. There is no company, no team, and no legal entity behind
          it. If you have a question about your data, email{" "}
          <a href="mailto:utkarshdevendrasingh@gmail.com">
            utkarshdevendrasingh@gmail.com
          </a>{" "}
          and you&apos;ll be talking directly to me.
        </p>
        <p>
          This policy covers the Crew web app at this domain. It doesn&apos;t
          cover anything else I build, or any third-party site Crew links to.
        </p>
      </LegalSection>

      <LegalSection title="2. What Crew collects">
        <LegalList>
          <li>
            <strong>Account details.</strong> Sign-in is handled by Clerk. That
            means Crew sees your email address, your display name, and your
            profile image if you have one. Passwords and any social-login
            credentials live with Clerk, never with Crew.
          </li>
          <li>
            <strong>What you create in the app.</strong> Your chats and
            messages, the bots you make and their personalities and memory,
            group chats, and any files or text you send into a conversation.
          </li>
          <li>
            <strong>Bot and sandbox activity.</strong> When a bot runs code or
            uses a desktop, that happens in a remote sandbox. The commands run,
            the files created, and the resulting output are part of your data.
          </li>
          <li>
            <strong>Technical logs.</strong> Ordinary server logs: IP address,
            browser user agent, timestamps, which pages and API routes were hit,
            and errors. These exist so I can tell whether the app is broken.
          </li>
          <li>
            <strong>Payment details — not collected by Crew.</strong> If you
            choose to pay, checkout is handled entirely by Clerk and its payment
            processor. Card numbers never reach Crew&apos;s servers. All Crew
            sees is whether a plan is active.
          </li>
        </LegalList>
        <p>
          There is no advertising network, no analytics tracker, and no
          third-party marketing pixel in the app.
        </p>
      </LegalSection>

      <LegalSection title="3. Why Crew uses it">
        <p>
          To run the app for you, and essentially nothing else. Concretely: to
          sign you in, to save and show your chats and bots, to send your
          messages to a language model so a bot can reply, to run bot tasks in a
          sandbox, to tell whether a paid plan is active, to fix bugs and keep
          the service from falling over, and to prevent abuse.
        </p>
      </LegalSection>

      <LegalSection title="4. Who processes your data">
        <p>
          Crew is a small app standing on top of other people&apos;s
          infrastructure, so being accurate here matters more than sounding
          reassuring. Your data passes through these providers:
        </p>
        <LegalList>
          <li>
            <strong>Clerk</strong> — accounts, authentication, and billing.
          </li>
          <li>
            <strong>Neon (Postgres)</strong> — the database where your chats,
            messages, and bot configuration are stored.
          </li>
          <li>
            <strong>Language model providers, via an LLM gateway</strong> — your
            messages, bot instructions, and relevant chat history are sent to a
            model provider to generate replies. This is the core of how Crew
            works: a bot cannot answer without the provider seeing the
            conversation.
          </li>
          <li>
            <strong>Daytona</strong> — the remote sandboxes and virtual desktops
            where bots execute code, including anything you hand them to work
            on.
          </li>
          <li>
            <strong>Trigger.dev</strong> — runs bot work in the background, so
            task inputs and outputs pass through it.
          </li>
          <li>
            <strong>Railway</strong> — hosting for the app itself and its logs.
          </li>
          <li>
            <strong>DiceBear</strong> — generates bot avatar images from a seed
            value.
          </li>
        </LegalList>
        <p>
          Each of these providers has its own privacy terms and its own
          retention behaviour, which I don&apos;t control. I may add, change, or
          drop a provider as the project changes, and I&apos;ll update this list
          when I do.
        </p>
        <p>
          These providers run in various countries, so your data may be
          processed outside the country you live in.
        </p>
      </LegalSection>

      <LegalSection title="5. What Crew does not do">
        <LegalList>
          <li>I don&apos;t sell your data, and I never will.</li>
          <li>
            I don&apos;t share it with advertisers, data brokers, or anyone for
            marketing.
          </li>
          <li>
            I don&apos;t use your chats, bots, or files to train my own models.
          </li>
          <li>
            I don&apos;t read your chats for fun. I may look at specific data if
            you ask me for help with a bug, or if I have to investigate abuse or
            something that&apos;s breaking the service.
          </li>
          <li>
            I don&apos;t hand anything over to anyone else unless I&apos;m
            legally required to.
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection title="6. How long it's kept, and deletion">
        <p>
          Your chats and bots stay until you delete them or delete your account.
          Logs are short-lived and rotate out on their own. Sandboxes are
          temporary and their contents are not meant to be durable storage.
        </p>
        <p>
          Being straight with you: <strong>this is a personal project.</strong>{" "}
          Data can be lost. I may clear data, reset the database, or shut Crew
          down entirely, possibly without notice. Please don&apos;t keep
          anything in Crew that you&apos;d be upset to lose, and keep your own
          copy of anything that matters.
        </p>
        <p>
          You can delete your account from the account menu, which removes your
          Crew data. Or email me and I&apos;ll delete it for you.
        </p>
      </LegalSection>

      <LegalSection title="7. Security">
        <p>
          Crew runs over HTTPS, keeps authentication with Clerk rather than
          rolling its own, and restricts database access. That said, no
          guarantee is being made here: I&apos;m one person, this is a hobby
          project, and I can&apos;t promise it&apos;s secure against a
          determined attacker. Treat it accordingly.
        </p>
        <p>
          If you find a security problem, please email me before telling anyone
          else — I&apos;d genuinely appreciate it.
        </p>
      </LegalSection>

      <LegalSection title="8. Your choices">
        <p>
          You can see and edit your profile, delete individual chats and bots,
          delete your whole account, or email me to ask what data Crew holds
          about you, to get a copy of it, or to have it removed. I&apos;ll do my
          best to respond within a reasonable time, as one person answering
          email.
        </p>
      </LegalSection>

      <LegalSection title="9. Children">
        <p>
          Crew isn&apos;t intended for anyone under 18, and I don&apos;t
          knowingly collect data from minors. If you believe a minor has an
          account, email me and I&apos;ll remove it.
        </p>
      </LegalSection>

      <LegalSection title="10. Changes to this policy">
        <p>
          I&apos;ll update this page if what Crew does with data changes, and
          I&apos;ll move the date at the top when I do. If Crew ever grows past
          being a personal project, this policy will be rewritten properly and
          you&apos;ll be told before that takes effect.
        </p>
      </LegalSection>

      <LegalSection title="11. Contact">
        <p>
          Utkarsh Singh —{" "}
          <a href="mailto:utkarshdevendrasingh@gmail.com">
            utkarshdevendrasingh@gmail.com
          </a>
        </p>
      </LegalSection>
    </>
  )
}
