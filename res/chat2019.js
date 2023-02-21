function checkform() {
    var phone = $("#telephone").val();
    if(phone !='') {
        phone = phone.replace(/[0-9]/g, "");
        phone = phone.replace(/\s+/g, "");
        phone = phone.replace(/\+/g, "");
        phone = phone.replace(/-/g, "");
        if (phone != '') {
            $("#telephone").focus();
            return false;
        }
    }
    $(".overlay").show();
    $(".loading").show();
    var posturl = $("#checkurlstatus").attr("title");
    var param = 'email=' + $("#email").val() + '&contacter=' + $("#contacter").val() + '&company=' + $("#company").val() + '&title=' + $("#title").val() + '&telephone=' + $("#telephone").val() + '&fax=' + $("#fax").val() + '&usernameid=' + $("#usernameid").val() + '&url=' + $("#url").val() + '&language=' + $("#language").val() + '&etw_ip=' + $("#etw_ip").val() + '&message=' + $("#message").val() + '&guestDomain=' + $("#guestDomain").val() + '&mobile=123&f_whatsapp=' + $("#f_whatsapp").val();
    $.ajax({
        type: "POST",
        url: posturl,
        cache: false,
        async: true,
        data: param,
        datatype: "html",
        success: function (msg) {
            $(".loading").hide();
            $(".dialog").show();
            $("#message").val("");
        }
    })
    return false;
}

function ETWsetcookie(c_name, value) {
    var expiredays = 365;
    var exdate = new Date()
    c_name = "ETW_chat_" + c_name;
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = c_name + "=" + escape(value) +
        ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}
function ETWgetCookie(c_name) {
    c_name = "ETW_chat_" + c_name;
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1
            c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return ""
}