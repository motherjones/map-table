var onDocumentReady = function() {

    Tabletop.init( { 
        key: 'https://docs.google.com/spreadsheet/pub?key=0AuHOPshyxQGGdDFnemtSV2tCXzJDOFNfeDNQY2lvb2c&output=html',
        callback: makeTable, 
        simpleSheet: true,
    } )
}

/* 
*  Create table with Tabletop data and apply appropriate classes
*/
var makeTable = function(data) {
    var pymChild = null;
    var $table = jQuery('#map_table');
//    var $select = jQuery('#jump_to_state select');

    for (i = 0; i < data.length; i++) {
        var row = data[i];
        
        //make postal abbreviation
        var $tr = jQuery('<tr id="' + row['postal'] + '_row"></tr>');

        //add state name
        $tr.append('<td class="state_name">' + row['state'] + '</td>' );

        //make cells and map for each category
        $tr.append(makeCell(row, 'providestatus', 'providedetails', 'provide_map'));
        $tr.append(makeCell(row, 'evidencestatus', 'evidencedetails', 'evidence_map'));
        $tr.append(makeCell(row, 'judgesstatus', 'judgesdetails', 'judges_map'));
        $tr.append(makeCell(row, 'fewerstatus', 'fewerdetails', 'fewer_map'));
        $tr.append(makeCell(row, 'lawyersstatus', 'lawyersdetails', 'lawyers_map'));
       
        $table.append($tr);
        
//        $select.append('<option value="' + row['postal'] + '">' + row['state'] + '</option>');
    }  

/*    $select.change(function() {
        window.location.hash = select.val() + '_row';
        return false;
    });*/

    pymChild = new pym.Child();
    pymChild.sendHeight();
}
/*
 * Create cell for a given row in column and apply appropriate classes to the map.
 */ 
var makeCell = function(row, statusColumn, detailsColumn, mapName) {
    var cls = 'no';

    if (row[statusColumn]) {
        cls = row[statusColumn]
    }

    var stateSVG = jQuery('#' + mapName + ' .' + row['postal']);
    stateSVG.attr('class').baseVal = row['postal'] + ' ' + cls;

    return '<td class="' + cls + '"><span>' + row[detailsColumn] + '</span></td>';
}

$(onDocumentReady);
