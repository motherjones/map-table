## Combo map and table for data about the 50 states

Sample screenshot. *h/t to [@Alykat](https://twitter.com/alykat) from whom we stole a lot of css.*
<p align="center">
  <img src="https://raw.githubusercontent.com/motherjones/map-table/master/img/screenshot.png" alt="screenshot"/>
</p>

##Examples in the wild

[Since 2010, how have states have made it harder for minors to obtain a judicial bypass?](http://www.motherjones.com/politics/2014/07/teen-abortion-judicial-bypass-parental-notification)

[Will Your State Be Next to Legalize Pot?](http://www.motherjones.com/politics/2014/02/pot-marijuana-legalization-map-states)

##How it works

To make a copy of this tool for your project, get started by following [these instructions](https://github.com/motherjones/story-tools#starting-a-new-project).

Each state has a pair of ``_status`` and ``_details`` columns along one or more categories. Change the first word in each of these columns to match the data in your story. Add or delete pairs of columns as needed. Two to four categories tend to work well.

The ``_details`` column contains display copy. These cells can contain regular blurbs, [special characters](http://dev.w3.org/html5/html-author/charref), or be blank. You can use ``<em></em>``, ``<strong></strong>``, ``<a></a>``, and other html tags in these cells for italics, bold, links, and more.

Update the .html, .js, and .css files with your new categories and statuses, and seen in the [Modify](#modify-these-for-your-project) section.

Finally, upload to s3 and embed in the shell [(how to)](https://github.com/motherjones/story-tools#starting-a-new-project).

##Spreadsheet template

[Here](https://docs.google.com/spreadsheet/ccc?key=0AuHOPshyxQGGdDNKWm1nZV9xNjc3YWxyTVA0eGVLaEE#gid=0). Make a copy and move to the relevant beat folder. Change owner to MoJo Data in ``Share > Advanced``

##Modify these for your project
**In index.html:**

            <li class="key-item key-0"><b></b><span>Restrictions passed</span></li>
            <li class="key-item key-1"><b></b><span>New restrictions passed but challenged in court</span></li>
            <li class="key-item key-2"><b></b><span>No change</span></li>

and every instance of:

        <th><h6>Specific information or criteria required of minors</h6>
        ...
        <svg id="provide_map" ...


**In script.js:**

        //make cells and map for each category
        $tr.append(makeCell(row, 'providestatus', 'providedetails', 'provide_map'));
        $tr.append(makeCell(row, 'evidencestatus', 'evidencedetails', 'evidence_map'));
        $tr.append(makeCell(row, 'judgesstatus', 'judgesdetails', 'judges_map'));
        $tr.append(makeCell(row, 'fewerstatus', 'fewerdetails', 'fewer_map'));
        $tr.append(makeCell(row, 'lawyersstatus', 'lawyersdetails', 'lawyers_map'));

**In style.css**:

Everywhere a status is mentioned, eg.:

    .key-0 b, .yes, svg .yes path, .yes, svg path.yes ...
