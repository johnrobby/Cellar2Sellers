$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
});

$(function () {
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    })

    $(".create-wine").on("submit", function (event) {
        event.preventDefault();

        var newWine = {
            title: $("#title").val().trim(),
            country: $("#country").val().trim(),
            appelation: $("#appelation").val().trim(),
            vintage: $("#vintage").val().trim(),
            cost: $("#cost").val().trim(),
            website: $("#website").val().trim(),
            sale: $("#sale").val().trim()
        };

        $.ajax("api/wines", {
            type: postMessage,
            data: newWine
        }).then(
            function () {
                console.log("created new wine");
                location.reload();
            });
    });
});