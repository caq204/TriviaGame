$(document).ready(function(){
    $("#results").hide();
    var timerId;
    var timeLeft = 60;

    $("#start-button").click(function(){
        $("#results").hide();
        timerId = setInterval(clock,1000);
        function clock(){
            if(timeLeft === -1){
                clearTimeout(timerId);
                resultCount();
                $("#que").hide();
                $("#results").show();
            }
            else{
                $("#t_left").text(timeLeft);
                timeLeft--;
            }
        }
    });

    $("#submit").on("click",function(){
        $("#que").hide();
        $("#results").show();
        resultCount();
        clearTimeout(timerId);
        timeLeft = 60;
        $("#t_left").text(0);
    });

    $("#restart").on("click",function(){
        $("#results").hide();
        $("#que").show();
        $("#t_left").text(60);
    });

    function resultCount(){
        var c_ans = 0;
        var w_ans = 0;
        var checkQ1 = $("input[name='q1']:checked").val();
        var checkQ2 = $("input[name='q2']:checked").val();
        var checkQ3 = $("input[name='q3']:checked").val();
        var checkQ4 = $("input[name='q4']:checked").val();
        var checkQ5 = $("input[name='q5']:checked").val();

        var u_choice = [checkQ1,checkQ2,checkQ3,checkQ4,checkQ5];
        var right_ans = ["d","c","c","d","a"];

        for(var i=0;i<u_choice.length;i++){
            if(u_choice[i]===right_ans[i]){
                c_ans++;
            }
            else{
                w_ans++;
            }
        }

        $('input[type=radio]').prop('checked', false);
        $("#ca").text(c_ans);
        $("#wa").text(w_ans);
        console.log(checkQ1);
    }
})