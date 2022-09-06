Defra Accessibility Consultant Interview Page
=============================================

This page is intended to be used for job interviews, it has some accessibiulity issues for the candidate to spot. BUT it shouldn't be used as a test!

How to use
----------

7 days before the interview, when sending the other information, include something like this:

> To help us understand your technical understanding of accessibility requirements and assistive technologies, at the interview we’ll ask you about accessibility issues on an example page.
> 
> You will be expected to feedback your responses at the start of the interview.
> 
> We do not expect a full audit or detailed review, but your responses should show an understanding of WCAG 2.1 compliance and how you approach such a task.
>
> Have a look at the [sample web page](https://defra-design.github.io/accessibility/interview) **before the interview.**
>
> At the start of the interview we will ask you to spend 5 minutes to:
> * explain your approach to how you would identify accessibility issues on this page
> * pick out four issues that you think are a priority to fix, and explain why they are important

If required, also include

> As a Reasonable Adjustment you can view a [textual description of the sample page](https://defra-design.github.io/accessibility/interview/description.txt).

Accessibility
-------------

A text description of the page is available (in `description.txt`) for candidates who cannot see the page. The intent is to explain visual aspects without prejudicing other candidates by providing extra information. 

The issues
----------

Candidates - please don't cheat!

* Title that doesn't describe page
* Heading that isn't a heading
* Skipped heading levels (1.3.1, 2.4.1, 2.4.6)
* Image without alt text (1.1.1)
* Link with bad text (2.4.4)
* Colour contrast issue (1.4.3)
* Unlabelled input (1.1.1, 1.3.1, 2.4.6, 3.3.2)
* Abuse of ARIA
* Lack of focus highlighting
* ~keyboard trap~ removed and replaced with input overwriting user input
* Emoji bullet list
* table layout (1.3.1, 1.3.2)
* Green/Red
* Default font size too small
* Large space between main + related
* Related content should be `<aside>`
