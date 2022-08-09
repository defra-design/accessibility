---
title: Accessibility acceptance criteria
summary: Using acceptance criteria can help us to consider the conditions that our new services must meet in order to be usable with assistive technologies.
author: ["Defra accessibility team"]
version: "1.0"
publishedDate: 2022-02-21
status: draft
tags:
  - checkingAccessibility
  - resource
---

Ensuring a service can be used by people using assistive technology should be a key consideration for every sprint. Accessibility acceptance criteria ensures that we consider how software should work with assistive technology and that service delivery teams consider accessibility throughout development, not just at the end.

Using accessibility acceptance criteria should lead to a smoother development period - as you discover and fix problems throughout development, not just at the end. It should also mean that as an organisation we are developing software that is accessible to as many people as possible.

Using the latest version of the GOV.UK Design System ensures a lot of things are baked in, but sometimes there are different patterns and components especially with internal and case management system.

## Write clear, specific accessibility acceptance criteria

In short, when writing acceptance criteria, it should:

* Be relevant to the way that people with disabilities would use a service
* Be specific to use cases
* Describe the outcome and intended use
* Provide a clear way to be tested, resulting in a pass or fail

More information can be found within the [Improve accessibility with accessibility acceptance criteria - Inside GOV.UK article](https://insidegovuk.blog.gov.uk/2018/01/24/improving-accessibility-with-accessibility-acceptance-criteria/).

## General examples

The following examples are relevant across all pages of your service.

* Given that I use a narrow screen (1280 pixels wide), when viewing the service at 400% zoom, then the content should still be legible and it should only scroll vertically.
* Given that I only use a keyboard, when navigating through the page, then I should be able to interact with the interactive elements and the order should be logical.
* Given that I use voice control software, when navigating through the site, then I should be able to interact with all interactive elements.
* Given that I use assistive technology, when using the site, then there should be no parsing errors that would cause problems for my assistive technology.
* Given that I am visually impaired, when using the service, then I should be able to easily identify links and they should not rely on colour alone to convey that they are links.
* Given that I use a screen reader, when dynamic content appears, then the content should be announced.
* Given that I use a screen reader, when interacting with something causes a change of context, then I should be aware in advance of the change.
* Given that I use a screen reader, when non-text content (images, graphs) is used, then there should be a text alternative serving the equivalent purpose.
* Given that I am visually impaired, when viewing the service, the text content should meet the colour contrast ratio of 4.5:1 and UI components should meet the colour contrast ratio of 3:1 against adjacent colours.
* Given that I use a Windows high contrast mode, when viewing the service with high contrast mode on, the text content should meet the colour contrast ratio of 4.5:1 and UI components should meet the colour contrast ratio of 3:1 against adjacent colours.
* Given that I change the display of text to make it easier to read, when increasing the line-height, word-spacing and the letter spacing used, then the service should still be legible and its functionality should still be usable.
* Given that I use a screen reader, when the screen reader is announcing content, then any information presented visually should be announced and content should not use visual styles such as italics or justified text to convey information alone.
* Given that I use a screen reader, when interacting with links, then I should be able to understand the context of the link and where I will be redirected to from the link text and it should not be just a URL (e.g. www.gov.uk/guidance/)
* Given that I use a screen reader, when navigating using the headings on the page, then the headings should be used correctly and follow a hierarchy without skipping a level.

## Specific component examples

The following examples may be relevant to some pages across your service, depending on the content present.

* Given that I use a screen reader, when encountering tables, then the tables should not be used as a structure for visually laying out content, they should only be used for providing tabular data.
* Given that I use voice control software, when completing a form using my assistive technology, then all of the input fields should be interactive using only my voice control software and inputs should be correctly associated with their labels.
* Given that I have a cognitive disability, when reading through complex content or layouts containing lots of information, then I need more time to read and comprehend information and will need to extend any timeouts.
* Given that I have a hearing impairment, when viewing a video, then captions, or a transcript should be provided in an easy to access format.

## Content writing examples

The following, concise examples, should be used for all content present within your service.

* Use plain English
* Explain unusual words and jargon
* Present the most important information at the start
* Structure content logically, using headings, bullets and short sentences
* Consistently use formatting (for example H1s, H2s)
* Provide each page with a unique, descriptive h1 that matches the page title
* Write content in a task focused way
* Use a default text size that is easy to read
* Write unique and descriptive headings, links and button text
* Explain to the user as to how to fix errors with error messages
* Inform the user as to the errors present on a page with a summary of errors above the h1 and move focus to it

## References and further reading

* [Acceptance criteria and accessibility by Bogan Cerovac](https://cerovac.com/a11y/2020/10/acceptance-criteria-and-accessibility/)
* [Accessibility Acceptance Criteria for the Alpha Gov Accessible Autocomplete component](https://github.com/alphagov/accessible-autocomplete/blob/main/accessibility-criteria.md)
* [How to write accessibility acceptance criteria by BBC](https://bbc.github.io/accessibility-news-and-you/guides/accessibility-acceptance-criteria.html)
* [Improving accessibility with accessibility acceptance criteria](https://insidegovuk.blog.gov.uk/2018/01/24/improving-accessibility-with-accessibility-acceptance-criteria/)
* [Unsorted collection of accessibility acceptance criteria by the A11Y dev workshop](https://alphagov.github.io/a11y-dev-workshop/criteria)
* [Using ARIA, Custom Control Accessible Development Checklist by the W3C](https://w3c.github.io/using-aria/#ariachecklist)
* [Web Components punch list by The Paciello Group](https://developer.paciellogroup.com/blog/2014/09/web-components-punch-list/)
