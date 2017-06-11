# Ice Cream Cone Generator

For this assessment you will be starting from scratch.

Your repo should contain the following:
  - index.html
  - styles.css
  - scripts.js

 Additional Requirements:
  - you **must** use a constructor function to create an ice cream cone

Any other assets you choose to use are up to your descretion (like images, icons, whatever) but these are the only three required files.

## Specification

### Phase Zero

- Get the project set up and all of the necessary dependencies installed (ie: jQuery if you plan on using jQuery)

### Phase One

Users should be able to:

- Enter the name of the ice cream cone/flavor they are creating
- Select up to 6 different flavors (pro tip: use checkboxes here and hardcode in 6 choices)

### Phase Two

- Hit a `create cone` button and see the title and **selected** flavors
- Users should **not** see flavors listed on their cone that they did not select
- The submit button should be disabled if there is no title flavor
- The submit button should be enabled if there is a title flavor

### Phase Three

- If a cone is created with no flavors selected, the cone should NOT be appended to the DOM, and a message should appear stating "you must select at least one flavor".
- A user should be able to "cross off" a cone, marking it eaten. (any CSS indication that this cone has been eaten is acceptable - cross off, gray out, whatever makes you happy)

## Rubric

### Progression/Completion

* **Pass: Developer completes all three iterations**
* Pending: Developer completes first two iterations
* Fail: Developer completes one or fewer iterations

### JavaScript

* **Pass: Developer uses small, single responsibility functions. There are no anonymous functions nested in event listeners, and a very clear effort has been made to refactor verbose code, and ice cream cone is constructed using a constructor function.**
* Pending: Developer completes project with some duplication and anonymous functions
* Fail: Developer has made no **obvious** attempt to clean up/refactor code and/or has not completed the project.

### HTML

* **Pass: Developer uses organized, semantic HTML tags.**
* Pending: Developer gets the HTML done.
* Fail: Developer does not have all of the necessary HTML for this assessment.

### CSS

* **Pass: Developer has made an attempt to style this application**
* Pending: Developer has made very little effort to style this application
* Fail: There is no CSS

### Organization/Linting

* **Pass: Developer has consistant and clean spacing/indentation/nesting**
* Pending: Developer has inconsistant spacing/indentation/nesting
* Fail: Developer has overlooked many opportunities to clean up spacing/nesting/indentation
