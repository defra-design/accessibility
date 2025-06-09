---
title: Microsoft Power Apps accessibility
summary: "Guidance on accessible use of Microsoft Power Apps ."
author: ["Defra accessibility team"]
version: "1.1"
publishedDate: 2025-06-03
status: live
tags:
  - checkingAccessibility
  - resource
---

## Microsoft Power Apps

Defra has a legal duty under the [Public Sector Bodies (Websites and Mobile Applications) Accessibility Regulations 2018](https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps) to ensure all digital services meet the Web Content Accessibility Guidelines (WCAG 2.2) at Level AA. If your team is building or maintaining an app using the Power Apps platform, it must meet this standard.

In 2024, the Defra accessibility team identified accessibility issues in Power Apps that would cause any app built using the platform to not meet the WCAG 2.2 Level AA standard. They launched a project to test which components (known as controls) do not meet the standard.

This guidance explains the known accessibility issues in Power Apps, which WCAG 2.2 criteria each issue would cause your app to fail, and why, as well as what you can do about managing in flight projects.

## Current Status

The accessibility team has reported all known accessibility issues to Microsoft and is working directly with their Enterprise Disability Answer Desk (eDAD) team to help replicate and prioritise them. This will support Microsoft in fixing the affected controls and resolving the underlying accessibility issues.

The accessibility team identified 2 types of accessibility issues:

1. Global issues: these issues that affect all or most Power Apps controls. There are currently 2 global issues.
2. Control-specific issues: these issues affect specific controls rather than the platform as a whole. There are currently 13 known issues.

## Global Accessibility Issues

### Focus indication on the last control on a page

The [focus indicator](https://learn.microsoft.com/en-us/powerapps/maker/canvas-apps/controls/control-focus) is what shows you where you are on the screen. Sometimes, when using the keyboard to move backwards through the app (by pressing Shift +Tab to go to the previous control), the focus indicator disappears.

For example, if someone moves backwards through the controls, they may get stuck between the second-to-last control and the final one. Without focus being shown, they cannot tell which control is selected or where to go next.

A visible focus indicator is crucial for users who rely on a keyboard or assistive technology instead of a mouse. Without it, these users may be unable to use the app or complete their tasks.

This means the last control on a page would fail the [WCAG 2.4.7: Focus Visible](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=143#focus-visible) criteria. This criterion says there must be visible styling to indicate which element the user is currently focused on.

### Focus indication within navigable controls

The focus indicator becomes harder to see in navigable controls, this issue is present on many controls where the user can navigate inside the control after navigating to the control.

When focus first lands on the control, it is clearly shown with a thick black border. But once the user starts moving between elements inside the control, the focus indicator changes to a thin light blue outline that is much harder to notice.

This creates barriers for people who rely on a keyboard or assistive technology, such as screen readers. Without a clear focus indicator, users may lose their place, skip important options, or interact with the wrong element without realising.

This means these controls would fail the [WCAG 2.4.7: Focus Visible](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=143#focus-visible) criteria. This criterion says there must be visible styling to indicate which element the user is currently focused on.

## Control Specific Issues

### Camera control

The Picture-in-Picture mode button in the [Camera control](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-camera) cannot be accessed using a keyboard or assistive technology and only works with a mouse. This button lets users pop out the camera view while continuing to interact with other parts of the app. However, users who do not use a mouse cannot activate it.

The Camera control fails the [WCAG 2.1.1: Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html) criteria. This criterion says all functionality in an app must be available using only a keyboard. Anything a user can do with a mouse, touch, or gesture must also be possible with the keyboard.

### Column chart control

When using the [Column chart control](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-column-line-chart), users cannot reliably navigate or interact with the chart using a keyboard or assistive technologies such as screen readers.

The Column chart control fails the [WCAG 2.1.1: Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html) criteria. This criterion says that all interactive elements can be used with a keyboard alone, without needing a mouse.

### Spinner control (modern control)

The [Spinner control](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/modern-controls/modern-control-spinner) (modern control) fails to convey any meaningful information to visually impaired users due to poor use of [Accessible Rich Internet Applications (ARIA)](https://www.w3.org/WAI/ARIA/apg/) tags. ARIA tags are used to provide extra information to assistive technologies, about what is happening on the screen. However, in this case, the Spinner is not announced properly, leaving users unaware that content is still loading. 

The Spinner control fails the [WCAG 1.3.3: Sensory Characteristics](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=143#sensory-characteristics) criteria. This criterion says that content should not depend on sensory characteristics, like colour, shape, or size, to convey meaning. 

### Toolbar control (modern preview)

When the [Toolbar control (modern preview)](https://learn.microsoft.com/en-us/powerapps/maker/canvas-apps/controls/control-toolbar), is inactive, controls are navigable but fail to meet minimum contrast requirements. This is because when this control is inactive, it is only identifiable by colour, which makes it difficult for users to distinguish it from active controls.

This creates problems for users with low vision or colour blindness, who rely on clear visual cues to identify different states. If there is not enough contrast, users may struggle to tell which controls are active or inactive. This can lead to confusion, errors, or difficulty completing tasks.

The Toolbar control fails the [WCAG 1.3.3: Sensory Characteristics](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=143#sensory-characteristics) criteria. This criterion says that content should not rely on sensory characteristics, such as colour, shape, or size, to convey meaning or information. 

### Combobox control

The [Combobox control](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/modern-controls/modern-control-combobox) loses focus when a keyboard or assistive technology user presses the ‘Down’ arrow after reaching the end of the search suggestions. The user drops out of control with no message to confirm they have reached the end, and there is no option to return to the start of the list.

This means users must move through the list slowly and carefully to avoid losing focus. If they do, they must find their way back manually, which can be confusing and frustrating.

In some cases, users may lose data they have already entered. This is easy to do by accident, especially because the list updates automatically while the user is typing.

The Combobox control fails the [WCAG 2.1.1: Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html) criteria. This criterion says that all controls must be usable with a keyboard without needing a mouse.

### Data table control

The [Data table control](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-data-table) does not reflow correctly at higher zoom levels. In some cases, scrollbars do not appear or cannot be used, which prevents users from accessing parts of the table.

For people who need to zoom in to read content, poor reflow creates serious barriers. If parts of the table are hidden or inaccessible, users may not be able to complete their tasks.

The Data table control fails the [WCAG 1.4.10: Reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html) criteria. This criterion says that all the content must adapt to different screen sizes and zoom levels without needing to scroll both ways.


### Form control (modern preview)

The [Form control (modern preview)](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-forms) does not reflow properly at higher zoom levels. Form fields can run off the side of the screen, and horizontal scrolling may be needed to view or complete the form.

This could create a problem for users who need to zoom in to make text or fields easier to read. If they cannot see all the fields, labels, or buttons without scrolling sideways, they may miss important information, enter incorrect data, or be unable to submit the form.

The Form control (modern preview) fails the [WCAG 1.4.10: Reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html) criteria. This criterion says that content must remain readable and usable at different zoom levels without requiring horizontal scrolling.

### Gallery control

The [Gallery control](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-gallery#description) does not include visible focus styling by default, and keyboard navigation is difficult to use. When users tab through a gallery, which item is currently selected or in focus is often unclear.

For users who rely on a keyboard or assistive technology to move through content, this creates a barrier to using the app. Without a visible focus indicator, users can lose track of their position in the gallery. They may be unable to interact with or select items. 

The Gallery control fails the [WCAG 2.4.7: Focus Visible](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html) criteria. This criterion says that when a control receives focus, it must be clearly visible.

### Rich text editor control

The [Rich text editor control](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-richtexteditor) does not reflow properly at higher zoom levels. When zoomed in, parts of the toolbar or text area can disappear off-screen. Users may need to scroll both vertically and horizontally to access formatting options or complete the required tasks.

This could create a problem for users who need to zoom in to make text or fields easier to read. If key parts of the editor are hidden, users may miss important features. They might not be able to format or submit their content.

The Rich text editor control fails the [WCAG 1.4.10: Reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html) criteria. This criterion says that content must remain readable and usable at different zoom levels without requiring horizontal scrolling.

### Timer control

The [Timer control](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-timer) does not show a visible focus indicator when a user navigates to it using a keyboard. Other controls show a solid black outline that is 2 to 3 pixels wide, but this is missing entirely.

Users who rely on a keyboard to navigate the app cannot tell which control they are on if there is no visible focus indicator. This makes it harder to complete tasks, increases confusion, and can lead to mistakes.

The Timer control fails the [WCAG 2.4.7: Focus Visible](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html) criteria. This criterion says there must be visible styling to indicate which element the user is currently focused on.

### Rating control

When using the [Rating control](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-rating) with a keyboard, the arrow keys do not behave as expected. Pressing the 'Up' arrow decreases the rating, while pressing the 'Down' arrow increases it.

This can be confusing, particularly for those who rely on a keyboard instead of a mouse. When a control does not respond as anticipated, users may find it difficult to complete tasks or may lose confidence in how the app works.

The Rating control fails the [WCAG 3.2.2: On Input](https://www.w3.org/WAI/WCAG21/Understanding/on-input.html) criteria. This criterion says that interacting with a control must not cause unexpected changes. Controls should behave in ways users can predict and understand.

### Table control (Modern control)

Applying filters to the [Table control in Power Apps - Power Apps | Microsoft Learn](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/modern-controls/modern-control-table) can cause loss of focus and break the continuity of the journey for the end user. This issue is especially problematic for users of assistive technology or rely on a keyboard for navigation, as resuming the journey can be much more difficult without the ability to simply click on the table header again.

The Table control fails the [WCAG 3.2.3 – Consistent Navigation](https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation.html) criteria, that outlines the importance of a consistent and unbroken user experience, regardless of user preferences and usage of assistive technology.

### Video control

When the Video control enters full-screen mode, cyclical navigation does not work for keyboard and assistive technology users. Normally, users can press the Tab key to move through all available controls, such as play, pause, and exit full screen. Focus should move through each control in order and then return to the start, but this behaviour breaks in full-screen mode.

The Video control fails the [WCAG 2.1.1: Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html) criteria. This criterion says that all the control functions should be usable with only a keyboard and not need a mouse.

## How Defra is supporting projects to meet accessibility standards

The Defra accessibility team and the Power Apps team are actively exploring practical ways to help projects meet accessibility standards. This includes identifying alternative controls or making changes to a control’s code or design where possible.

However, some of the accessibility issues identified in Power Apps cannot be fixed through settings, configuration, or custom code. These are platform-level issues in the core product. Because Microsoft owns and manages the platform, only they can fix them.

When a solution or alternative approach has been tested and confirmed, it will be added to this guidance. The Power Apps team will notify all developers when updates are available.

If you need help understanding how these issues affect your project or what your options are, email the accessibility team at accessibility@defra.gov.uk.

## Get Support

If you are unsure how these accessibility issues affect your Power Apps project or what to do next, the Defra accessibility team and the Power Apps team can help.

You can request a triage workshop with the accessibility and the Power Apps teams. These focused sessions give you tailored advice, practical support, and a clear way forward.

In these sessions, we will:

* talk through what your project is trying to achieve
* explain how the accessibility issue affects your specific project
* confirm whether the issue is already known or needs investigating
* explore possible solutions based on what your team is trying to do and the skills you have
* agree next steps if there is no solution yet, such as using a different approach or waiting for a fix from Microsoft

This approach helps you make informed decisions early and avoid blockers later in your project.

To request a triage session, email the accessibility team at accessibility@defra.gov.uk.
