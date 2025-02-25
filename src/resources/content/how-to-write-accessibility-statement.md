---
title: How to write an accessibility statement
summary: "A step by step guide to writing an accessibility statement."
author: ["Defra accessibility team"]
version: "1.1"
publishedDate: 2024-08-02
status: live
tags:
  - requirementsRules
  - resource
---


## Summary

To write an accessibility statment, you need to:

1. Get an accessibility audit done on your site or service (this guide does not cover that). An accessibility audit is an expert test and report that tells you how accessible the website is and what you need to fix.
2. Convert the audit report to a list of issues in the correct format for a statement.
3. Categorise the issues into 'not in scope', 'non-compliances' (with fix dates) and 'disproportionate burden'. If you use 'disproportionate burden' you must show a costed estimate of the effort required to resolve the specific issues and explain why this would be a disproportionate burden on your department.
3. Add the issues to the [Defra Sample accessibility statement template (docx)](/accessibility/documents/accessibility-statements/accessibility-statement-template-markdown-20220822.docx).
4. Add a short plain language summary of the impact of the issues.
5. Add contact and feedback details for users to report issues and get help.
6. Complete the rest of the template.
7. Publish on the site in HTML and arrange a review date


## Detailed steps you should follow

There's a short [accessibility statement training presentation (pptx)](/accessibility/documents/presentations/defra-accessibility-statement-training-presentation.pptx) that you can read in addition to this guidance. 


### 1. Read the GDS guidance for background information

[Make your website or app accessible and publish an accessibility statement](https://www.gov.uk/guidance/make-your-website-or-app-accessible-and-publish-an-accessibility-statement).


### 2. Gather the documents you will need

These include the:

* Audit report for your site or service. Read about [How to get an accessibility audit in Defra Group](/accessibility/resources/content/how-to-get-accessibility-audit-defra/) or [Getting an accessibility audit in the GDS Service Manual](https://www.gov.uk/service-manual/helping-people-to-use-your-service/getting-an-accessibility-audit).

* [Defra Sample accessibility statement template (docx)](/accessibility/documents/accessibility-statements/accessibility-statement-template-markdown-20220822.docx)

* [Defra list of WCAG wordings (xlsx)](/accessibility/documents/accessibility-statements/wcag-2-1-list-for-statement-writing.xlsx)


### 3. Use the sample template to start your draft statement

Before you start you should check that this is still in line with the [GDS sample template](https://www.gov.uk/government/publications/sample-accessibility-statement).

Our version uses Markdown code as a simple way to mark heading, bullets and links. You will be able to convert this easily to HTML.

Find the template document in step 2. Our template has all the guidance and section references in Word comments.


### 4. Make a full list of all the accessibility issues

You should make this list from the audit report.

If there were no issues found but you did not get the audit done by expert auditors including disabled testers then you should question the result.

If you have a reasonably large number of issues (for example more than 10) it's usually easier to make the list in a spreadsheet. You will not publish this spreadsheet but it's usually a useful format to discuss with your team.


### 5. Add a plain language explanation to each issue

Each issue should have a plain language explanation of the accessibility problem. If you need help to write this you could:

* look at how the audit report describes the issue
* use or modify the sample text from our Defra list of WCAG wordings (in step 2)

Add the explanation to your issues spreadsheet, if you have one, or directly into section 10 of the template.


### 6. Decide how you will address each issue

The regulations place a duty on us to make sites accessible. Whilst the regulations do include limited reasons why an issue should not be fixed, we would expect the default to be that all issues are fixed.

For each issue, the options are:

* Not in scope - a limited set of things that you do not have to fix (read 'Check if you have any 'not in scope' items').
* Non-compliant - a temporary state whilst the issue is being fixed.
* Disproportionate burden - you are claiming that, following a detailed assessment (you will need to present this assessment at Defra Stage Gates or GDS Assessments), the cost, effort and time to fix this is too great compared to the benefit that disabled users and your organisation will get.


### 7. Check if you have any 'not in scope' items

You do not need to fix these types of content because they're exempt from the regulations:

* Unless users need them to use a service, PDFs or other documents published before 23 September 2018, for example a form to apply for the service would not be exempt
* maps - but you'll need to provide essential information in an accessible format, like an address or text description.
* third party content on the website that's under someone else's control if you did not pay for it or develop it yourself - for example, social media 'like' buttons
* pre-recorded audio and video published before 23 September 2020
* live audio and video, however if you record and later publish the audio and video it must meet the requirements.
* heritage collections like scanned manuscripts
* content on intranets or extranets published before 23 September 2019 (unless you make a major revision after that date)
* archived websites if they're not needed for services your organisation provides and they are not updated

Explain in your accessibility statement that you've not made things like this accessible because they are exempt.

These go in section 12 of the template.


### 8. Add the correct WCAG 2.2 reference to each non-compliance

A 'non-compliance' is an accessibility problem that does not conform to one of the WCAG guidelines (called a 'success criterion' in WCAG). For example, the text colour contrast may be too low which fails or "does not conform to" WCAG success criterion 1.4.3 Contrast (Minimum).

In many cases, the testers will have provided this. If not, you can use the reference from our Defra list of WCAG wordings in step 2.

These go in section 11 of the template.


### 9. Decide on a fix date for each non-compliance

For each of these issues, decide when you will fix this by and give a date in the statement. The Defra Accessibility Team advises that this should usually be within 3 months.


### 10. If you are considering claiming disproportionate burden

Defra advises that you should avoid claiming disproportionate burden and certainly never for a new website.

If you are considering claiming disproportionate burden:

* Read the GDS advice [Understanding accessibility requirements for public sector bodies](https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps#things-you-might-not-need-to-fix).
* You must carry out a detailed assessment to decide claiming disproportionate burden is reasonable. Use the [Disproportionate burden assessment template](/accessibility/documents/accessibility-statements/disproportionate-burden-assessment-template-v1-1.docx).
* You will need to get quotes for the costs involved and an estimate of the likely number of users that will be affected.
* You must write down your assessment - keep a copy of the assessment and any quotes as you might be asked to show them to justify your decision.
* You should get sign off on the decision from your legal advisors and the senior responsible officer.
* You should consider the claim temporary and review it every year because the costs involved and impact may change - for example, you may be able to get the fixes done more cheaply if you are doing other redevelopment of the website.

These go in section 12 of the template.


### 11. Write a simple version of the accessibility issues

If there are accessibility issues that users will experience, explain what they are in simple terms, so users with access needs know what to do when they use the site. Base this on the technical issue list but do not simply create a short version of the technical list.

These go in section 4 of the template.


#### How to approach writing your simple version:

1. Tell users what they can do, not what they cannot do. If most common tasks can be completed, say that, but explain any problems they may experience.
2. Consider if any particular group of users will not be able to complete common tasks. If so, say what that is and explain what they should do instead.
3. Aim to explain how the accessibility issues will affect them as they use the site, not just what each technical issue is. Imagine that you are explaining to users what they might find from their point of view.
4. It's OK to leave out some issues, if you know that they are unlikely to be encountered.
5. Combine multiple issues, where users will see them as one thing. We'd expect the simple list to group and summarise the technical list where possible.


#### Examples

<hr>

You will be able to apply for an export certificate but you may have a few problems:

* the keyboard focus or highlight does not show up on some pages so you'll have to take care not to lose your place on the screen
* if you need to zoom over 200% the left menu text will overlap the main part of the screen

<hr>

If you use a screen reader or voice control it will be hard to add company directors to the list when you apply because the wording for the form input will not be read out automatically.

<hr>

You will be able to look up your farming code but if you have poor vision, you may find the search buttons hard to see because the contrast is quite poor.

<hr>

This website will not work with screen readers at all. There are so many problems that we do not recommend that you try. If you email our helpline help@farms.defra.gov.uk, someone will call you back and make it a priority to deal with your application for you.

We are very sorry about this and we are working to fix it.

<hr>


### 12. Write a list of the things that users can do to make the site better for themselves

These go under section 3 of the template.


#### The list suggested by GDS (this list is also in the sample template)

* use browser settings or plugins to change colours, contrast levels and fonts
* use browser settings or other software to zoom in up to [insert correct percentage for your site]% without the text spilling off the screen
* navigate [most of] the website using just a keyboard
* navigate [most of] the website using speech recognition software
* listen to [most of] the website using a screen reader (including the most recent versions of JAWS, NVDA and VoiceOver)

Do not just use these without checking if your site supports them. If you have not tested something (for example the screen reader) do not include it in your statement.


### 13. Agree with the service the contact details for feedback and help

Check that any email addresses are monitored frequently so that requests are not missed and that the people involved know what to do with any requests.

These go in section 5, 6 and 9 of the template.


### 14. Agree who the legal body is that is responsible for the website

This is not the supplier. It will be the legal arms length body or Defra itself. This goes in section 2 of the template.


### 15. Complete the rest of the template

The other sections you'll need to complete are:

* URL or site name - section 1
* Enforcement procedure - sections 7 and 8
* What we're doing to improve accessibility - section 14
* Preparation dates - section 15
* How you tested the site - section 16


### 16. Check the statement against our checklist


> These are the legally-required items - They are all in the sample template so you are mainly checking that you have not accidentally deleted them.

The statement is:

* Easy to find (for example a prominent link on the home page and/or on every web page in a header or footer).
* Can be accessed without logging in.
* Is in an accessible format (for example, HTML not a PDF).
* Uses the current GDS sample template (not required but best practice).
* Includes the correct legal name of the public sector body (not the company that runs the site).
* Has a 'Feedback and contact information' details section.

The statement has a heading 'Compliance status' and under that the correct legal wording to include 'fully compliant / partially compliant / not compliant'.

It has a heading 'Non-accessible content' (no need if status is 'fully compliant') with sub-headings as needed (no need if not applicable) for:

* Non-compliance
* Disproportionate burden
* Not within the scope

The list of non-accessible content should include:

* a non-technical description of how the content is not accessible
* which of the WCAG 2.2 AA success criteria the problem fails on
* when you plan to fix the problem

The simple public list of issues and the technical list are consistent. We would expect the simple list to group and summarise the technical list.

The statement:
* Has the standard 'Enforcement procedure' section.
* States how the assessment was done - for example by self assessment or by third party audit.
* Has 'prepared on' date.
* Has 'last reviewed on' date.

When a statement already exists, the statement has been reviewed at least once a year so is no more than 12 months old.


### 17. Get the statement draft checked by the Defra Accessibility Team

Contact the Defra Accessibility Team by email [accessibility@defra.gov.uk](mailto:accessibility@defra.gov.uk) and include a copy of your draft statement.


### 18. Get sign off from the senior responsible officer

There is not a central sign off in Defra. The Defra Accessibility Team will advise but the public body is responsible for the statement.

If the statement says that the website is partially or not compliant then you should get sign off from the senior responsible officer and advise them of the impact on disabled users and the risk of a legal challenge as the service will not meet the legal standard for accessibility.

If you are claiming disproportionate burden, then we advise that you get sign off from the body's legal advisors as well as the senior responsible officer.


### 19. Make sure that the statement is in HTML and is itself accessible

Our template is written in Markdown and you can convert it to HTML using online services such as [Free Markdown to HTML Converter](https://markdowntohtml.com/). Your developers might know what to do with the Markdown.


### 20. Make sure that the link to the statement is easy to find

A link to your statement should be easy to find on your website homepage, and ideally made available on every web page. It should be prominent, for example in a static header or footer.


### 21. Arrange for the statement to be reviewed and updated regularly

You should review and update your statement each time you update the site. As a minimum you should review it at least once a year.

If you have a list of non-compliances to fix then you will update it as each item is fixed.

If you claim disproportionate burden then you should regard that claim as temporary and review if it still applies regularly.


## How to get help or advice

Contact the Defra Accessibility Team by email [accessibility@defra.gov.uk](mailto:accessibility@defra.gov.uk).
