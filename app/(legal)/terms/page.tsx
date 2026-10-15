import type { Metadata } from "next"

import {
  LegalCallout,
  LegalList,
  LegalSection,
} from "@/components/legal-section"

export const metadata: Metadata = {
  title: "Terms of Service — Crew",
  description:
    "Crew is a personal project provided as-is, with no warranties and no guarantees. These are the terms for using it.",
}

export default function Page() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">Terms of Service</h1>
        <p className="text-sm text-muted-foreground">
          Last updated 15 October 2026
        </p>
      </div>

      <LegalCallout>
        <p>
          <strong>The short version.</strong> Crew is a personal side project
          built by one person. It is provided{" "}
          <strong>as-is, with no warranties and no guarantees</strong> — no
          uptime, no support, no promise your data survives. It may break,
          change, or disappear at any time. Paying is optional and buys you no
          guarantee.
        </p>
        <p>
          Please don&apos;t rely on Crew for anything important, and don&apos;t
          use it for anything you&apos;d need a real company to stand behind.
        </p>
      </LegalCallout>

      <LegalSection title="1. What Crew is">
        <p>
          Crew is an experimental app for creating AI bots that chat with you
          and run tasks in remote sandboxes. It is built and run by{" "}
          <strong>Utkarsh Singh</strong> as an individual. There is no company
          behind it, no team, and no legal entity.
        </p>
        <p>
          It is a project I work on because I want to, not a commercial service.
          If it turns out to work well, I may grow it into something more
          serious — and at that point I&apos;ll take on real obligations and
          rewrite these terms to say so. Right now I am not taking on those
          obligations.
        </p>
      </LegalSection>

      <LegalSection title="2. Accepting these terms">
        <p>
          By creating an account or using Crew, you agree to these terms and to
          the <a href="/privacy">Privacy Policy</a>. If you don&apos;t agree
          with them, please don&apos;t use Crew.
        </p>
      </LegalSection>

      <LegalSection title="3. Who can use it">
        <p>
          You need to be 18 or older. By using Crew you confirm that you are.
        </p>
      </LegalSection>

      <LegalSection title="4. Your account">
        <p>
          Accounts are handled by Clerk. Keep your sign-in secure, and
          understand that anything done through your account is treated as done
          by you. Tell me if you think someone else has access to it.
        </p>
      </LegalSection>

      <LegalSection title="5. Acceptable use">
        <p>Don&apos;t use Crew to:</p>
        <LegalList>
          <li>do anything illegal, or anything that harms other people;</li>
          <li>
            generate or distribute malware, spam, phishing, harassment, or
            sexual content involving minors;
          </li>
          <li>
            abuse the sandboxes — no crypto mining, no scanning or attacking
            other systems, no proxying traffic, no using them as free compute
            for unrelated workloads;
          </li>
          <li>
            attack, overload, probe, or reverse-engineer Crew or the services it
            runs on, or try to get at other users&apos; data;
          </li>
          <li>
            resell Crew, or run it as infrastructure behind your own product;
          </li>
          <li>
            violate the terms of any of the third-party services Crew is built
            on.
          </li>
        </LegalList>
        <p>
          I may suspend or remove any account that does these things, without
          notice.
        </p>
      </LegalSection>

      <LegalSection title="6. AI output and what bots do">
        <p>
          <strong>Model output can be wrong.</strong> Bots make things up, get
          facts backwards, and write broken code with total confidence. Check
          anything that matters before you act on it. Don&apos;t treat
          Crew&apos;s output as legal, medical, financial, or professional
          advice.
        </p>
        <p>
          <strong>Bots take real actions.</strong> They run commands, write
          files, install things, and use a desktop inside a sandbox. They do
          that based on what you tell them to do. You are responsible for the
          instructions you give, for the credentials or data you hand a bot, and
          for whatever your bots then go and do. If you give a bot access to
          something, assume it may act on it.
        </p>
        <p>
          Sandboxes are shared infrastructure provided by a third party.
          Don&apos;t put production credentials or sensitive data into them.
        </p>
      </LegalSection>

      <LegalSection title="7. Your content">
        <p>
          Your chats, bots, and files are yours. You keep ownership of them. You
          give me only the narrow permission needed to run Crew for you — to
          store your content, send it to a model provider to generate replies,
          run it in a sandbox, and display it back to you. That permission ends
          when you delete the content or your account.
        </p>
        <p>
          You&apos;re responsible for having the right to use whatever you put
          into Crew.
        </p>
      </LegalSection>

      <LegalSection title="8. Paying is optional">
        <p>
          Crew has a pricing page, and you can pay if you want to support the
          project or use a larger plan. <strong>Paying is not required</strong>{" "}
          and it is not what makes this a service you can depend on.
        </p>
        <LegalList>
          <li>
            Checkout and subscriptions are handled entirely by Clerk and its
            payment processor, under their terms. Crew never sees your card
            details.
          </li>
          <li>
            Paying does <strong>not</strong> create any guarantee, service
            level, uptime commitment, support commitment, or entitlement to any
            particular feature.
          </li>
          <li>
            Plans, prices, and limits may change, and may be withdrawn entirely.
          </li>
          <li>
            You can cancel whenever you like. If Crew shuts down or a plan goes
            away, I&apos;ll do what&apos;s reasonable about anything you&apos;ve
            already paid, but nothing more than that is promised here.
          </li>
        </LegalList>
        <p>
          Because this is a personal project and not a commercial service,
          please treat any payment as optional support rather than the purchase
          of a guaranteed product.
        </p>
      </LegalSection>

      <LegalSection title="9. No warranties">
        <p>
          Crew is provided{" "}
          <strong>&quot;as is&quot; and &quot;as available&quot;</strong>, with
          no warranties of any kind, express or implied, including any warranty
          of merchantability, fitness for a particular purpose, accuracy, or
          non-infringement.
        </p>
        <p>Specifically, and without hedging: I do not promise that</p>
        <LegalList>
          <li>Crew will be available, or available at any particular time;</li>
          <li>it will work correctly, or work at all;</li>
          <li>your data will be kept, backed up, or recoverable;</li>
          <li>
            bugs will be fixed, or that you&apos;ll get a reply to support
            requests;
          </li>
          <li>
            features will keep existing, or that the project will keep existing.
          </li>
        </LegalList>
        <p>
          I may change, break, restrict, or shut down Crew at any time, for any
          reason, without notice.
        </p>
      </LegalSection>

      <LegalSection title="10. Limitation of liability">
        <p>
          To the fullest extent the law allows, I am not liable for any damages
          arising out of your use of Crew — including lost data, lost profits,
          lost time, business interruption, or anything a bot did or failed to
          do, whether direct, indirect, incidental, special, or consequential,
          and even if I was told such damages were possible.
        </p>
        <p>
          If liability can&apos;t be excluded entirely, it is limited to the
          greater of the amount you actually paid me in the three months before
          the claim, or USD 10.
        </p>
        <p>
          You use Crew at your own risk. That is the deal: it&apos;s free or
          nearly free, built by one person in their own time, and you get it on
          those terms.
        </p>
      </LegalSection>

      <LegalSection title="11. If your use causes a problem">
        <p>
          If someone brings a claim against me because of how you used Crew —
          what you put into it, what you had a bot do, or your breaking these
          terms — you agree to cover the resulting costs.
        </p>
      </LegalSection>

      <LegalSection title="12. Suspension and ending your account">
        <p>
          You can stop using Crew and delete your account at any time. I can
          suspend or delete an account at my discretion, including for abuse or
          when it&apos;s putting the service at risk. If Crew shuts down, your
          data goes with it, so keep your own copies of anything you care about.
        </p>
      </LegalSection>

      <LegalSection title="13. Third-party services">
        <p>
          Crew runs on top of Clerk, Neon, Daytona, Trigger.dev, Railway, and
          one or more language model providers. Their terms apply to your use of
          Crew as well, and I&apos;m not responsible for their outages,
          decisions, pricing, or behaviour. The{" "}
          <a href="/privacy">Privacy Policy</a> lists what each one handles.
        </p>
      </LegalSection>

      <LegalSection title="14. Changes to these terms">
        <p>
          I may update these terms, and I&apos;ll move the date at the top when
          I do. Continuing to use Crew after a change means you accept the
          updated terms.
        </p>
      </LegalSection>

      <LegalSection title="15. Contact">
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
