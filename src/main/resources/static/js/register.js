

let register_form = {
    init: function () {
        $('.register_btn').click(function () {
            let user_name = $("#user_name").val();
            let user_pwd = $("#user_pwd").val();
            let user_gender = $("#user_gender option:selected").val();
            let user_address = $("#user_address").val();
            let user_birthday = $("#user_birthday").val();

            if( user_name == ""  || user_pwd ==  ""  || user_gender == ""  ||
                user_address ==  ""  || user_birthday == "" ) {
                alert("회원가입 창의 모든 값을 입력해주세요.");
                return;
            }if( user_pwd.length < 8 ){
                document.getElementById("result_pwd").innerHTML = "8자리 이상 비밀번호를 입력해주세요";
                return;
            }
            else {
                register_form.send();
            }

        });
    },
    send: function () {
        $('#register_form').attr({
            'action':'/registerimpl',
            'method':'post'
        });
        $('#register_form').submit();
    }
};

// var mapContainer = document.getElementById('map'), // 지도를 표시할 div
//     mapOption = {
//         center: new daum.maps.LatLng(37.537187, 127.005476), // 지도의 중심좌표
//         level: 5 // 지도의 확대 레벨
//     };
//
// //지도를 미리 생성
// var map = new daum.maps.Map(mapContainer, mapOption);
// //주소-좌표 변환 객체를 생성
// var geocoder = new daum.maps.services.Geocoder();
// //마커를 미리 생성
// var marker = new daum.maps.Marker({
//     position: new daum.maps.LatLng(37.537187, 127.005476),
//     map: map
// });


function sample5_execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function(data) {
            var addr = data.address; // 최종 주소 변수

            // 주소 정보를 해당 필드에 넣는다.
            document.getElementById("user_address").value = addr;
            // 주소로 상세 정보를 검색
            //geocoder.addressSearch(data.address, function(results, status) {
            // 정상적으로 검색이 완료됐으면
            // if (status === daum.maps.services.Status.OK) {
            //
            //     var result = results[0]; //첫번째 결과의 값을 활용
            //
            //     // 해당 주소에 대한 좌표를 받아서
            //     var coords = new daum.maps.LatLng(result.y, result.x);
            //     // 지도를 보여준다.
            //     mapContainer.style.display = "block";
            //     map.relayout();
            //     // 지도 중심을 변경한다.
            //     map.setCenter(coords);
            //     // 마커를 결과값으로 받은 위치로 옮긴다.
            //     marker.setPosition(coords)
            // }
            //});
        }
    }).open();

}
function checkUserId() {
    let userId = document.getElementById("user_id").value;
    if (userId === "") {
        alert("아이디를 입력해주세요.");
        return;
    }

    $.ajax({
        url: "/checkUserId",
        type: "GET",
        data: {user_id: userId},
        success: function (result) {
            if (result == "success") {
                document.getElementById("result").innerHTML = "사용 가능한 아이디입니다.";
            } else {
                document.getElementById("result").innerHTML = "이미 사용 중인 아이디입니다.";
            }
        },
        error: function () {
            document.getElementById("result").innerHTML = "서버 오류가 발생했습니다.";
        }
    });
}
    function checkPassword() {
        let user_pwd = document.getElementById("user_pwd").value;
        let confirm_pwd = document.getElementById("confirm_pwd").value;
        if (user_pwd.length < 8 && user_pwd !== confirm_pwd) {
            alert("입력하신 비밀번호를 모두 확인해주세요, 비밀번호는 8자리 이상 입력가능합니다.");
            $("#user_pwd").val(""); // 초기화
            $("#confirm_pwd").val("");
            $("#user_pwd").focus(); // 비밀번호 입력으로 돌아가기
            return;
        }
        else if (user_pwd !== confirm_pwd ) {
            alert("비밀번호가 일치하지 않습니다.");
            $("#user_pwd").val("");
            $("#confirm_pwd").val("");
            $("#user_pwd").focus();
            return;
        }
        else if (user_pwd.length < 8) {
            alert("비밀번호는 8자리 이상 입력해주세요");
            $("#user_pwd").val("");
            $("#confirm_pwd").val("");
            $("#user_pwd").focus();
            return;
        }
        else if(user_pwd.length >= 8 && user_pwd == confirm_pwd  ) {
            // 비밀번호가 일치할 때의 동작
            document.getElementById("user_name").focus();
            alert("사용할 수 있는 비밀번호 입니다.")
        }
    }

