
// <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
// <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>

function cancel(reserve_code){
    if(confirm("예매를 취소하시겠습니까?")){
        var code = reserve_code;
        console.log(code);
        $.ajax({
            url : 'reserve/reserveCancel.php',
            type : 'POST',
            data : {code:code},
            success : function(data){
                if(data == 1){
                    alert("예매가 취소되었습니다.");
                }
                else{
                    alert("실패!");
                }
                location.reload();
            },
            error: function(jqXHR, textStatus, errorThrown){
                alert("arjax error : " + textStatus + "\n" + errorThrown);
            }

        });
    }
    else {
        location.reload();
    }
}
