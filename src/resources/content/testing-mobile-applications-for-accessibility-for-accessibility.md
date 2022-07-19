---
title: Testing mobile applications for accessibility
summary: This document outlines how the Defra accessibility team tests mobile applications on iOS and Android devices for accessibility issues.
author: ["Defra accessibility team"]
version: "1.0"
publishedDate: 2022-03-16
tags:
  - checkingAccessibility
  - resource
---

This document provides a framework and sequence for auditing mobile app (applications) without the code used to develop the app. The tests are applicable to the following operating systems

* Android (Phones and tablets)
* iOS (iPhones)
* iPadOS (iPads)

This process may not provide you with all of accessibility issues that are present in your service and as such, you should always test your services with people who are disabled and users of your service.

## Summary and order for testing

### 1. Use automated accessibility checks

Quickly check for issues using automated testing.

#### Use Android Accessibility Scanner for Android apps

[The Android Accessibility Scanner](https://support.google.com/accessibility/android/answer/6376570) can be used to check every screen in the sample for:

* colour contrast
* target size issues

[Google provides further notes on Android accessibility testing and the application.](https://developer.android.com/guide/topics/ui/accessibility/testing#accessibility-scanner)

#### Use XCode’s Accessibility Inspector for iOS apps

You can use Apple's XCode Accessibility Inspector to check every screen in the sample for:

* Element description
* Contrast
* Hit region
* Element detection
* Clipped text
* Traits
* Large text

### 2. Check accessible names using VoiceControl in iOS

Ensure that every element (form label, form control, button, etc.) has a label that makes sense and is representative/matches that of the related control.

#### Use the item names overlay

To use the labels that show the name of elements on screen:

* Navigate to Settings > Accessibility > Voice Control.
* Select ‘Overlay’
* Ensure that the option: ‘Item Names’ is selected - once Voice Control is switched on, this option ensures that the labels are displayed on-screen.

[Use the DWP Voice Control Testing template](https://htmlpreview.github.io/?https://github.com/dwp/assistive-technology-templates/blob/master/html/os-x-voice-control.html) to facilitate these tests.

### 3. Use a screen reader

Ensure that all elements are read out as expected, that labels and names are correct, roles are correct and that no information is missed.

#### Use TalkBack on Android
Use the latest version in Chrome (latest version). This test is GDS mandated.

#### Use VoiceOver on iOS
Use the latest version in Safari (version 12 or later). This test is GDS mandated.

[Use the DWP Voice Control Testing template](https://htmlpreview.github.io/?https://github.com/dwp/assistive-technology-templates/blob/master/html/os-x-voice-control.html) to facilitate these tests.

By navigating to Settings > Accessibility > VoiceOver, you can turn on ‘Caption Panel’ which will display captions for the spoken content being read out. This feature is particularly useful for understanding the exact content read out as well as for documenting problems and issues with screenshots.

### 4. Check large text zoom in the operating system settings

Ensure that content and functionality is not lost following the change in text size, due to elements being pushed off-screen.

#### Set large text on Android 12:
* Go to Settings > Accessibility > Text and display
* Set Font size to ‘largest’
* Set Display size to ‘larger’

#### Set Large text on iOS
* Go to Settings > Accessibility > Display & Text Size
* Select ‘Larger Text’
* Increase the scale to a larger text size that is double the original size, use the ‘Larger Accessibility Sizes’ option if needed.

### 5. Check orientation

Ensure that content is still displayed regardless of the orientation of the device and that it is not locked to a single orientation.

#### Check orientation lock in Android
* Swipe down from the top of the Android device’s screen to open the controls and notification view.
* Ensure that the control labelled ‘Auto-rotate’ is enabled.

#### Check orientation lock in iOS
* Swipe down from the top right of the iOS device’s screen to open the control centre.
* Ensure that the control featuring a padlock with a circular arrow around the outside is **not** switched on.

### 6. Use a screen magnifier

Ensure that content is visible when using a screen magnifier to enlarge the display.

#### Enable screen magnifier in Android
* Go to Settings > Accessibility > Magnification
* From this screen you can choose to turn on magnification by either triple tapping a single finger or using an additional button in your device's control bar at the bottom of the screen.

#### Enable screen magnifier in iOS
* Go to Settings > Accessibility > Zoom
* Once Zoom is switched on, you can turn on magnification by double tapping three fingers.

Use the latest version in Safari. This test is GDS mandated.

### 7. Conduct visual display checks

Ensure that content is visible and easy to read regardless of the display option that a person may be using and that motion is not overused or mandatory.

#### Tests on Android
* Colour correction modes
* High contrast

#### Tests on iOS
* Colour Filters (Greyscale)
* Increase contrast
* Reduce motion
* Reduce transparency

### 8. Conduct keyboard checks

Ensure that a bluetooth keyboard can be connected and used to operate the application without any problems.

### 9. Complete remaining WCAG checks

#### WCAG checks

<div role="region" aria-label="WCAG testing on a mobile device" tabindex="0">

Success Criterion | How to test | Note
------ | ------|----------
1.1.1: Non-text Content  | Alt text - VoiceOver or TalkBack  | Can be checked using the screen-reader assistive technologies and seeing whether they read out any appropriate alternate text for an image.
1.2.1: Audio-only and Video-only (Prerecorded)  | Usual methods  |
1.2.2: Captions (Prerecorded)  | Usual methods  |
1.2.3: Audio Description or Media Alternative (Prerecorded)  | Usual methods  |
1.2.4: Captions (Live)  | Usual methods  |
1.2.5: Audio Description (Prerecorded)  | Usual methods  |
1.2.1: Audio-only and Video-only (Prerecorded)  | Usual methods  |
1.3.1: Info and Relationships  | 1. Check accessible names with voice control. 2. VoiceOver or Talkback  |
1.3.2: Meaningful Sequence  | Usual methods  |
1.3.3: Sensory Characteristics  | Usual methods  |
1.3.4: Orientation  | Swap device from portrait to landscape and back.  |
1.3.5: Identify Input Purpose  | Check that autocomplete works correctly  |
1.4.1: Use of Color  | Check that app does not use colour as the only means of conveying information.  |
1.4.2: Audio Control  | Usual methods  |
1.4.3: Contrast (Minimum)  | Use Anroid accessibility checker  |
1.4.4: Resize text  | Set text and display to largest values  | It won’t be possible to be sure that you reach 200% or 400% exactly.  |
1.4.5: Images of Text  | Check for alt text where needed using VoiceOver or TalkBack  |
1.4.10: Reflow  | **Out of scope**: Not testable on most devices  |
1.4.11: Non-text Contrast  | Use Android accessibility checker  |
1.4.12: Text Spacing  | **Out of scope**: Not testable on most devices  |
1.4.13: Content on Hover or Focus  | Usual methods for focus. Out of scope for hover interactions.  |
2.1.1: Keyboard  | Test with bluetooth keyboard on both android and iOS.  |
2.1.2: No Keyboard Trap  | Test with bluetooth keyboard on both android and iOS.  |
2.1.4: Character Key Shortcuts  | Check for shortcuts using frequently binded keys.  |
2.2.1: Timing Adjustable  | Usual methods  |
2.2.2: Pause, Stop, Hide  | Usual methods  |
2.3.1: Three Flashes or Below Threshold  | Usual methods  |
2.4.1: Bypass Blocks  | **Out of scope:** Not applicable to apps unless they display web content   |
2.4.2: Page Titled  | **Out of scope:** Not applicable to apps  |
2.4.3: Focus Order  | Usual methods  |
2.4.4: Link Purpose (In Context)  | Usual methods  |
2.4.5: Multiple Ways  | **Out of scope:** Often not relevant to a mobile application  |
2.4.6: Headings and Labels  | Check using VoiceOver or TalkBack. Text that looks like it should be a heading should be announced and appear in the rotor.  |
2.4.7: Focus Visible  | Usual methods  |
2.5.1: Pointer Gestures  | Check that a single pointer can operate all functions  |
2.5.2: Pointer Cancellation  | Check that you can navigate the pointer away and successfully cancel an action.  |
2.5.3: Label in Name  | Check accessible names with VoiceControl  |
2.5.4: Motion Actuation  | Check for functions in this app that are operated by device or user motion.  |
3.1.1: Language of Page  | **Out of scope:** Not testable on most devices.  |
3.1.2: Language of Parts  | If there are different languages present, test to see whether a user agent reads these out as expected.  |
3.2.1: On Focus  | Usual methods  |
3.2.2: On Input  | Usual methods  |
3.2.3 Consistent navigation (AA)  | Usual methods  |
3.2.4 Consistent identification (AA)  | Usual methods  |
3.3.1: Error Identification  | Usual methods  |
3.3.2: Labels or Instructions  | Usual methods  |
3.3.3: Error Suggestion  | Usual methods  |
3.3.4: Error Prevention (Legal, Financial, Data)  | Usual methods  |
4.1.1: Parsing  | **Out of scope:** Not testable.  |
4.1.2: Name, Role, Value  | 1. Check accessible names with VoiceControl. 2. VoiceOver or TalkBack.  |
4.1.3: Status Messages  | Usual methods  |

</div>

## Background information

### How to view an iOS device on Mac

This is helpful to share for demos and for screenshots etc.

1. Connect iOS device to Mac using USB to lightning cable.
2. From your iOS device, you must trust the Mac device - this should appear in a dialogue and prompt you for an answer.

### How to view an Android device on Mac

This is helpful to share for demos and for screenshots etc.

#### Using Vysor to view the device

1. [Download Vysor to the Mac](https://www.vysor.io/)
2. Install it on the mac
3. Connect Android phone to Mac with USB-C cable
4. Set Android to Developer mode, and then set USB debugging to on
5. Connect Vysor

#### Things that did not work (but may do for you)
* Reflector app on Mac
* LetsView App
