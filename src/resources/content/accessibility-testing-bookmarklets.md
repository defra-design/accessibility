---
title: Accessibility testing bookmarklets
summary: "When testing software on a managed device, you may be unable to download automated tools or browser extensions. In this case, you can use bookmarklets to help you test for accessibility conformance."
author: ["Defra accessibility team"]
version: "2.0"
publishedDate: 2022-02-21
tags:
  - buildingNewServices
  # - resource
---

This document contains bookmarklets and automated tools that can be used for testing websites on managed devices, where you are unable to install additional tools or browser plug-ins. 

A good automated starting point would be to run a Lighthouse test (found within Google Chrome’s developer tools) and to resolve all issues discovered.

## Limitations of automated WCAG tests

Automated tests are not comprehensive and do not provide you with a complete view of the accessibility of a page, so manual tests should always be completed alongside this.

Where automated tools can be used to help understand if a page meets Web Content Accessibility Guidelines (WCAG), they will be listed below. 

This documentation focuses on compliance with the WCAG in a view to be compliant with the Public Sector Bodies Accessibility Guidelines 2018. Compliance with the WCAG does not mean that you service is accessible as required by the [Service Standard: Make sure everyone can use the service](https://www.gov.uk/service-manual/service-standard/point-5-make-sure-everyone-can-use-the-service). To ensure that everyone can use your service, you must consider accessibility throughout the delivery of your service and conduct accessibility testing.

## Bookmarklets for testing

### 1.1.1: Non-text Content bookmarklets

* Lighthouse (within Google Chrome's development tools) can identify whether images have alternative text.

* [W3C Validator](https://validator.w3.org/) can be used for validating pages and checking whether images have alternative text.

The tools provided will just check for content within the alt attribute, but non-text content still requires manual checking to ensure that the alternative text serves an equivalent purpose.

It may also be possible that images pass this success criterion without using an `alt` attribute if the content is one of the [exemptions described in the 1.1.1 Non-text Content success criterion](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html), or if one of the [sufficient techniques for 1.1.1 Non-text Content are met](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html#sufficient). 

### 1.3.1: Info and Relationships bookmarklets

* [Forms bookmarklet](accessibility-bookmarklets.org/install.html) can be used to identify the way that form fields are marked up and the roles used.
* [Landmarks bookmarklet](accessibility-bookmarklets.org/install.html) can be used to identify the semantic roles of each landmark used within the page.
* Lighthouse (within Google Chrome's development tools) can identify whether form fields are missing programatically associated labels.


### 1.3.2: Meaningful Sequence bookmarklets

* [Reading order bookmarklet](https://adrianroselli.com/2019/04/reading-order-bookmarklet.html) can be used to determine the reading order of content on a page in order to understand if the sequence affects the meaning of content.

### 1.3.4: Orientation bookmarklets

* Browser developer tools can be used to enable the responsive design mode, which you can use to switch the orientation.

### 1.4.3: Contrast (Minimum) bookmarklets

* [Contrast analysis widget](https://ada.is/contrast-widget/) can be used to identify elements on the page with low colour contrast.

### 1.4.12: Text spacing bookmarklets

* [Text spacing bookmarklet](https://cdpn.io/stevef/debug/YLMqbo) implements the line spacing, word spacing and letter spacing styling required for testing for this success criteria.

### 2.4.3: Focus Order bookmarklets
* [Focus interactive controls bookmarklet](https://adrianroselli.com/2015/01/css-bookmarklets-for-testing-and-fixing.html#FocusInteractives) will navigate through the page, replicating hitting the tab/shift key to move through the content.

### 2.4.6: Headings and labels bookmarklets

* [Accessibility HTML5 Outliner](https://hinderlingvolkart.github.io/h123/) can be used to quickly provide you with the headings and the hierarchy used on a page.

### 3.1.1: Language of the page bookmarklets

* Lighthouse (within Google Chrome's development tools) can identify whether the language of the page has been set.
* The [W3C Validator](https://validator.w3.org/) can identify whether the language of the page has been set.

### 4.1.1: Parsing bookmarklets

* The [W3C Validator](https://validator.w3.org/) should be used to check for parsing errors, focussing on those that are relevant to the Web Content Accessibility Guidelines' success criteria, as these errors may lead to parsing errors or assistive technology to crash.

### 4.1.2: Name, role, value bookmarklets

* Lighthouse (within Google Chrome's development tools) can identify whether native HTML5 interactive elements, such as links, have a name.
