$(document).ready(function(){
    $("#application").submit(function(){
        var cv_position         = $("cv_position").val();
        var cv_name             = $("cv_name").val();
        var cv_email            = $("cv_email").val();
        var cv_phone            = $("cv_phone").val();
        
        if(cv_position=='' || cv_name=='' || cv_email=='' || cv_phone=='')
        {
            $("#error").html("Please fill up all required fields")
            setTimeout(function(){
                    $('#error').fadeOut();
                },3000);
        }
        else
        {
            $('#loadingimage').show();
            $.ajax({
                type: "POST",
                url: base_url+"mailforms/application.php",
                data: new FormData(this),
                contentType: false,
                cache: false,
                processData:false,
                success: function (result) {
                        $('#loadingimage').hide();
                        $("#application")[0].reset();
                        if(result.type == "message"){
                            $("#success").html(result.text)
                                setTimeout(function(){
                                    $('#success').fadeOut();
                                },3000);
                        }
                        else if(result.type == "error") {
                            $("#error").html(result.text)
                                setTimeout(function(){
                                    $('#error').fadeOut();
                                },3000);
                        }
                },
                error: function(){
                    $("#application")[0].reset();
                    $("#error").html("Failed to send your message")
                }
            });
        }
    return false;
    });
});