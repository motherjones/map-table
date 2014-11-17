Combo map and table graphic for data about the 50 states
--------------------------------------------------------

[Demo](http://www.motherjones.com/politics/2014/07/teen-abortion-judicial-bypass-parental-notification)

[Spreadsheet template](https://docs.google.com/spreadsheet/ccc?key=0AuHOPshyxQGGdDFnemtSV2tCXzJDOFNfeDNQY2lvb2c&usp=drive_web)

In index.html:



In script.js:

        //make cells and map for each category
        $tr.append(makeCell(row, 'providestatus', 'providedetails', 'provide_map'));
        $tr.append(makeCell(row, 'evidencestatus', 'evidencedetails', 'evidence_map'));
        $tr.append(makeCell(row, 'judgesstatus', 'judgesdetails', 'judges_map'));
        $tr.append(makeCell(row, 'fewerstatus', 'fewerdetails', 'fewer_map'));
        $tr.append(makeCell(row, 'lawyersstatus', 'lawyersdetails', 'lawyers_map'));
