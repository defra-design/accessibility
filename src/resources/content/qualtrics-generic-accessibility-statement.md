---
title: Defra Qualtrics accessibility statement HTML template
summary: A template for creating your Qualtrics accessibility statement, specific to your services.
author: ["Defra accessibility team"]
version: "1.0"
publishedDate: 2022-02-10
---

Each Qualtrics form needs to link to an accessibility statement to comply with the law.

You can use a single statement for a set of forms if:

* they all have the same legal body as owner (eg Environment Agency)
* you are sure that a single statement will be correct for all the forms

The following code should be used to create a new accessibility statement, following the steps in [How to make a Qualtrics form more accessible](../how-to-make-a-qualtrics-form-more-accessible/).

```
<main>
  <h1>Accessibility statement for -NAME OF SERVICE-</h1>
  <p>This statement applies to forms and pages published as part of -NAME OF SERVICE- service on the www.defragroup.eu.qualtrics.com domain.</p>
  <p>This service is run by -NAME OF DEPARTMENT-. It is designed to be used by as many people as possible. The text should be clear and simple to understand. You should be able to:</p>
  <ul>
    <li>zoom in up to 400% without problems</li>
    <li>navigate most of the website using just a keyboard</li>
    <li>navigate most of the website using speech recognition software</li>
    <li>use most of the website using a screen reader (including the most recent versions of JAWS, NVDA and VoiceOver)</li>
  </ul>
  <h2>How accessible this website is</h2>
  <p>We know some parts of these surveys are not fully accessible:</p>
  <ul>
    <li>The logotype used for our surveys do not contain alternate text, the text contained in the logo is provided beneath the image instead, but there is no semantic link to define this relationship.</li>
    <li>Input fields requesting commonly used information will not allow for the use of autocomplete.</li>
    <li>Progressing through the survey does not update the page title.</li>
    <li>Error messages do not always provide a suggestion for accurately resolving an error.</li>
  </ul>
  <h2>Feedback and contact information</h2>
  <p>Tell us if you need information in a different format.</p>
  <ul>
  <li>email -YOUR EMAIL ADDRESS-</li>
  <li>call -PHONE NUMBER-</li>
  <li>-ANY OTHER CONTACT DETAILS-</li>
  </ul>
  <p>In your message, include:</p>
  <ul>
    <li>the web address (URL) of the content</li>
    <li>your email address and name</li>
    <li>the format you need - for example, plain text, braille, BSL, large print or audio CD</li>
  </ul>
  <p>We'll consider your request and get back to you in 10 days.</p>
  <p>You can request a PDF in an accessible format from its page. Click ‘Request an accessible format’ to contact the organisation that published the document.</p>
  <p>You can also view the organisation’s accessible document policy to report any problems or request documents in an alternative format.</p>
  <h2>Reporting accessibility problems with this website</h2>
  <p>If you find any problems that are not listed on this page or you think we’re not meeting the accessibility requirements, contact us.</p>
  <h2>Enforcement procedure</h2>
  <p>If you contact us with a complaint and you’re not happy with our response contact the Equality Advisory and Support Service (EASS).</p>
  <p>The Equality and Human Rights Commission (EHRC) is responsible for enforcing the Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018 (the ‘accessibility regulations’).</p>
  <h2>Technical information about this website’s accessibility</h2>
  <p>-NAME OF DEPARTMENT- is committed to making its websites accessible, in accordance with the Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018.</p>
  <h2>Compliance status</h2>
  <p>The service that has linked to this accessibility statement is partially compliant with the Web Content Accessibility Guidelines version 2.1 AA standard.</p>
  <h2>Non-accessible content</h2>
  <p>As a result of using this statement, the authors of the service believe that all content within the service is accessible.</p>
  <p>By using Qualtrics, following our testing of the platform, this service will have non-accessible content for the following reasons.</p>
  <h3>Non-compliance with the accessibility regulations</h3>
  <ol>
    <li>The logotype used for our surveys do not contain alternate text. This fails WCAG 1.1.1 Non-text Content.</li>
    <li>Form inputs will not allow for the use of autocomplete. This may make identifying the input’s purpose and completing the survey more difficult. At the time of writing, Qualtrics does not provide us with the ability to designate autocomplete values against input fields. This fails WCAG 2.1 success criterion 1.3.5 (Identify Input Purpose).</li>
    <li>Progressing through the survey does not update the page title. This may make it difficult for users to orient themselves and find the right content. This fails WCAG 2.4.2 (Page Titled).</li>
    <li>Error messages do not always provide a suggestion for accurately resolving an error. This may make understanding the issue with your answers and the correct format more difficult. This fails WCAG 3.3.3 (Error Suggestion).</li>
  </ol>
  <h3>Disproportionate burden</h3>
  <p>As of 28th October 2021, we will be raising these issues through support tickets with Qualtrics in order to communicate these issues with the company and seek a resolution. We will update this statement once any fixes are applied. Currently, as these fixes are still outstanding, we will be claiming disproportionate burden for the non-compliant content stated previously as we have no way of resolving these issues in a timely manner, in a way that is possible by authors across all Defra owned Qualtrics surveys without the support of Qualtrics.</p>
  <h3>Content that’s not within the scope of the accessibility regulations</h3>
  <p>Non-HTML documents published before September 2018 do not need to be accessible - unless users need them to use a service.</p>
  <h2>How we tested this website</h2>
  <p>The Defra Accessibility Team tested this service using both automated and manual checks. We tested the base Qualtrics question types against the Web Content Accessibility Guidelines (WCAG) V2.1 level A and level AA to test how accessible the Qualtrics product is.</p>
  <p>We tested all question types that the product offers in order to understand those that work with different user agents, meeting the WCAG 2.1 AA success criteria.</p>
  <p>We have not tested the individual services built with Qualtrics, but as content is templated and produced using the same tools, we believe that our findings should be representative of individual services as long as they have followed guidance provided to them.</p>
  <h2>What we’re doing to improve accessibility</h2>
  <p>We will update this statement if we discover any content to be inaccessible and will also monitor Qualtrics updates to ensure that this guidance is kept up to date.</p>
  <h2>Preparation of this accessibility statement</h2>
  <p>This statement was prepared on 25 October 2021. It was last reviewed on 25 October 2021.</p>
  <p>Last updated 25 October 2021</p>
</main>
```