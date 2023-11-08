$(function(){
    $('.category_selection:eq(0)').on("click",function(){
        // alert('Hello')
        if ($(this).next('.Cat_show').is(':hidden'))
        {
            
            $(this).next('.Cat_show').css('display','block');
        }
        else  if (!$(this).next('.Cat_show').is(':hidden'))
        {
            $(this).next('.Cat_show').css('display','none');
        }
        
    });
});