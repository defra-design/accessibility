---
title: Microsoft Power Apps accessibility
summary: "Guidance on accessible use of Microsoft Power Apps ."
author: ["Defra accessibility team"]
version: "1.0"
publishedDate: 2025-01-20
status: live
tags:
  - checkingAccessibility
  - resource
---

## Microsoft Power Apps

Microsoft Power Apps offers a low code solution to developing sites and applications and has been approved for use across Defra. In 2024 we became aware of serious accessibility concerns and initiated a testing and assurance project to discern which components (called **controls**) are not compliant with WCAG 2.2 to level AA.


## Current overall status

Last updated: 20/01/2025

*   **Global issues -** There are currently **2** issues affecting all or the majority of controls.
*   **Control specific issues -** There are currently **13** issues affecting specific controls

All current issues have been reported to Microsoft. We are working directly with the Microsoft eDAD (enterprise Disability Answer Desk) team to replicate and prioritise these issues. 

Timescales for fixes will be available here when known.


## Global issues

### Focus indication on last control on a page

2.4.7 – Focus Visible

Focus indicator completely disappears intermittently on reverse keyboard navigation (shift+tab) on final control on any page. This is an issue currently present across almost every control tested, in both live environments and our test application.

###  Focus indication within navigable controls

2.4.7 – Focus Visible

Focus indication inconsistent/less effective when inside control. The control itself has a thick, black border for focus indication. When inside the control this becomes a thinner, light blue indicator. This issue is present on many controls where the user can navigate inside the control after navigating to the control.


## Control specific issues

### Camera

2.1.1 – Keyboard

Picture-in-Picture mode button within control not accessible without mouse.

### Column chart

2.1.1 – Keyboard

Keyboard/AT navigation of this control broken or completely counter intuitive.

### Combo box

2.1.1 – Keyboard

Control loses focus if a keyboard or AT user reaches the end of the search suggestions and inputs down one more time. This is incredibly easy to do accidentally and as the suggestion list is dynamic the user cannot rely on memory to know when to stop navigating and the burden is upon them to move through the list very slowly and carefully.

### Data table

1.4.10 – Reflow

Reflow behaviour particularly at high zoom levels not sufficiently robust. This can lead to situations where the navigation scroll bars are not visible or interactable at a user’s chosen zoom level.

### Form - (Modern preview)

1.4.10 – Reflow

Does not reflow properly at all zoom levels.

### Gallery

2.4.7 – Focus Visible

Focus and keyboard navigation incredibly poor out of the box. Documentation has suggestions on how to modify this element to improve accessibility, but this would require a high level of expertise and the results are still likely to be sub optimal.

### Rating

3.2.2 – On Input

Keyboard behaviour unexpected, Up arrow decreases rating, Down arrow increases rating.

### Rich text editor

1.4.10 – Reflow

Does not reflow properly at all zoom levels.

### Spinner (Modern control)

1.3.3 – Sensory Characteristics

Often fails to convey any meaningful information to VI users due to poor ARIA usage.

### Table (Modern control)

3.2.3 – Consistent Navigation

Applying filters breaks continuity of navigation for keyboard and AT users, resets focus.

### Timer

2.4.7 – Focus Visible

Poor default focus indication.

### Toolbar (Modern control preview)

1.3.3 – Sensory Characteristics

Inactive controls navigable but fail to meet minimum contrast requirements. Inactive controls are only visually identifiable by colour.

### Video

2.1.1 – Keyboard

Cyclical navigation via keyboard breaks when video control is in full screen mode. This inconsistency in controls is a cause of confusion and frustration for non-mouse users.
