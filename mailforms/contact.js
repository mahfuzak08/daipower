$(document).ready(function(){
    $("#contactenqyiry").submit(function(){
        var enq_name    = $("#enq_name").val();
        var enq_email   = $("#enq_email").val();
        var enq_phone   = $("#enq_phone").val();
        
        if(enq_name =='' || enq_email =='' || enq_phone =='')
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
                url: base_url+"mailforms/contact.php",
                data: new FormData(this),
                contentType: false,
                cache: false,
                processData:false,
                success: function (result) {
                        $('#loadingimage').hide();
                        $("#contactenqyiry")[0].reset();
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
                    $("#contactenqyiry")[0].reset();
                    $("#error").html("Failed to send your message")
                }
            });
        }
    return false;
    });
});