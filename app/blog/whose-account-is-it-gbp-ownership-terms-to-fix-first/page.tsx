import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BlogArticle from "@/components/blog/BlogArticle";

const OG_IMAGE =
  "https://www.epicware.ai/assets/blog/whose-account-is-it-gbp-ownership-terms-to-fix-first/hero-key-handover.jpg";

export const metadata: Metadata = {
  title: "GBP Ownership: Whose Account Is It?",
  description: "Learn who should hold the verified owner on your Google Business Profile, how to log manager roles, and the handover terms to sign before you hire.",
  alternates: { canonical: "https://www.epicware.ai/blog/whose-account-is-it-gbp-ownership-terms-to-fix-first" },
  openGraph: {
    images: [{ url: OG_IMAGE, width: 1260, height: 750, alt: "Hands exchanging a set of keys, representing a Google Business Profile ownership handover" }],
    title: "Whose Account Is It? GBP Ownership Terms to Fix First | Epicware",
    description: "Learn who should hold the verified owner on your Google Business Profile, how to log manager roles, and the handover terms to sign before you hire.",
    url: "https://www.epicware.ai/blog/whose-account-is-it-gbp-ownership-terms-to-fix-first",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Whose Account Is It? GBP Ownership Terms to Fix First",
  "description": "Learn who should hold the verified owner on your Google Business Profile, how to log manager roles, and the handover terms to sign before you hire.",
  "datePublished": "2026-11-11",
  "author": { "@type": "Person", "name": "Vignesh", "url": "https://www.epicware.ai" },
  "publisher": { "@type": "Organization", "name": "Epicware Pte. Ltd.", "url": "https://www.epicware.ai" },
  "url": "https://www.epicware.ai/blog/whose-account-is-it-gbp-ownership-terms-to-fix-first"
};

export default function Post() {
  return (
    <BlogArticle
      schema={schema}
      ogImage={OG_IMAGE}
      ogImageWidth={1124}
      ogImageHeight={750}
      badge="GBP OPTIMISATION · OWNERSHIP"
      h1="Whose Account Is It? GBP Ownership Terms to Fix First"
      author="Vignesh"
      authorRole="Founder, Epicware"
      publishDate="November 2026"
      readTime="10 min read"
      intro={
        <>
          <p>Most Google Business Profile emergencies are not ranking problems. They are ownership problems. A suspension that reveals nobody on staff has owner-level access, a profile verified under an agency&apos;s email address, managers added with undocumented roles and no record of who approved them: these are the failures that stop a business cold, and they rarely surface until someone needs to act fast.</p>
          <p>This guide works through how Google distinguishes the primary owner, other owners and managers on a Google Business Profile, the rules that decide how quickly access can change hands, and three fixes to make this week: verified owner placement, role logging, and access handover as a signed deliverable. It also covers what a clean handover actually contains and how to escalate if you are already locked out.</p>
        </>
      }
      body={
        <>
          <figure>
            <Image
              src="/assets/blog/whose-account-is-it-gbp-ownership-terms-to-fix-first/hero-key-handover.jpg"
              alt="Hands exchanging a set of keys, representing a Google Business Profile ownership handover"
              width={1260}
              height={750}
              className="rounded-lg w-full"
              priority
            />
            <figcaption>Photo by Pavel Danilyuk via Pexels</figcaption>
          </figure>

          <div className="not-prose rounded-xl border border-primary/20 bg-primary/5 px-5 py-4 mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">TL;DR</p>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>• Three access levels, one rule: only owners can change access roles.</li>
              <li>• Four Google rules govern how fast access can move: the transfer precondition, the 7-day restriction on new users, the 3-day ownership-request window, and the service-area exception.</li>
              <li>• The business, not the agency, should hold the verified owner seat, ideally on a company-domain account that survives staff turnover.</li>
              <li>• A one-page access register (who, what role, since when, approved by whom) turns "we think so" into something you can actually check.</li>
              <li>• Treat handover and data export as contract line items with deadlines attached, the same way you&apos;d treat any other paid deliverable.</li>
            </ul>
          </div>

          <h2>Most GBP Emergencies Are Ownership Problems, Not Ranking Problems</h2>
          <p>Across the cases we see, one failure shows up again and again: the business never holds the owner seat. Because only owners can change access roles, that single distinction is what turns a routine marketing task into a hostage situation.</p>
          <p>When an agency holds the verified owner, a business is not buying a service. It is renting its own listing. Day-to-day optimisation runs fine; every access decision still requires the agency&apos;s cooperation.</p>
          <p>The fix is unglamorous paperwork decided before hiring, not a rescue attempt during a dispute. A contract, a named owner on a company account, and a written access register cost an hour up front. The same discipline applies to{" "}
            <Link href="/blog/seo-services-for-small-business">
              any SEO engagement
            </Link>{" "}
            you sign.</p>
          <p>This guide covers Google&apos;s actual role rules and transfer restrictions, the clauses to sign before you hire, and the contents of a handover you can enforce. Some of the recommendations below are commercial best practice, not Google requirements, and we flag the difference as it comes up.</p>

          <h2>Google Business Manager Roles: Primary Owner, Owner and Manager</h2>
          <p>Google splits access across three levels: one primary owner, any number of additional owners, and managers. A profile can hold multiple owners, but only one primary owner at any time.</p>
          <p>Owners hold full control. They add or remove users, manage{" "}
            <Link href="/locations/singapore/google-business-profile">
              core business information
            </Link>{" "}
            and can remove the profile entirely. Managers, once called site managers, get &quot;mostly the same access,&quot; with two stated exceptions: they cannot add or remove users, and they cannot remove the profile. Treat Google&apos;s &quot;mostly&quot; as exactly that, not an exhaustive permission list.</p>
          <p>Only owners can change access roles. Transferring primary ownership, Google states, keeps business information such as reviews intact, and it requires at least one other owner or manager already sitting on the profile.</p>
          <p>Access sits with named individuals. Google directs that each user has their own Google Account rather than sharing a password, and Google Groups cannot be added as owners or managers. Shared agency logins are therefore a governance problem, not merely a security one.</p>
          <p>&quot;Business profile manager&quot; is not a single permission level. Before granting access, decide whether the person needs owner rights, manager rights, or nothing at all — and if you&apos;re still searching for a Google My Business account, the product to work in is now called Google Business Profile.</p>

          <h2>The Google Rules That Decide How Fast You Can Leave</h2>
          <p>Knowing the three roles doesn&apos;t help until a transfer clock actually starts ticking. Google sets four timing rules that decide how fast a business can walk away.</p>
          <p><strong>The transfer precondition.</strong> Primary ownership can only move if the profile already has at least one other owner or manager. A sole-user profile must add one first; businesses that never added a second user usually discover this only when a contract ends.</p>
          <p><strong>The 7-day restriction.</strong> A newly added owner or manager must wait 7 days before managing all features. Leave inside that window and Google removes you from the profile; returning means being added again. Short engagements and contractor handovers need to plan around it.</p>
          <p><strong>The 3-day response window.</strong> If another party verified the profile, you can request ownership. The current owner is emailed and has 3 days to respond. Silence may let you claim the profile, and a denial can be appealed.</p>
          <p><strong>The service-area exception.</strong> Businesses without a public address must contact Google support and select &quot;Transfer ownership of listing&quot; instead of using the standard form. Hiding the address removes the self-service route.</p>
          <p>Each of these is a clock, not a courtesy, so don&apos;t count on a delay being waived. Put access in place, including a second owner, through{" "}
            <Link href="/blog/10-gbp-optimisation-tips-every-local-business-needs">
              a GBP setup done right
            </Link>{" "}
            before a deadline exists.</p>

          <h2>Fix One: Keep the Verified Owner on a Company-Controlled Account</h2>
          <figure>
            <Image
              src="/assets/blog/whose-account-is-it-gbp-ownership-terms-to-fix-first/secured-laptop-account.jpg"
              alt="Laptop screen showing a 'Secured' padlock icon, representing a company-controlled Google account"
              width={1260}
              height={750}
              className="rounded-lg w-full"
            />
            <figcaption>Photo by Dan Nelson via Pexels</figcaption>
          </figure>
          <p>None of those clocks help if the business never held the owner seat in the first place. Google defines the roles but publishes no rule requiring the business to hold primary ownership; treat company control as a strong recommendation, not a requirement.</p>
          <p>The primary owner should be a named person inside the business, on a company-domain mailbox the business controls. That mailbox survives staff turnover and isn&apos;t tied to anyone&apos;s personal inbox. Avoid personal Gmail addresses, departing staff accounts, and shared passwords.</p>
          <p>Add a second owner as a documented fallback, since Google requires another owner or manager on the profile before any transfer. Record who it is and where their recovery details live, alongside{" "}
            <Link href="/blog/google-review-policy-explained">
              what qualifies for review removal
            </Link>
            : the reply button is worthless if it sits in someone else&apos;s account.</p>
          <p>Some agencies want to hold ownership to protect their work. Treat that as a commercial risk with a cost. If you accept it, price the exit into the contract, write a defined transfer trigger, and verify the second-owner slot is filled by someone you employ.</p>
          <p>One test settles it: if the password reset lands in someone else&apos;s inbox, they own your reviews, your hours, and your map pin. You don&apos;t.</p>

          <h2>Fix Two: Log Every Manager Role and the Account Behind It</h2>
          <p>One account holds ownership. A much larger group holds day-to-day access, and that larger group is where undocumented rights quietly pile up.</p>
          <p>Keep a one-page access register filed with the contract. For each person, record full name, the exact Google Account email used, role (owner or manager), date added, who approved it, and why the access exists. Leave no field blank.</p>
          <p>Each entry should point to an individual Google Account rather than a shared login. Google&apos;s{" "}
            <a href="https://support.google.com/business/answer/3403100?hl=en" target="_blank" rel="noopener noreferrer">
              guidance on profile owners and managers
            </a>{" "}
            is that every user works through their own account instead of a shared password, so removing one person leaves everyone else&apos;s access untouched. While you have owner rights open, pair the cleanup with an{" "}
            <Link href="/blog/secondary-categories-google-business">
              audit of your Google Business secondary categories
            </Link>.</p>
          <p>A register only protects a business if someone inside it can act on the document. Name no internal owner on that register, and it&apos;s a wish list, not a control.</p>
          <p>Plan for the delay too: a newly added manager cannot use all features for the first 7 days, so anyone needing full capability on launch day should be added a week earlier and listed as a line item in the project plan.</p>
          <p>Review quarterly: remove anyone who no longer needs access, confirm the primary owner is still correct, and check that no agency staff hold owner rights they don&apos;t need. If you&apos;re drafting an internal SOP, verify permission specifics against Google&apos;s live help pages rather than this guide, and never promise a permission level you haven&apos;t confirmed.</p>

          <h2>Fix Three: Make Access and Handover a Signed Deliverable</h2>
          <p>An access register only protects a business if the agency has signed up to it. Move the same controls into the contract as explicit clauses.</p>
          <ul>
            <li><strong>Ownership.</strong> The business retains primary ownership of the profile at all times. The agency is added by the business and works as a manager or additional owner. If an agency insists on holding ownership, the fallback is a fixed transfer trigger, a penalty, and a named second owner inside the business.</li>
            <li><strong>Accounts.</strong> All work happens on business-owned accounts: the Google Business Profile account, analytics, review platforms, and any scheduling or publishing tools. No agency-owned property should hold business data or reviews.</li>
            <li><strong>Handover.</strong> Define the trigger — termination, non-renewal, or a performance exit — and set a fixed number of business days to transfer primary ownership, remove agency users, and deliver an export. Handover is a deliverable, not a favour, so tie payment or final invoicing to completion.</li>
            <li><strong>Data export.</strong> List what gets delivered: review and response history, photo library, post and update archive, questions and answers, category and service settings, business description, and reporting exports. Confirm with your provider what&apos;s technically available before naming items in a contract.</li>
            <li><strong>Cooperation.</strong> Name a contact and a response window for ownership requests, reinstatement work, and Google support escalations, with a stated consequence if the window is missed.</li>
          </ul>
          <p>Google doesn&apos;t regulate agency contracts; these are commercial terms, not platform rules. Pair them with a{" "}
            <Link href="/resources/guides/local-business-playbook-2026">
              2026 local visibility playbook
            </Link>{" "}
            so access governance supports the growth work rather than sitting apart from it.</p>

          <h2>What a Clean Handover Actually Contains</h2>
          <p>When the transfer date arrives, those clauses are only as good as the paper trail behind them. Insist on four records and one timing rule.</p>
          <ol>
            <li><strong>A dated access record.</strong> Primary ownership sits on the company account, the agency is gone from People and access, and a dated screenshot of that screen is filed with the contract. An &quot;all done&quot; email proves nothing.</li>
            <li><strong>The updated access register.</strong> Primary owner, fallback owner, every named manager account, and the accounts that were deleted — each dated.</li>
            <li><strong>The data set</strong> named in the export clause above, actually delivered — including any{" "}
              <Link href="/locations/singapore/review-removal">
                review removal requests
              </Link>{" "}
              filed. Where a review or publishing platform sits between the business and Google, confirm its client workspace sits under the business&apos;s own login, not the agency&apos;s, so the record leaves with you.</li>
            <li><strong>The ownership trail.</strong> Recovery email and phone on the company Google Account, who holds two-factor authentication, and where credentials are stored. This decides whether access can be recovered without another dispute.</li>
          </ol>
          <p>The timing rule: Google&apos;s 7-day restriction on new owners and managers means the transfer should start before the final billing date, not after. Sequence it so the business never depends on the agency&apos;s account for a single day.</p>

          <h2>If You Are Already Locked Out: Ownership Requests and Escalation</h2>
          <p>If a transfer stalls, work the request process in order.</p>
          <ol>
            <li><strong>Diagnose before you submit.</strong> Confirm whether the profile is verified, identify every owner and manager, and record which Google Account each one uses. A request with mismatched details burns the 3-day response window. Note too any{" "}
              <Link href="/resources/guides/bad-review-removal-guide">
                bad reviews you want removed
              </Link>
              : they stay tied to whoever holds owner access.</li>
            <li><strong>Request ownership.</strong> Google notifies the current owner, who has 3 days to respond. Silence may let you claim the profile. Treat that as a possibility, not a plan.</li>
            <li><strong>Appeal a denial.</strong> A rejected request can be appealed. Service-area businesses must contact Google support instead of using the standard form, so identify which path applies before submitting anything.</li>
            <li><strong>Work the contract in parallel.</strong> Check for an access or cooperation clause and use it. A contractual right with a named contact usually moves faster than a platform process you don&apos;t control.</li>
            <li><strong>Be honest about the gaps.</strong> Google&apos;s documentation doesn&apos;t cover who can act during a suspension, or the specifics of data export and recovery. Escalate to Google support and take legal advice where money or continuity is at stake — none of it is a documented guarantee.</li>
          </ol>
          <p>The request process is a fallback for businesses that already lost the argument. The clauses in the previous sections are how you avoid needing it.</p>

          <h2>Put Ownership on Your Side Before the Next Suspension</h2>
          <p>Google defines the roles and the clocks. Who holds the owner seat is a business decision, and it&apos;s the one that decides whether you can ever fire your agency. None of the fixes above require a lawyer or a platform workaround. They require someone inside the business to open the contract and the profile side by side this week, check who holds the owner seat today, and add whatever&apos;s missing before an emergency forces the question.</p>
          <p>Get that right once, review it quarterly, and a suspension, a dispute, or a parting of ways becomes a managed process with a known timeline, not a scramble.</p>
        </>
      }
      ctaHref="/locations/singapore/google-business-profile"
      ctaLabel="See Google Business Profile Management Singapore"
      ctaContext="Epicware's team sets your business up as the verified owner from day one and hands over a documented access register, so there's no hostage situation if you ever want to leave."
      relatedPosts={[
        { title: "Google Business Profile Suspended? Fix It Before You Appeal", href: "/blog/google-business-profile-suspended-fix-it-before-you-appeal" },
        { title: "10 GBP Optimisation Tips Every Local Business Needs", href: "/blog/10-gbp-optimisation-tips-every-local-business-needs" },
        { title: "Secondary Categories for Google Business Profile", href: "/blog/secondary-categories-google-business" },
      ]}
    />
  );
}
