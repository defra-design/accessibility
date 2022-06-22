---
title: Accessibility testing tools for managed laptops
summary: "When testing software on a managed device, you may be unable to download automated tools or browser extensions. In this case, you can use bookmarklets to help you test for accessibility conformance."
author: ["Defra accessibility team"]
version: "3.0"
publishedDate: 2022-02-21
tags:
  - buildingNewServices
  # - resource
---

Automated tools that can be used for testing websites on managed devices, where you are unable to install additional tools or browser plug-ins.

## General tools that will spot a range of issues

[HTML CodeSniffer Accessibility Auditor Bookmarklet](http://squizlabs.github.io/HTML_CodeSniffer/) checks against several Web Content Accessibility Guidelines (WCAG) 2.1

[WAVE browser bookmarklet](https://wave.webaim.org/help#bookmarklet) is a bookmarklet version of their plugin. It sends the page to the WAVE servers so don't use this with sensitive content or data.

Lighthouse (within Google Chrome's development tools) will identify a range of common problems including:

* alternative text for images
* form fields  missing associated labels
* whether native HTML5 interactive elements, such as links, have a name
* whether the language of the page has been set

[W3C Validator](https://validator.w3.org/) can be used to validate pages and may find a number of issues. Beware - not all invalid code will cause accessibility problems.

### Limitations of automated tests

Automated tests are not comprehensive and do not provide you with a complete view of the accessibility of a page, so manual tests should always be completed alongside this.

## Specific tools for checking details

### Image alternative text

[Paul J Adam images bookmarklet](https://pauljadam.com/bookmarklets/images.html)

Lighthouse (within Google Chrome's development tools) can identify whether images have alternative text.

The tools provided will just check for content within the alt attribute, but non-text content still requires manual checking to ensure that the alternative text serves an equivalent purpose.

Relevant WCAG SC 1.1.1: Non-text Content

It may also be possible that images pass this success criterion without using an `alt` attribute if the content is one of the [exemptions described in the 1.1.1 Non-text Content success criterion](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html), or if one of the [sufficient techniques for 1.1.1 Non-text Content are met](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html#sufficient).

### Form markup

[Forms bookmarklet](https://accessibility-bookmarklets.org/install.html) can be used to identify the way that form fields are marked up and the roles used.

Relevant WCAG SC 1.3.1: Info and Relationships

### Landmarks

[Landmarks bookmarklet](https://accessibility-bookmarklets.org/install.html) can be used to identify the semantic roles of each landmark used within the page.

Relevant WCAG SC 1.3.1: Info and Relationships


### Reading order

[Reading order bookmarklet](https://adrianroselli.com/2019/04/reading-order-bookmarklet.html) can be used to determine the reading order of content on a page in order to understand if the sequence affects the meaning of content.

Relevant WCAG SC 1.3.2: Meaningful Sequence

### Device Orientation

Browser developer tools can be used to enable the responsive design mode, which you can use to switch the orientation.

Relevant WCAG SC 1.3.4: Orientation

### Colour contrast

[Contrast analysis widget](https://ada.is/contrast-widget/) can be used to identify elements on the page with low colour contrast.

Relevant WCAG SC 1.4.3: Contrast (Minimum)

### Text spacing

[Text spacing bookmarklet](https://cdpn.io/stevef/debug/YLMqbo) implements the line spacing, word spacing and letter spacing styling required for testing for this success criteria.

Relevant WCAG SC 1.4.12: Text spacing

### Focus order

[Focus interactive controls bookmarklet](https://adrianroselli.com/2015/01/css-bookmarklets-for-testing-and-fixing.html#FocusInteractives) will navigate through the page, replicating hitting the tab/shift key to move through the content.

Relevant WCAG SC 2.4.3: Focus Order

### 2.4.6: Headings and labels bookmarklets

[Accessibility HTML5 Outliner](https://hinderlingvolkart.github.io/h123/) can be used to quickly provide you with the headings and the hierarchy used on a page.

### Language of the page

Lighthouse (within Google Chrome's development tools) can identify whether the language of the page has been set.

The [W3C Validator](https://validator.w3.org/) can identify whether the language of the page has been set.

Relevant WCAG SC 3.1.1: Language of the page

### Code Parsing

The [W3C Validator](https://validator.w3.org/) should be used to check for parsing errors, focussing on those that are relevant to the Web Content Accessibility Guidelines' success criteria, as these errors may lead to parsing errors or assistive technology to crash.

Relevant WCAG SC 4.1.1: Parsing

### Check interactive elements for names

Lighthouse (within Google Chrome's development tools) can identify whether native HTML5 interactive elements, such as links, have a name.

Relevant WCAG SC 4.1.2: Name, role, value

## Other bookmarklets

[JavaScript Bookmarklets for Accessibility Testing](https://www.pauljadam.com/bookmarklets.html)

[Accessibility Bookmarklets - Highlight accessibility features of web pages](https://accessibility-bookmarklets.org)
