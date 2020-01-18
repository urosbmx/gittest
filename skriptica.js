$("#save").click(function() {
    $(".podaci").each(function() {
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
            success: function(data) {
                console.log(data);
                alert("Uspesno ste poslali podatke");
                $("input[name=name]").val("");
                $("input[name=email]").val("");
                $("#text").val("");
            }
        });

    });
});

$("[data-group='Companies']").on("click",function(){
    $("#modalholder").show();
});