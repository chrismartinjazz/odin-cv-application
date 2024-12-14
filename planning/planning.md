# CV Application Planning

## Spec

### Sections

- General Information section
  - name
  - email
  - phone number
  - etc...
- Education Experience section
  - multiple entries...? Not specified but seems logical.
    - school name
    - title of study
    - date of study
- Practical Experience section
  - multiple entries...? Not specified but seems logical.
    - company name
    - position title
    - main responsibilities
    - date from
    - date until

### Functionality

- Edit and submit button for each section
  - Edit button
    - Display input fields
    - Previous information as defaults
    - Edit and resubmit content
  - Submit button
    - Submit form and display value of input fields in HTML elements.

### Folder structure

- `src/components` for all components
- `src/styles` for all CSS files (import in the component files)

## Plan

Ideally the form and the display should be one element. When the section is being edited, each part of the form is editable. When it isn't, it displays in a finished CV format.

Steps:

- DONE Design general structure of page.
- DONE Decide on components and structure
- Build static version of page with hard-coded data.
- Add interactivity to the first section.
- Add interactivity to the other two sections.
- OPTIONAL: Add ability to have multiple education / job sections.
- Styling.

```txt
[CV Builder]                              [Clear]
-------------------------------------------------

              General Information
              ===================

                 Name: John Smith
                Email: johnsmith@gmail.com
                Phone: 0123 456 789
                    [Edit]

                  Education
                  =========

          Institution: School of Hard Knocks
        Qualification: Doorknocking
              Awarded: May 2010
                    [Edit]

          Institution: School of Hard Knocks
        Qualification: Master of Doorknocking
              Awarded: May 2012
                    [Edit]

                    [New]

                    Work
                    ====

              Company: The Doors
                Title: Apprentice Doorknocker
Main responsibilities: Knocking on doors
                 From: August 2012
                Until: December 2015
                    [Edit]

              Company: The Doors
                Title: Chief Doorknocker
Main responsibilities: Knocking on doors
                       Knock knock knocking on wood
                 From: January 2016
                Until: Present
                    [Edit]

                    [New]
```

While editing, the General Information section will look like:

```txt
                 Name: |John Smith          |
                Email: |johnsmith@gmail.com |
                Phone: |0123 456 789        |
                    [Save]
```

The other sections will look like:

```txt
          Institution: |School of Hard Knocks|
        Qualification: |Doorknocking         |
              Awarded: |May 2010             |
                [Save] [Delete]

... and Practical Experience:

              Company: |The Doors                   | 
                Title: |Chief Doorknocker           |
Main responsibilities: |Knocking on doors           | [Delete]
                       |Knock knock knocking on wood| [Delete]
                       [Add New] 
                 From: |January 2016                |
                Until: |                            |
                [Save] [Delete]


```

It should be possible to edit multiple components at once and save independently.
Education and Experience should both be displayed in order of date awarded / finished.
  Then by date started
  Then by name of institution / employer

Components:

- App
  - Navbar
  - CV
    - GeneralInformation
      - {editing...}
        - Form
          - Input
          - ...
        - ButtonSave
      - {not editing...}
        - Text
        - ...
        - ButtonEdit
    - EducationExperience
      - EducationInformation
        - {editing...}
          - Form
            - Input
            - ...
            - ButtonSave
            - ButtonDelete
        - {not editing...}
          - Text
          - ...
          - ButtonEdit
      - EducationInformation...
      - ButtonNew
    - PracticalExperience
      - PracticalInformation
        - {editing...}
          - Form
            - Input
            - ...
            - List
              - Input
                - ButtonDelete
              - Input
                - ButtonDelete
            - ButtonSave
            - ButtonDelete
        - {not editing...}
          - Text
          - ...
          - List
            - Text
            - ...
          - ButtonEdit
      - PracticalInformation...
      - ButtonNew