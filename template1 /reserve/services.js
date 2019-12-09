function theater(clickeddate) {
    var date = clickeddate.getAttribute('id');
    $.ajax({
        url: 'reserve/theater.php',
        type: 'POST',
        data: {
            date: date
        },
        success: function(data) {
            document.getElementById('test2').innerHTML = "";
            document.getElementById('test3').innerHTML = "";
            document.getElementById('test').innerHTML = data;
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("arjax error : " + textStatus + "\n" + errorThrown);
        }
    });
}

function movies(name, th, length) {
    var cgroup = [];
    for (let i = 0; i < length; i++) {
        cgroup[i] = document.getElementById(`theater${i}`);
    }
    for (let i = 0; i < length; i++) {
        if (cgroup[i].classList.contains('li_active')) {
            cgroup[i].classList.remove('li_active');
        }
    }
    cgroup[th].className = 'li_active';
    for (let i = 0; i < tabnum; i++) {
        if (tdGroup[i].classList.contains('active')) { //tdGroup에 active한 classList가 있다면 remove한다.
            var date = tdGroup[i].getAttribute('id');
        }
    }

    $.ajax({
        url: 'reserve/movies.php',
        type: 'POST',
        data: {
            date: date,
            name: name
        },
        success: function(data) {
            document.getElementById('test3').innerHTML = "";
            document.getElementById('test2').innerHTML = data;
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("arjax error : " + textStatus + "\n" + errorThrown);
        }
    });
}

function time(title, name, th, length) {
    var cgroup = [];
    for (let i = 0; i < length; i++) {
        cgroup[i] = document.getElementById(`movie${i}`);
    }
    for (let i = 0; i < length; i++) {
        if (cgroup[i].classList.contains('li_active')) {
            cgroup[i].classList.remove('li_active');
        }
    }
    cgroup[th].className = 'li_active';
    for (let i = 0; i < tabnum; i++) {
        if (tdGroup[i].classList.contains('active')) { //tdGroup에 active한 classList가 있다면 remove한다.
            var date = tdGroup[i].getAttribute('id');
        }
    }
    $.ajax({
        url: 'reserve/time.php',
        type: 'POST',
        data: {
            date: date,
            name: name,
            title: title
        },
        success: function(data) {
            document.getElementById('test3').innerHTML = data;
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("arjax error : " + textStatus + "\n" + errorThrown);
        }
    });
}

function seat(title, time, name, th, length) {
    var cgroup = [];
    for (let i = 0; i < length; i++) {
        cgroup[i] = document.getElementById(`time${i}`);
    }
    for (let i = 0; i < length; i++) {
        if (cgroup[i].classList.contains('li_active')) {
            cgroup[i].classList.remove('li_active');
        }
    }
    cgroup[th].className = 'li_active';

    for (let i = 0; i < tabnum; i++) {
        if (tdGroup[i].classList.contains('active')) { //tdGroup에 active한 classList가 있다면 remove한다.
            var date = tdGroup[i].getAttribute('id');
        }
    }

    var user_id = '<?=$_SESSION["userid"]?>'; //user_id값을 받는다.
    var membership_rating = '<?=$_SESSION["membership_rating"]?>';

    var choice_button = document.getElementById("choice_seat");
    choice_button.style.backgroundColor = "rgb(213, 63, 63)";
    choice_button.style.color = "rgb(255, 255, 255)";

    $("#choice_seat").click(
        function() {
            if(!user_id){
                alert("로그인 후 이용해주시길 바랍니다.");
                window.location.href='login/login_form.php';
            }
            else {
            var test_model = document.getElementById("test_model_overlay");
            test_model.style.opacity = 1;
            test_model.style.display = 'block';
            var model = document.getElementById("js-model");
            model.style.display = "block";
            var js_model = document.getElementById("js-model-holder");
            js_model.style.display = "block";

            $.ajax({
                url: 'reserve/seat/seatInfo.php',
                type: 'POST',

                data: {
                    date: date,
                    name: name,
                    title: title,
                    time: time
                },
                success: function(data) {
                    document.getElementById('test4').innerHTML = data;
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    alert("arjax error : " + textStatus + "\n" + errorThrown);
                }
            });
            }
        }
    );
    $("#close").click(
        function() {
            var test_model = document.getElementById("test_model_overlay");
            test_model.style.opacity = 0;
            test_model.style.display = 'none';
            var model = document.getElementById("js-model");
            model.style.display = 'none';
            var js_model = document.getElementById("js-model-holder");
            js_model.style.display = 'none';
        }
    )
    $("#btnCheckout").click(
        function() {
            var idlist = new Array;
            $("div[class='seatNumber seatSelected']").each(function(i) {
                var sel_seat = $(this).attr('id');
                // unavailable 좌석
                $(this).removeClass("seatSelected");
                $(this).addClass("seatUnavailable");

                idlist.push(sel_seat);
                $.ajax({
                    url: 'reserve/seat/seatchange.php',
                    type: 'POST',
                    data: {seat : idlist,},
                    success: function(data) {

                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        alert("arjax error : " + textStatus + "\n" + errorThrown);
                    }
                });
            });
            // 좌석선택 페이지 숨기기
            var test_model = document.getElementById("test_model_overlay");
            test_model.style.opacity = 0;
            test_model.style.display = 'none';
            var model = document.getElementById("js-model");
            model.style.display = 'none';
            var js_model = document.getElementById("js-model-holder");
            js_model.style.display = 'none';
            // 결제페이지 띄우기
            var test2_model = document.getElementById("test2_model_overlay");
            test2_model.style.opacity = 1;
            test2_model.style.display = 'block';
            var model2 = document.getElementById("js2-model");
            model2.style.display = "block";
            var js2_model = document.getElementById("js2-model-holder");
            js2_model.style.display = "block";

            // 멤버십 가격 할인
            var realprice = num;
            if(membership_rating == 'Bronze'){
                realprice = num - num*0.1;
            } else if(membership_rating == 'Silver'){
                realprice = num - num*0.2;
            } else if(membership_rating == 'Gold'){
                realprice = num - num*0.3;
            }

            document.getElementById('branch_name').innerHTML += "<span>"+name+"</span>";
            document.getElementById('title').innerHTML += "<span>"+title+"</span>";
            document.getElementById('date').innerHTML += "<span>"+date +", "+ time + "</span>";
            document.getElementById('seat').innerHTML += "<span>"+ "1관" + "/" + idlist + "</span>";
            document.getElementById('price').innerHTML += "<span>" + num + "</span>";
            document.getElementById('realPrice').innerHTML += "<span>" + realprice + "</span>";
            $("#close2").click(
                function() {
                    var test2_model = document.getElementById("test2_model_overlay");
                    test2_model.style.opacity = 0;
                    test2_model.style.display = 'none';
                    var model2 = document.getElementById("js2-model");
                    model2.style.display = 'none';
                    var js_model2 = document.getElementById("js2-model-holder");
                    js2_model.style.display = 'none';
                }
            );

            $("#final").click(
                function(){
                    $.ajax({
                        url: 'reserve/reserve.php',
                        type : 'POST',
                        data : {
                            id : "jeonggu223",
                            date : date,
                            name : name,
                            title : title,
                            time : time,
                            seat : idlist,
                            price : realprice,
                        },
                        success: function(data) {
                            alert(data);
                            // alert("결제가 완료되었습니다~~~~~!!!!!!.");
                            location.href='index.php';
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            console.log("에러에요!");
                            alert("arjax error : " + textStatus + "\n" + errorThrown);
                        }

                    });

                }
            );

        }
    );


    $(document).on("click",".seatNumber",function(){
            if (!$(this).hasClass("seatUnavailable")) {
                // If selected, unselect it
                if ($(this).hasClass("seatSelected")) {
                    var thisId = $(this).attr('id');
                    price = $('#seatsList .' + thisId).val();
                    $(this).removeClass("seatSelected");
                    $('#seatsList .' + thisId).remove();
                    // Calling functions to update checkout total and seat counter.
                    removeFromCheckout(price);
                    refreshCounter();
                } else {
                    // else, select it
                    // getting values from Seat
                    var thisId = $(this).attr('id');
                    price = $(this).attr('value');


                    var freeSeats = parseInt($('.freeSeats').first().text());
                    var selectedSeats = parseInt($(".seatSelected").length);

                    // If you have free seats available the price of this one will be 0.
                    if (selectedSeats < freeSeats) {
                        price = 0;
                    }

                    // Adding this seat to the list
                    var seatDetails1 = "좌석 : " + thisId;
                    $("#seatsList").append('<p value=' + price + ' class= stack' + '>' + seatDetails1 + '<br></p>');
                    $(this).addClass("seatSelected");

                    addToCheckout(price);
                    refreshCounter();
                }
            }
        }
    );


    $(document).on('click', ".removeSeat", function() {
        // Getting the Id of the Seat
        var id = $(this).attr('id').split(":");
        price = $(this).attr('value')
        $('#seatsList .' + id[1]).remove();
        $("#" + id[1] + ".seatNumber").removeClass("seatSelected");
        removeFromCheckout(price);
        refreshCounter();
    });

    $(".seatNumber").hover(
        function() {
            if (!$(this).hasClass("seatUnavailable")) {
                var id = $(this).attr('id');
                var id = id.split("_");
                price = $(this).attr('value');
                var tooltip = "Row: " + id[0] + " Seat:" + id[1] + " Price:CA$:" + price;

                $(this).prop('title', tooltip);
            } else {
                $(this).prop('title', "Seat unavailable");
            }
        }
    );
    // Function to refresh seats counter
    function refreshCounter() {
        $(".seatsAmount").text($(".seatSelected").length);
    }
    // Add seat to checkout
    function addToCheckout(thisSeat) {
        var seatPrice = parseInt(thisSeat);
        num = parseInt($('.txtSubTotal').text());
        num += seatPrice;
        num = num.toString();
        $('.txtSubTotal').text(num);
    }
    // Remove seat from checkout
    function removeFromCheckout(thisSeat) {
        var seatPrice = parseInt(thisSeat);
        num = parseInt($('.txtSubTotal').text());
        num -= seatPrice;
        num = num.toString();
        $('.txtSubTotal').text(num);
    }

    // Clear seats.
    $(document).on('click', "#btnClear", function() {
            $('.txtSubTotal').text(0);
            $(".seatsAmount").text(0);
            $('.seatSelected').removeClass('seatSelected');
            $('#seatsList p').remove();
        }
    );

}
