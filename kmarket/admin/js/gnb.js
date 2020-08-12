$(document).ready(function(){
    var gnb = $('#gnb > li > a');
    gnb.click(function(e){
        e.preventDefault();
        var isOpen = $(this).next().is(':visible');
        //여기서 this는 선택한 a태그. a의 next는 숨겨진 ol태그임 따라서 ol이 보이냐는 것을 true/false로 받는거다 이말이야

        if(isOpen){
            // 현재 서브메뉴가 펼쳐진 상태
            $(this).next().slideUp(200);
        }else{
            $(this).next().slideDown(200);
        }
    });
});