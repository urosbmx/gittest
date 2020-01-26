$("#save").click(function () {
    $(".podaci").each(function () {
        var podaci = $(this).val();
        // console.log(podaci);
        var ime = $("input[name=name]").val();
        var email = $("input[name=email]").val();
        var text = $("#text").val();


        $.post({
            type: "POST",
            url: "get.php",
            data: {
                NAME: ime,
                EMAIL: email,
                MESAGE: text,
            },
            success: function (data) {
                console.log(data);
                alert("Uspesno ste poslali podatke");
                $("input[name=name]").val("");
                $("input[name=email]").val("");
                $("#text").val("");
            }
        });

    });
});

//prikazivanje modala
$("[data-group='Companies']").on("click", function () {
    $("#modalholder").show();
});

// zatvaranje modala
$(".close").on("click", function () {
    $("#modalholder").hide();
});

// logovanje na formu
$("#login").on("click", function () {
    $("#holderLogin").find("input").each(function () {
        var vrednost = $(this).val();
        var username = $("#username").val();
        var password = $("#password").val();

        if (username == "uros" && password == "katanic") {

            $("#modalholder").hide();
            $("#username").val("");
            $("#password").val("");
            $("#username").removeClass("error");
            $("#password").removeClass("error");
            window.open('error404.html');
        }
        else {
            $("#username").addClass("error");
            $("#password").addClass("error");
            $(".greskica").show();
        }

    });

});

//eweskiforma

$("#prijaviEwe").on('click', function () {

    var name = $("#email-ski-name").val();
    var lastName = $("#email-ski-lastname").val();
    var email = $("#email-ski").val();
    var companie = $("#email-ski-company").val();
        if (name == "" && lastName == "" && email == "" && companie == "") {
            $("input").addClass('error');

        } else {

            $("input").removeClass('error');
            name = $("#email-ski-name").val("");
            lastName = $("#email-ski-lastname").val("");
            email = $("#email-ski").val("");
            companie = $("#email-ski-company").val("");

            $.ajax({
                type: "post",
                url: "get.php",
                data: "data",
                dataType: "dataType",
                success: function (response) {
                    
                }
            });
            
        }







});


