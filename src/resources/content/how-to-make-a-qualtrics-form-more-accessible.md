---
title: How to make a Qualtrics form more accessible
summary: This guidance will help you to make your Qualtrics form more accessible. You must follow each step of the guidance. This is not a complete guide to making a good digital form.
author: ["Defra accessibility team"]
version: "1.0"
tags:
  - writingAccessibleForms
---

## How to use this guidance
This guidance will help you to make your Qualtrics form more accessible. You must follow each step of the guidance. This is not a complete guide to making a good digital form.

## Checklist
* [Ask only the questions you need](#check-that-you-are-only-asking-the-questions-you-need)
* [Structure your form to help users](#structure-your-form-to-help-users)
* [Use clear language (Plain English)](#write-the-questions-and-any-guidance-using-clear-language-(plain-english))
* [Use the ‘Defra forms’ theme](#use-the-defra-forms-dynamic-theme)
* [Set up your template correctly](#setting-up-your-template)
* [Use a meaningful form title](#use-a-meaningful-form-title)
* [Use meaningful headings on each screen](#use-meaningful-headings-on-each-screen)
* [Use the accessible question types](#question-types-you-can-use)
* [Remove ‘required’ markers and add ‘(optional)’ to non mandatory questions](#mandatory-questions)
* [Add helpful hints and format guidance to questions](#explain-if-a-particular-format-is-needed)
* [Use validation where it will help](#checking-entries-errors-and-validation)
* [‘Front load’ question text](#front-load-label-question-text)
* [Put guidance where it will be used and avoid referring people out of the form](#put-guidance-where-it-will-be-used-and-avoid-referring-people-out-of-the-form)
* [Use links correctly](#make-link-text-meaningful-on-its-own)
* [Use the simplest possible declarations or ‘electronic signatures’](#declarations-and-electronic-signatures)
* [Consider if users can submit a file instead of entering large amounts of data](#consider-if-users-can-submit-a-file-instead-of-entering-large-amounts-of-data)
* [Run the Qualtrics accessibility checker](#run-the-qualtrics-accessibility-checker)
* [Add an accessibility statement](#add-an-accessibility-statement)
* [Test your form](#test-your-form)

## <span id="check-that-you-are-only-asking-the-questions-you-need"></span> Check that you are only asking the questions you need
Don’t just copy an old paper form.

Follow the advice in the [GDS Structuring forms guidance](https://www.gov.uk/service-manual/design/form-structure).

Only add a question if you know it is needed. Use a question protocol to help you decide this. This helps make forms better for all users.

If you remove unnecessary questions you help people with access needs, who will often take longer to complete the form than those without access needs.

## <span id="structure-your-form-to-help-users"></span> Structure your form to help users
Organise your questions in a logical order that helps users. Group related questions together.

Start with **one** thing per page. That doesn’t always mean one question per page. Avoid loading pages with lots of questions.

Use either a question or a statement as the main page titles. Use questions or statements consistently.

## <span id="write-the-questions-and-any-guidance-using-clear-language-(plain-english)"></span> Write the questions and any guidance using clear language (Plain English)
If the language of your form is not simple and clear, the form cannot be considered accessible.

If you need advice about how to do this read the [clear language guidance from Content Design London](https://readabilityguidelines.co.uk/clear-language/) or [Content design: planning, writing and managing content on GOV.UK](https://www.gov.uk/guidance/content-design/writing-for-gov-uk).

## Building accessible pages
### <span id="use-the-defra-forms-dynamic-theme"></span> Use the ‘Defra forms’ dynamic theme
The existing ‘Defra Core’ theme has some accessibility issues and currently requires additional styling to be applied to resolve these problems.

To apply this additional styling:

1. Go to ‘Look and feel’.
2. Select the 'Core Defra' Dynamic Theme (not the static theme).
3. Navigate to the ‘Style’ panel
4. The contents of the [Defra Qualtrics additional styling CSS](styling/defra-qualtrics-additional-styling.css) file can be pasted into the 'Custom CSS' field.
5. Once complete, select the 'Apply' button.

### <span id="setting-up-your-template"></span> Setting up your template
Ensure that the button text used in your form is consistent.

1. Go to ‘Look and feel’ and then ‘General’
2. For the ‘Next button text’ delete the existing text and enter ‘Continue’.
3. For the ‘Back button text’ delete the existing text and enter ‘Back’.

#### If your survey only is a single page
You should change the ‘Next button text’ to be 'Submit' rather than 'Continue'.

The Progress bar will be hidden by default, regardless of the selected option.

Specify the department’s name within the survey header. For example, if this survey is being conducted for Defra, within the header will be: “Department for Environment Food & Rural Affairs”, or if it were being conducted for Natural England, the header would read “Natural England”. This department name is required as the logo is a decorative image which does not provide users of assistive technology with any information.

Note: the Progress bar will be hidden by default, regardless of the selected option.

#### Other Settings
This is under Survey options > General

**Survey language** - check that is is set to English (UK)

**Display name** - use the format [Form name] - [Organisation] where the form name matches the main form title, for example:

Give your feedback on the Check for flooding service - Environment Agency

**Survey description** - a short snippet to describe from the users point of view what the form is for.

### Motion
Do not use motion.

Turn off any page transitions applied as well as autofocus and auto-advance on questions, as these features can lead to accessibility problems with people who may have motion sickness.

1. Go to ‘Look and feel’ and then ‘Motion’
2. Set ‘Page Transition’ to ‘None’

### <span id="use-a-meaningful-form-title"></span> Use a meaningful form title
All forms need a title that reflects the purpose of the survey, for example: “Give your feedback on the Check for flooding service”. This title will be reflected within the user’s browser and available to assistive technologies for people to understand the purpose of the page.

#### How to add a title
To add a title to your survey, navigate to the ‘Survey options’ page for your survey. Within the general tab, look for a field labelled: ‘Display name’. Using the text input, add the title for your survey - once complete, Qualtrics will automatically save this change.

### <span id="use-meaningful-headings-on-each-screen"></span> Use meaningful headings on each screen
Each screen should have a main H1 heading.

Consider adding subheadings to any screen that has a few blocks of text. For example: before you start, guidance, cookies, privacy, within the introductory screen.

#### How to add headings
Add headings to your Qualtrics survey by inserting a ‘*Text/Graphic*’ question type. When editing the text, you should see an option to use the ‘*Rich Content Editor*’. Selecting this option will allow you to format your text without the need to add custom HTML.

Select all of the text that you wish to convert into a heading and select the drop-down element labelled: ‘*Format*’. From this list, select the relevant heading level for the text to be set to.

Headings should always be in order without skipping a level, i.e. a heading level 1 should be followed by heading level 2s, which should then be followed by heading level 3s.

* Heading level 1 (followed by a) heading level 2 (followed by a) heading level 3 - *This pattern is correct as the heading level structure is consistent and does not skip a level*.
* Heading level 1 (followed by a) heading level 3 (followed by a) heading level 5 - *This pattern is incorrect as heading levels are skipped*.

## Building accessible questions
### <span id="question-types-you-can-use"></span> Question types you can use
#### Accessible types you can use
The following questions and their varying types should be accessible.

* Text/Graphic question
* Multiple choice
* Text entry

#### Avoid these or use with care
When using these question types, ensure that there are as few columns as possible. Having a large number of columns (>5) will lead to horizontal scrolling and create accessibility problems.

* Slider
  * Sliders
* Bars
* Matrix table
  * Likert
    * Allow one answer
    * Allow multiple answers
  * Constant sum
  * Text entry
* Side by side

#### Don't use these
We believe that the following cannot be made accessible.

* Form field
* Rank order
* Net promoter score
* Timing
* Graphic slider
* Constant sum
* File upload
* Pick, group, and rank
* Drill down
* Signature
* Heat map
* Hot spot
* Meta info
* Captcha verification
* Highlight
* Screen capture

### <span id="mandatory-questions"></span> Mandatory questions
Qualtrics use the term “Force a response” for mandatory questions. Follow [the GDS pattern for mandatory questions](https://design-system.service.gov.uk/patterns/question-pages/):

* **Do not** add the word ‘required’ or an asterisk to mandatory questions.
* Add ‘(optional)’ to the label of questions which are not mandatory.

Note: Qualtrics does not offer any automated approach for informing users whether questions require responses or not. This can lead to errors if a person skips a question that requires a response.

### <span id="explain-if-a-particular-format-is-needed"></span> Explain if a particular format is needed
When data must be entered in a specific format or in a particular way, you must give clear instructions with the question. For example:

> **Permit reference number**
> 
> Find this on your permit card. 
> 
> It’s 2 letters and 6 numbers. For example, AB123456.

### <span id="checking-entries-errors-and-validation"></span> Checking entries: errors and validation
You can help users to enter the correct information by adding a validation check to your question.

The options in Qualtrics for validation on a Single line, Text entry field, are to 'Force a response' (make the question mandatory) and then you can add another validation such as:

* Content type
  * Email address
  * Phone number
  * Postal code
  * Date format
  * Number
  * Text only
* Minimum length
* Maximum length

If you use any of these, don’t forget to check it with the data you expect the user to add, as well as any common variations.

### <span id="front-load-label-question-text"></span> ‘Front load’ label (question) text
Put the most meaningful text at the start of a form label or heading. People skimming a form, people who need high magnification and some screen reader users may not read/listen to the end of a label.

For example:
> Start date of this report
> 
> End date of this report

Is better than
> Period covered by this report - Start Date
> 
> Period covered by this report - End Date

### Help users complete multi-option questions
For multi-select checkboxes, it’s helpful to users to add hint text: “Select all that apply” (or similar relevant text).

For yes/no radio button options, consider reminding users what yes and no mean. For example:

“Yes I have paid” instead of just “Yes”.

## Help and guidance text
### <span id="#put-guidance-where-it-will-be-used-and-avoid-referring-people-out-of-the-form"></span> Put guidance where it will be used and avoid referring people out of the form
In general, guidance for the filling in the form should be with the form, not separate to the form.

Guidance to be read before completing the form should be listed in a before you start section.

Guidance for each section should be in that section.

Where you link to the guidance, you should link directly to the accessible version. Do not link to guidance that could be added to the form - for example a couple of sentences within a guide on GOV.UK.

Do not put guidance text next to a question that is not related to the actual question.

#### Guidance for options
If possible, include guidance with the options and not separately. For example:

> **I only use this licence for:**
> 
> (o) unpaid work as a volunteer when I am registered with an organisation or charity - no charge
> 
> (o) research related to the protected species that is carried out by a student or employee of an academic institution or research body - no charge

#### Guidance about what happens after the form is submitted is probably better placed at the end

For example, “If you do not get a response within 60 days of submitting this form” would be better on the confirmation page.

### <span id="make-link-text-meaningful-on-its-own"></span> Make link text meaningful on its own
#### Make link text meaningful
> [Find your local Environmental Record Centre](https://www.alerc.org.uk/lerc-finder.html)

**Not**

> Visit the [Association for Local Environmental Record Centres](https://www.alerc.org.uk/lerc-finder.html) for contact details.

#### Do not use URLs on their own as link text
<https://www.brc.ac.uk/irecord/> is not accessible.

[Record wildlife sightings on the iRecord website](https://www.brc.ac.uk/irecord/) is better.

#### State if a link opens a new tab
If links really do need to open in a new window/tab, include text within the link to explain that this link will open in a new window/tab.

For example:

> [Record wildlife sightings on the iRecord website (opens new tab)](https://www.brc.ac.uk/irecord/)

You can change how a link opens, so links don’t have to open in a new window. See the [Qualtrics Insert a Hyperlink guide](https://www.qualtrics.com/support/survey-platform/survey-module/editing-questions/rich-content-editor/insert-a-hyperlink/).

#### Link to the correct page not the homepage to make it easier for users to find what you need
[Find your local Environmental Record Centre (opens new tab)](https://www.alerc.org.uk/lerc-finder.html) - could go to the find a centre page not the home page.

## <span id="declarations-and-electronic-signatures"></span> Declarations and ‘electronic signatures’
### Use implicit declarations
Consider if you really need an explicit declaration. You can often substitute a form checkbox with text such as “By continuing you confirm you have read and understood the privacy notice.”

### Combine declarations
If you have several declarations that all need to be agreed with, combine them in one page, or at least reduce the total number.

### Avoid ‘signatures’
Asking people to upload an image of a signature - an ‘electronic’ or ‘digital signature’ is not accessible to visually impaired people and in most cases not needed. Use a digital declaration instead. For example:

> **Declaration by the registered person**
> 
> I confirm that the details I have given are correct.
> 
> Name of registered person
> 
> [ Submit ]

## <span id="consider-if-users-can-submit-a-file-instead-of-entering-large-amounts-of-data"></span> Consider if users can submit a file instead of entering large amounts of data
For data submissions (for example the list of surveys), find out:

* The typical number of rows of data.
* Whether users already have this as a document - for example a spreadsheet.

Where users might have this as data or could easily prepare a data file, and where the number of rows is typically greater than 5 or 10, consider allowing users to submit a file and provide an accessible template file.

### Spreadsheet accessibility

Follow the [Releasing statistics in spreadsheets guidance (Government Statistical Service)](https://gss.civilservice.gov.uk/policy-store/releasing-statistics-in-spreadsheets/) to make an accessible spreadsheet.

## <span id="run-the-qualtrics-accessibility-checker"></span> Run the Qualtrics accessibility checker
As a further check, you could run the Qualtrics accessibility checker. In our view, this tool is not as useful as Qualtrics would have you believe. We also think that the Qualtrics view about their own system’s accessibility is optimistic. Do not believe the text “The survey is accessible but some options can be improved”.

To run the checker:

1. In the Survey tab, click the ‘Tools’ drop down.
2. Select ‘Review’.
3. Select ‘Check survey accessibility’.

### Interpreting the results of the checker
Recommendation to ‘Number the survey questions’. If you build your form following this guidance then numbering is not required. If you decide to add numbering, we suggest that you use the ‘sequential numbering’ option with no prefix.

## <span id="add-an-accessibility-statement"></span> Add an accessibility statement
Each form needs to link to an accessibility statement to comply with the law.
You can use a single statement for a set of forms if:

* they all have the same legal body as owner (eg Environment Agency)
* you are sure that a single statement will be correct for all the forms

Use the [Defra Qualtrics accessibility statement HTML template](accessibility-statement/qualtrics-generic-accessibility-statement.html) to form the basis of your own statement.

To do this, create a new project.
1. On the ‘Create a project’ screen, select ‘Survey’ to create a new survey from scratch.
2. Name the survey: ‘NAME OF YOUR SERVICE accessibility statement’, replacing the placeholder text with the name of your service or services.
3. Change the default question to be a ‘Text/Graphic’ question type.
4. Select the question to write the question text and then navigate to the ‘HTML view’ that will appear just above the box you have selected.
5. Copy the Qualtrics generic accessibility statement code and paste it into the HTML view.
6. Once pasted, navigate to the ‘Rich Content Editor’ view, again this is situated before the question itself, close to the HTML view.
7. From here, go through the statement and add the details that are relevant to your form. If you are aware of any extra defects in your form, add those. 
8. Go to ‘Look and feel’ and then ‘Style’
9. Add the following code to the ‘Custom CSS’ field.
  * `#NextButton{display:none!important}`
10. Select the ‘Apply’ button.

You are legally responsible for the content of the statement. If you are unsure, ask your legal team to check and sign off.

Once complete, select the ‘Publish’ button - located back in the ‘Builder’ view. Be sure to copy the link that Qualtrics provides you with.

Navigate back to the form that you are working on to add your accessibility statement.
1. Go to ‘Look and feel’ and then ‘General’
2. In the text field labelled ‘Footer’, insert the following code
  * `<a href="LINK YOU COPIED EARLIER"  target="_blank">Accessibility Statement (opens in a new tab)</a>`
3. Replace the placeholder text with the link that you copied when publishing the accessibility statement.
4. Select the ‘Apply’ button.

## <span id="test-your-form"></span> Test your form
Ideally, test your form with actual users.

If that’s not possible, as a minimum, ask someone who has not been involved in the form to test it carefully.

Ask someone else to check all the questions that use validation or can trigger errors to make sure that they all work.
