---
title: Checklist of common accessibility errors found in new services
summary: This guidance applies mainly to new digital services built using the GDS Design System. It’s not an overall accessibility checklist - it just highlights common issues to check for.
author: ["Martin Glancy"]
version: "1.0"
publishedDate: 2022-02-16
tags:
  - buildingNewServices
  - resource
---

## Contents

* [Design system code and patterns are correct](#design-system-code-and-patterns-are-correct)
* [HTML should validate](#html-should-validate)
* [Page titles should align with the main page heading](#page-titles-should-align-with-the-main-page-heading)
* [Page titles should follow the GOV standard](#page-titles-should-follow-the-gov-standard)
* [Error page titles should start with ‘Error:’](#error-page-titles-should-start-with-error)
* [Form inputs are linked to their labels](#form-inputs-are-linked-to-their-labels)
* [Groups of inputs use fieldsets and legends](#groups-of-inputs-use-fieldsets-and-legends)
* [Links in phase banner and footer make sense](#links-in-phase-banner-and-footer-make-sense)
  * [Links should make sense out of context](#links-should-make-sense-out-of-context)
  * [Links that open new tabs should state that](#links-that-open-new-tabs-should-state-that)
* [Provide autocomplete for commonly-entered information](#provide-autocomplete-for-commonly-entered-information)
* [Conditional reveals should be simple questions](#conditional-reveals-should-be-simple-questions)
* [Help or hint text is linked to the question label](#help-or-hint-text-is-linked-to-the-question-label)
* [Check answers change links are not ambiguous](#check-answers-change-links-are-not-ambiguous)
* [Visually hidden text does not prevent voice control from working](#visually-hidden-text-does-not-prevent-voice-control-from-working)
* [Feedback form is accessible](#feedback-form-is-accessible)
* [Issues with the design system that cannot be fixed](#issues-with-the-design-system-that-cannot-be-fixed)
  * [Invalid aria-expanded error](#invalid-aria-expanded-error)
  * [Heading 1 JAWS bug](#heading-1-jaws-bug)
* [Accessibility statement issues](#accessibility-statement-issues)
  * [The statement matches the current GDS template](#the-statement-matches-the-current-gds-template)
  * [The ‘what you can do section’ is correct for your site](#the-what-you-can-do-section-is-correct-for-your-site)
  * [Non-conformances have a fix date](#non-conformances-have-a-fix-date)
  * [You claim disproportionate burden without doing an assessment](#you-claim-disproportionate-burden-without-doing-an-assessment)

<h2 id="design-system-code-and-patterns-are-correct">Design system code and patterns are correct</h2>

Check that you are using design system code and patterns correctly.

[Design System components](https://design-system.service.gov.uk/components/)

<h2 id="html-should-validate">HTML should validate</h2>

It sounds simple, but this is a simple check that is worth doing. Ideally you’ll have this as part of your automated code lint, but if not use the HTML validator or browser developer tools.

<h2 id="page-titles-should-align-with-the-main-page-heading">Page titles should align with the main page heading</h2>

It’s not uncommon for page titles to be different to the main page H1 heading. This is an accessibility issue.

Check that all page titles are the same as the H1 unless there is a very good reason.

If the `<h1>` is “What is the name of the business?” then the `<title>` should also start with “What is the name of the business?”.

See also [Page titles should follow the GOV standard](#page-titles-should-follow-the-gov-standard).

<h2 id="page-titles-should-follow-the-gov-standard">Page titles should follow the GOV standard</h2>

The format for the page `<title>` should be:

```
{Page h1 heading text} - {Name of service} - GOV.UK
```

<h2 id="error-page-titles-should-start-with-error">Error page titles should start with ‘Error:’</h2>

If you are displaying an error on the page, The format for the page `<title>` should be:

```
Error: {Page h1 heading text} - {Name of service} - GOV.UK
```

See [Help users to recover from validation errors](https://design-system.service.gov.uk/patterns/validation/)

<h2 id="form-inputs-are-linked-to-their-labels">Form inputs are linked to their labels</h2>

The `for` attribute of the label should be the same as the `id` of the input or textarea. See [Text input on the Design System](https://design-system.service.gov.uk/components/text-input/) for an example.

Check also that you don’t have a duplicate `id` present. This can happen if you copy and paste elements. You can check for this easily by validating the page HTML.

<h2 id="groups-of-inputs-use-fieldsets-and-legends">Groups of inputs use fieldsets and legends</h2>

Radio buttons, groups of checkboxes, date inputs and groups of related inputs (for example an address) should be surrounded by a `<fieldset>` and have a `<legend>`.

<h2 id="links-in-phase-banner-and-footer-make-sense">Links in phase banner and footer make sense</h2>

<h3 id="links-should-make-sense-out-of-context">Links should make sense out of context</h3>

Services quite often just link the text ‘feedback’ in the phase banner. If that link is read out in a list of links, it may not be clear.

Feedback link suggested code:

```
<span class="govuk-phase-banner__text">
This is a new service.  
<a class="govuk-link" 
href="FORM-URL" 
target="_blank" 
rel="noopener noreferrer">
Give feedback on the service (opens new tab)
</a> 
to help improve it.
</span>
```

<h3 id="links-that-open-new-tabs-should-state-that">Links that open new tabs should state that</h3>

This issue is sometimes found throughout the service but we often see this in the phase banner and footer. Links should either not open a new window but if they do they should have “(opens new tab)” at the end of and as part of the link.

<h2 id="provide-autocomplete-for-commonly-entered-information">Provide autocomplete for commonly-entered information</h2>

Use the autocomplete attribute on text inputs so browsers can autofill the information on a user’s behalf if they’ve entered it previously.

See [Use the autocomplete attribute in the Design System](https://design-system.service.gov.uk/components/text-input/#use-the-autocomplete-attribute).

<h2 id="conditional-reveals-should-be-simple-questions">Conditional reveals should be simple questions</h2>

Conditional reveals do not automatically fail WCAG 2.1 provided that you follow these guidelines:

* Keep it simple. If the related question is complicated or has more than one part, show it on the next page in the process instead.
* Do not conditionally reveal questions to inline radios, such as ‘yes’ and ‘no’ options placed next to each other.
* Conditionally reveal questions only - do not show or hide anything that is not a question.

See [Conditionally revealing a related question](https://design-system.service.gov.uk/components/radios/#conditionally-revealing-a-related-question).

<h2 id="help-or-hint-text-is-linked-to-the-question-label">Help or hint text is linked to the question label</h2>

Where your question has help or hint text you should help screen reader users to find it by linking it to the `<label>` using `aria-describedby`.

For example:

<img src="{{ '/resources/images/checklist-of-common-accessibility-errors-found-in-new-services/hint-text-example.jpg' | url }}" alt="A form field with the label: What is the name of the event?. Underneath the label is hint-text that reads: The name you'll use on promotional material. Underneath this text is the input field.">

The relevant HTML is:

```
<h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l"
    for="event-name">
        What is the name of the event?
    </label>
</h1>
<div id="event-name-hint" class="govuk-hint">
    The name you’ll use on promotional material.
</div>
<input class="govuk-input" id="event-name" name="event-name" type="text" aria-describedby="event-name-hint">
```

There are different techniques for other input types - see the [Design System components](https://design-system.service.gov.uk/components/) for more information.

<h3 id="complex-help-text">Complex help text</h3>

Do not use complex paragraphs, links or expanding `<details>` in the help text.

While screen readers will read out the link text when describing the field, they will not tell users the text is a link.

If you use a `<details>` element in your help text our testing shows that when used in an `aria-describedby`, the hidden content in `<details>` will not be read until it has been expanded.

See [asking complex questions without using hint text](https://design-system.service.gov.uk/patterns/question-pages/#asking-complex-questions-without-using-hint-text).

<h2 id="check-answers-change-links-are-not-ambiguous">Check answers change links are not ambiguous</h2>

The [Check answers pattern](https://design-system.service.gov.uk/patterns/check-answers/) uses “Change” links to allow the users to change an answer. For example:

<img src="{{ '/resources/images/checklist-of-common-accessibility-errors-found-in-new-services/check-answers-example.jpg' | url }}" alt="The GOV.UK answers pattern presenting the following information: Name, Sarah Phillips. Following this information is a link labelled: Change.">

Screen reader users need to know what each link does so make sure that visually hidden text is being used to include extra text. This text should match the text at the start of the row so that it is consistent for voice control users.

<h2 id="visually-hidden-text-does-not-prevent-voice-control-from-working">Visually hidden text does not prevent voice control from working</h2>

If however, you use a link and include visually hidden text that is hard to guess, voice control users may find it hard to activate the link - for example: [Cancel](#) `<hidden>`and return to GOV.UK`</hidden>`

It’s better to include all of the text in the link - for example: [Cancel and return to GOV.UK](#)

<h2 id="feedback-form-is-accessible">Feedback form is accessible</h2>

If you use a feedback form, it’s part of your service and should be accessible. If there are issues, they should be listed in your accessibility statement.

If you use Qualtrics, make sure you use the accessibility team template and follow the guidance for building a more accessible qualtrics form.

Add an email address at the top of your form for anyone who cannot use the form.

<h2 id="issues-with-the-design-system-that-cannot-be-fixed">Issues with the design system that cannot be fixed</h2>

<h3 id="invalid-aria-expanded-error">Invalid aria-expanded error</h3>

This applies where you show an input conditionally based on selecting a radio button. For example:

<img src="{{ '/resources/images/checklist-of-common-accessibility-errors-found-in-new-services/conditional-reveal-example.jpg' | url }}" alt="The GOV.UK radio pattern, with the question: How would you prefer to be contacted? Select one option. The options present are: Email, Phone and Text message. In this example, the Email option is checked, which has revealed a text input labelled: Email address, for the user to enter their contact information.">

Accessibility testing will usually report an error - something like “aria-expanded is not a valid aria attribute”.

This is the current design system code. See [Checkboxes in the Design System](https://design-system.service.gov.uk/components/checkboxes/) and the [GitHub checkboxes note](https://github.com/alphagov/govuk-design-system-backlog/issues/37).

There is no need to list this issue your accessibility statement.

<h3 id="heading-1-jaws-bug">Heading 1 JAWS bug</h3>

If you are using the `h1` as the `legend` inside a `fieldset`, JAWS users will not be able to find the heading. This is a known bug.

You should add the following text to your accessibility statement under ‘How accessible this website is’. There is no need to list it as a non-compliance under ‘Technical information about this website’s accessibility’:

> If you use JAWS screen reader, you will not be able to find some form question headings due to a bug with JAWS. You will still be able to use the service easily but not list the headings on the affected pages.

<h2 id="accessibility-statement-issues">Accessibility statement issues</h2>

<h3 id="the-statement-matches-the-current-gds-template">The statement matches the current GDS template</h3>

[Sample accessibility statement](https://www.gov.uk/government/publications/sample-accessibility-statement/sample-accessibility-statement-for-a-fictional-public-sector-website)

Check that you have not removed or changed the text that is required by the law.

<h3 id="the-what-you-can-do-section-is-correct-for-your-site">The ‘what you can do section’ is correct for your site</h3>

The bullet point list under “that means you should be able to” is not a fixed list. You should ensure that it is correct for your website. For example, the 300% claim in ‘zoom in up to 300% without the text spilling off the screen’ should match what you have tested. If you are claiming close to full compliance, then the figure should be at least 400%.

<h3 id="non-conformances-have-a-fix-date">Non-conformances have a fix date</h3>

For each non-compliance you should say when you plan to fix it.

<h3 id="you-claim-disproportionate-burden-without-doing-an-assessment">You claim disproportionate burden without doing an assessment</h3>

You should not claim a disproportionate burden for a new service.

If you do, this should be for a limited time and not forever.

You should have a written assessment.

You should check this claim with your legal advisors.
