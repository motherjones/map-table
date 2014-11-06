var public_spreadsheet_url = "https://docs.google.com/spreadsheet/pub?key=0AuHOPshyxQGGdDFnemtSV2tCXzJDOFNfeDNQY2lvb2c&output=html";

var set_class = function(state, map, css_class) {
    var svg = jQuery('#' + map + ' .' + state);
    svg.attr('class').baseVal = state + ' ' + css_class;
}

var set_map_classes = function(data) {
    for (i = 0; i < data.length; i++) {
        var state = data[i];
        if (!state.postal) {
            continue;
        }
        var svg = jQuery('#' + 'provide_map' + ' .' + state.postal);
        if ( svg && svg.attr('class') && svg.attr('class').baseVal ) {
            set_class(state.postal, 'provide_map', data[i].provide_class);
            set_class(state.postal, 'evidence_map', data[i].judges_class);
            set_class(state.postal, 'judges_map', data[i].judges_class);
            set_class(state.postal, 'fewer_map', data[i].fewer_class);
            set_class(state.postal, 'lawyers_map', data[i].lawyers_class);
        } else {
            console.log(state.postal);
            setTimeout(set_map_classes(data), 2000);
            break;
            return;
        }
    }
}

var makeTable = function(data) {
    var table = jQuery('#pot_table');
    var select = jQuery('#jump_to_state select');
    var empty_text = '<span class="inline_label">&#10008;</span>';
    select.change(function() {
        window.location.hash = select.val() + '_row';
        return false;
    });

    for (i = 0; i < data.length; i++) {
        if (i === 10 || i === 20 || i === 30 || i === 40) {
        };

        var state = data[i];
        var tr = jQuery('<tr id="' + state.postal + '_row"></tr>');
        select.append('<option value="' + state.postal + '">' + state.state + '</option>');

        //add state name
        tr.append(
            '<td class="state_name">' +
            state.state +
            '</td>'
            );

        //add provide
        data[i].provide_class = 'no';
        if (state.providestatus === 'challenged') {
            data[i].provide_class = 'challenged';
        } else if (state.providestatus === 'yes') {
            data[i].provide_class = 'yes';
        } else if (state.providestatus === 'no') {
            data[i].provide_class = 'no';
        }

        tr.append(
            '<td class="' + data[i].provide_class + '"><p>' +
            (state.providedetails !== '' ? state.providedetails : empty_text) +
            '</p></td>'
            )

        //add evidence
        data[i].evidence_class = 'no';
        if (state.evidencestatus === 'challenged') {
            data[i].evidence_class = 'challenged';
        } else if (state.evidencestatus === 'yes') {
            data[i].evidence_class = 'yes';
        }
        tr.append(
            '<td class="' + data[i].evidence_class + '"><p>' +
            (state.evidencedetails !== '' ? state.evidencedetails :  empty_text) +
            '</p></td>'
            )

        //add judges
        data[i].judges_class = 'no';
        if (state.judgesstatus === 'challenged') {
            data[i].judges_class = 'challenged';
        } else if (state.judgesstatus === 'yes') {
            data[i].judges_class = 'yes';
        }
        tr.append(
            '<td class="' + data[i].judges_class + '"><p>' +
            (state.judgesdetails.replace(/ /, '') !== '' ? state.judgesdetails : empty_text) +
            '</p></td>'
            )

        //add fewer
        data[i].fewer_class = 'no';
        if (state.fewerstatus === 'challenged') {
            data[i].fewer_class = 'challenged';
        } else if (state.fewerstatus === 'yes') {
            data[i].fewer_class = 'yes';
        }
        tr.append(
            '<td class="' + data[i].fewer_class + '"><p>' +
            (state.fewerdetails.replace(/ /, '') !== '' ? state.fewerdetails : empty_text) +
            '</p></td>'
            )

        //add lawyers
        data[i].lawyers_class = 'no';
        if (state.lawyersstatus === 'challenged') {
            data[i].lawyers_class = 'challenged';
        } else if (state.lawyersstatus === 'yes') {
            data[i].lawyers_class = 'yes';
        }
        tr.append(
            '<td class="' + data[i].lawyers_class + '"><p>' +
            (state.lawyersdetails.replace(/ /, '') !== '' ? state.lawyersdetails : empty_text) +
            '</p></td>'
            )
       

        table.append(tr);
    }

    set_map_classes(data);

}

Tabletop.init( { 
    key: public_spreadsheet_url, callback: makeTable, simpleSheet: true,
} )
