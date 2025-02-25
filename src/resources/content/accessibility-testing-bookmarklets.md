---
title: Accessibility testing tools for managed laptops
summary: "When testing software on a managed device, you may be unable to download automated tools or browser extensions. In this case, you can use bookmarklets to help you test for accessibility conformance."
author: ["Defra accessibility team"]
version: "3.1"
publishedDate: 2024-11-28
status: live
tags:
  - checkingAccessibility
  - resource
---

Automated tools that can be used for testing websites on managed devices, where you are unable to install additional tools or browser plug-ins.

**On this page**
* [Browser Extensions available in Defra Group](#defra-extensions)
* [Using the tools](#using-tools)
* [General tools that will spot a range of issues](#general-tools)
* [Specific tools for checking details](#specific-tools)

<h2 id="defra-extensions">Browser Extensions available in Defra Group</h2>

You can install and use "WAVE" and "Accessibility Insights for Web" on your Defra Group laptop - but only with the Edge browser.

* [Accessibility Insights for Web](https://microsoftedge.microsoft.com/addons/detail/accessibility-insights-fo/ghbhpcookfemncgoinjblecnilppimih) can perform simple automated checks and walk you through manual testing. It's good for more in depth testing on complex pages, but isn't as "immediate" as WAVE.
* [WAVE](https://microsoftedge.microsoft.com/addons/detail/wave-evaluation-tool/khapceneeednkiopkkbgkibbdoajpkoj) can perform simple automated checks and show the results within the page. It's good for checking relatively simple pages.


<h2 id="using-tools">Using the tools</h2>

### How to use the tools

A **bookmarklet** is a link that contains JavaScript. When a bookmarklet link is activated, the browser runs the JavaScript code that it contains.  It doesn't need to be properly installed and so is not restricted by Defra IT policies.

The most common way of installing a bookmarklet is to drag and drop the bookmarklet link into your browser's bookmarks or favourites toolbar. You can also copy the link location of the bookmarklet link and pasting it into the Location field of a bookmark that you create using your browser's Bookmark Manager.

**Lighthouse** is a part of the Chrome web browser's development tools. You can run it as follows:

1. Press F12 (fn-F12 on Mac) to open Lighthouse in Chrome DevTools. (You can also right-click and choose inspect to open DevTools and choose the Lighthouse tab.)
1. If you don't see the Lighthouse option in the toolbar, you may need to click on the two arrows at the end.
1. Once the Lighthouse tool opens, select only the 'Accessibility' category, and mobile or desktop, then choose 'Generate report'.


### They sometimes don't work or display oddly

Occasionally you may find that nothing happens when you run a bookmarklet. This is usually because the Content Security Policy for the site is blocking the script. (You can check this by looking for errors in the dev tools console, if you know how to do that). There's no way to work around this block.

Very occasionally, the display of the bookmarklet will be affected by the styling for the site you are testing. This does not affect the test results but some parts of the display may be missing or too big, for example. Again, there is no way to fix this.

Lighthouse should work OK as it works in a different way that does not trigger the Content Security Policy.


<h2 id="general-tools">General tools that will spot a range of issues</h2>

[HTML CodeSniffer Accessibility Auditor Bookmarklet](http://squizlabs.github.io/HTML_CodeSniffer/) checks against several Web Content Accessibility Guidelines (WCAG) 2.1

[WAVE browser bookmarklet](https://wave.webaim.org/help#bookmarklet) is a bookmarklet version of their plugin. It sends the page to the WAVE servers so don't use this with sensitive content or data.

Lighthouse (within Google Chrome's development tools) will identify a range of common problems including:

* alternative text for images
* form fields  missing associated labels
* whether native HTML5 interactive elements, such as links, have a name
* whether the language of the page has been set

[W3C Validator](https://validator.w3.org/) can be used to validate pages and may find a number of issues. Beware - not all invalid code will cause accessibility problems.

### Limitations of automated tests

Automated tests are not comprehensive and do not provide you with a complete view of the accessibility of a page, so manual tests should always be completed too.

<h2 id="specific-tools">Specific tools for checking details</h2>

### Image alternative text

[Paul J Adam images bookmarklet](https://pauljadam.com/bookmarklets/images.html)

Lighthouse (within Google Chrome's development tools) can identify whether images have alternative text.

The tools provided will just check for content within the alt attribute, but non-text content still requires manual checking to ensure that the alternative text serves an equivalent purpose.

[WCAG Success Criterion 1.1.1: Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html)

It may also be possible that images pass this success criterion without using an `alt` attribute if the content is one of the [exemptions described in the 1.1.1 Non-text Content success criterion](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html), or if one of the [sufficient techniques for 1.1.1 Non-text Content are met](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html#sufficient).

### Form markup

[Forms bookmarklet](https://accessibility-bookmarklets.org/install.html) can be used to identify the way that form fields are marked up and the roles used.

[WCAG Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)

### Landmarks

[Landmarks bookmarklet](https://accessibility-bookmarklets.org/install.html) can be used to identify the semantic roles of each landmark used within the page.

[WCAG Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)


### Reading order

[Reading order bookmarklet](https://adrianroselli.com/2019/04/reading-order-bookmarklet.html) can be used to determine the reading order of content on a page in order to understand if the sequence affects the meaning of content.

[WCAG Success Criterion 1.3.2: Meaningful Sequence](https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html)

### Device Orientation

Browser developer tools can be used to enable the responsive design mode, which you can use to switch the orientation.

[WCAG Success Criterion 1.3.4: Orientation](https://www.w3.org/WAI/WCAG21/Understanding/orientation.html)

### Colour contrast

[Contrast analysis widget](https://ada.is/contrast-widget/) can be used to identify elements on the page with low colour contrast.

[WCAG Success Criterion 1.4.3: Contrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)

### Text spacing

[Text spacing bookmarklet](https://cdpn.io/stevef/debug/YLMqbo) implements the line spacing, word spacing and letter spacing styling required for testing for this success criteria.

[WCAG Success Criterion 1.4.12: Text spacing](https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html)

### Focus order

[Focus interactive controls bookmarklet](https://adrianroselli.com/2015/01/css-bookmarklets-for-testing-and-fixing.html#FocusInteractives) will navigate through the page, replicating hitting the tab/shift key to move through the content.

[WCAG Success Criterion 2.4.3: Focus Order](https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html)

### 2.4.6: Headings and labels bookmarklets

[Accessibility HTML5 Outliner](https://hinderlingvolkart.github.io/h123/) can be used to quickly provide you with the headings and the hierarchy used on a page.

### Language of the page

Lighthouse (within Google Chrome's development tools) can identify whether the language of the page has been set.

The [W3C Validator](https://validator.w3.org/) can identify whether the language of the page has been set.

[WCAG Success Criterion 3.1.1: Language of the page](https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html)

### Code Parsing

The [W3C Validator](https://validator.w3.org/) should be used to check for parsing errors, focussing on those that are relevant to the Web Content Accessibility Guidelines' success criteria, as these errors may lead to parsing errors or assistive technology to crash.

[WCAG Success Criterion 4.1.1: Parsing](https://www.w3.org/WAI/WCAG21/Understanding/parsing.html)

### Check interactive elements for names

Lighthouse (within Google Chrome's development tools) can identify whether native HTML5 interactive elements, such as links, have a name.

[WCAG Success Criterion 4.1.2: Name, role, value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html)

### Simulate colour vision deficiencies

Google Chrome's development tools can simulate colour vision deficiencies:

1. Open developer tools `ctrl + shift + I`
2. Click the three dots in the top right
3. Select "More tools"
4. Select "Rendering"
5. A new tab will open at the bottom of the developer tools
6. Scroll to the bottom of this "Rendering" tab
7. Select an option from the "Emulate vision deficiencies" menu

You can also check the page will respect the user's preferred colour scheme (dark or light mode), reduced motion, and other CSS detectable features.

## Other bookmarklets

[JavaScript Bookmarklets for Accessibility Testing](https://www.pauljadam.com/bookmarklets.html)

[Accessibility Bookmarklets - Highlight accessibility features of web pages](https://accessibility-bookmarklets.org)
