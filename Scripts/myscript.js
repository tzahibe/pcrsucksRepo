
    function printButtonClicked(){
        var client_name = $("#clientNameId").val() == "" ? "פלוני בן פלונית" : $("#clientNameId").val();
        var client_id = $("#clientIdInput").val() == "" ? "999999287" : $("#clientIdInput").val();
        var test_day = $("#testDateId").val() == "" ? "20/12/2020" : $("#testDateId").val();
        var d = new Date();
        var month = '' + (d.getMonth() + 1);
        var day = '' + d.getDate();
        var year = d.getFullYear();
        var formatDate = day + "/" + month + "/" + year;

        $('.client_id').text(client_id);
        $('.client_NameHere').text(client_name);
        $('.test_date').text(test_day);
        $('.current_dateHere').text(formatDate)

        window.print();
    }
