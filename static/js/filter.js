$(function(){
    $('.type_Q').find('ul li:eq(0)').on("click",function(){
        $('.Question_container_Screener').css('display','block');
        $('.add_new').css('display','flex');
        $('.Question_container_demo').css('display','none');
        $('.add_new_demo').css('display','none');
        $('.Question_container_Main').css('display','none');
        $('.add_new_Main').css('display','none');
        $('.type_Q ul li:eq(0)').css({'background-color':'white','color':'black','font-weight':'600'});
        $('.type_Q ul li:eq(1)').css({'background-color':'transparent','color':'black','font-weight':'500'});
        $('.type_Q ul li:eq(2)').css({'background-color':'transparent','color':'black','font-weight':'500'});
    });
    $('.type_Q').find('ul li:eq(1)').on("click",function(){
        $('.Question_container_Screener').css('display','none');
        $('.add_new').css('display','none');
        $('.Question_container_demo').css('display','none');
        $('.add_new_demo').css('display','none');
        $('.Question_container_Main').css('display','block');
        $('.add_new_Main').css('display','flex');
        $('.type_Q ul li:eq(0)').css({'background-color':'transparent','color':'black','font-weight':'500'});
        $('.type_Q ul li:eq(1)').css({'background-color':'white','color':'black','font-weight':'600'});
        $('.type_Q ul li:eq(2)').css({'background-color':'transparent','color':'black','font-weight':'500'});
    });
    $('.type_Q').find('ul li:eq(2)').on("click",function(){
        $('.Question_container_Screener').css('display','none');
        $('.add_new').css('display','none');
        $('.Question_container_Main').css('display','none');
        $('.add_new_Main').css('display','none');
        $('.Question_container_demo').css('display','block');
        $('.add_new_demo').css('display','flex');
        
        $('.type_Q ul li:eq(2)').css({'background-color':'white','color':'black','font-weight':'600'});
        $('.type_Q ul li:eq(1)').css({'background-color':'transparent','color':'black','font-weight':'500'});
        $('.type_Q ul li:eq(0)').css({'background-color':'transparent','color':'black','font-weight':'500'});
    });
});