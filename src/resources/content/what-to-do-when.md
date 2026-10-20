---
title: What to do when
summary: What you need to do when to ensure your project, service, whatever meets the required accessibility standards.
author: ["Defra accessibility team"]
version: "1.0"
publishedDate: 2026-10-20
status: draft
tags:
  - checkingAccessibility
  - resource
---

## Overview

Everything Defra Group builds or buys must meet Accessibility Standards, here are the steps you need to take at different points to ensure your project, service, whatever meets the required Accessibility Standards when following the [GDS Lifcycle](#GDS-lifecycle), [Defra Stage Gates](#defra-stage-gates), or [something different](#something-different).

<h2 id="GDS-lifecycle">GDS Lifecycle</h2>

### Discovery

Here you're exploring the problem space and setting up for success.

This must be accessible – it's the law, and the right thing to do.

Read these

* [Understanding accessibility requirements for public sector bodies](https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps)
* [Service Standard point 5: Make sure everyone can use the service](https://www.gov.uk/service-manual/service-standard/point-5-make-sure-everyone-can-use-the-service)
* [Estimate how many people using your website might be disabled](https://how-many.herokuapp.com/)

#### Discovery Assessment

At Assessment you're likely to be asked like these, so prepare to answer them

* Who are your users?
* What are their needs?
* How did you involve users with access needs?
* How will you recruit and involve them throughout the development?
* Is there an Equality Impact Assessment (EqIA) in place?
* How will non-digital parts of the service be inclusive?
* Have you allocated time and budget for Accessibility testing, audits, and fixes?

Recruiting users with access needs can be hard – especially if the old thing was bad, rather than seeking out disabled participants you could ask everyone what changes or adjustments they make so their computer is more usable for them. They may tell you they have to make the font bigger (low vision), or use a dark or contrast theme (different kind of low vision), or they use a different keyboard to make it easier to type (motor control). Anyone who does use Assistive Technology is likely to tell you!

If you still can't find anyone, you may need to use Proxy users.

We can't give a fixed value for budget, it depends on scope and complexity of your work.

Ensure time for Accessibility is included at every stage, including testing as you work, plus external checks + Audits. The rest of this page should give you a better idea of what is required.

### Alpha

At alpha you're testing options with hypotheses.

Make sure you communicate accessibly - Messages you send about the work to your new/old/potential users/stakeholders must be accessible too.

Make sure your designs and prototypes are accessible.

It's possible to perform technical testing at this stage, but there isn't much value in worrying about specific technical implementations - your Alpha code should be thrown away.

This is a great time to get feedback on the general usability of your designs - especially from people who are neurodiverse.

#### Alpha Assessment

You're likely to be asked questions like these

* How did you involve people with access needs?
* How will you involve people with access needs?
* What accessibility testing did you do?
* Is your content accessible? - is the stuff going into the thing accessible, inclusive, easy to read, etc.
* Are you commuinicating in an accessible way? - are your emails to people accessible? Are the documents you submit to service assessment accessible?
* What is the plan for accessibility testing in Beta?

* Content – is the stuff going into the thing accessible, inclusive, easy to read, etc.
* Communicating – are your emails to people accessible? Are the documents you submit to service assessment accessible?

### Private Beta

In Beta you're Building and refining options

* You should have a limited number of users who know they are testing something
  * They know how to contact you with issues
  * You know how to tell them about issues

You must be performing your own testing, automated testing has limitations but is still important (especially for identifying regressions) and you should be fixing issues as you find them.

The Accessibility Team's [Expert Accessibility Review](/accessibility/resources/content/how-to-get-accessibility-audit-defra/) is good at this stage, as is involving QA+Test.

You can write the 1st version of your [Accessibility Statement](/accessibility/resources/content/how-to-write-accessibility-statement/) now, based on these tests.


### Public Beta

Keep testing!

At this stage you will potentially have many users who won't consider themselves as testers and will expect things to work.

You should be confident everything is accessible before you go public and you MUST have the Statement in place – this is how people will find out about known issues and how to tell you about new ones they encounter.

Don't perform a UAT (User Acceptence Testing) unless you're sure it's going to work – pointless asking if the new cycle paths goes where they need it to if it's not wide enough for their bike.

Now is a good time for a full Audit - The Accessibility Team can [arrange a full 3rd party audit](/accessibility/resources/content/how-to-get-accessibility-audit-defra/).

The Accessibility Statement is a living document, ensure it's up to date with your latest testing and fixes.

#### Beta Assessment

You're likely to be asked questions like these at Beta Assessment

* How did you recruit users with access needs?
* How did you test?
* Show us the Audit
* Did you fix all the issues?
* What have you changed to improve accessibility?
* Show us the Accessibility Statement

### Live

In Live you're continuously improving, usually there isn't much to do at this stage - unless stuff changes!

* Maintain the Accessibility Statement
* Keep up with standards (WCAG 3.0)
* Do it all again for any new features
* Keep improving, keep it Accessible

### Decommissioning

It's important that the end of a service is accessible too!

* Ensure you commiunicate what is happening to everyone in an Accessible way
* Ensure the need your service served is still served - especially for your edge cases
* Share your "accessibility learnings" with any new team replacing your service so they can provide continunity to your users

<h2 id="defra-stage-gates">Defra Stage Gates</h2>

It's basically the same as the GDS Lifecycle, but sliced differently - this list is just the key points from [Defra's accessibility standards when building or buying software (Defra Sharepoint)](https://defra.sharepoint.com/:u:/r/sites/def-ddts-portfoliohub/SitePages/Accessibility.aspx?d=w0c97ff20139c48d691a6ad8d14d91700&csf=1&web=1&e=7BSRIE)


* Gate 0 - Strategic Assessment
  * Read the guidance
  * Log a risk
* Gate 1 - Business Justification
  * Read the guidance
  * Log a risk
  * Contact accessibility@defra.gov.uk
  * Ensure everyone knows Accessibility is essential
  * Investigate accessibility as part of user research
* Gate 2 - Delivery Strategy
  * Accessibility requirements are included in the tender requirements or project user needs (Accessibility team can help you with requirements and reviewing what suppliers say)
  * Budget for Accessibility, both time and money
* Gate 3
  * include accessibility in all aspects of the design
  * confirm the chosen supplier, platform and chosen build method will meet the accessibility requirements
  * Include accessibility in any contract
  * A written plan exists about how you will test and provide evidence of accessibility
* Gate 4
  * Have a written audit or test report to confirm that the service conforms to WCAG 2.2 AA including working with the appropriate assistive technology
  * Have a URL for a compliant accessibility statement
* Gate 5
  * Confirm there are no outstanding defects
  * Have a URL for a compliant accessibility statement

<h2 id="something-different">Something Different?</h2>

If you're using a different lifecycle (maybe waterfall or you're an "incubator") whatever you're building or buying still needs to be accessible.

Talk to the Accessibility Team – we're here to help.

Maybe you've only just found out about this "accessibility" thing? "too late" is better than never, talk to us!

A delay now is better than having to fix something in live, a judicial review, MPs asking questions, ECHR getting involved, etc.