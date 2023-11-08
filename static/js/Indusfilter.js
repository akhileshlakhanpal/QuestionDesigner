$(function(){
    // let get_ind = $('.IND_Type').find(':selected').val();
    // alert(get_ind)
    $("select.ROL_Type").find('option').each(function(){
        $(this).css('display','none');
    });

    $("select.RES_Type").find('option').each(function(){
        $(this).css('display','none');
    });

    let get_industry;

    $("select.IND_Type").change(function(){
        get_industry = $(this).children("option:selected").text();
        get_industry = get_industry.replace(" ","_");
        
        
        $("select.ROL_Type").find('option').each(function(){
            if ($(this).attr('name') == get_industry)
            {
                $(this).css('display','block');
            }
            else
            {
                $(this).css('display','none');
            }
        });

    });

    let getRole;
    let getres;

    $("select.ROL_Type").change(function(){
        getRole = $(this).children("option:selected").text();
        getres = get_industry + '_' + getRole;
        alert(getres)
        $("select.RES_Type").find('option').each(function(){
            if ($(this).attr('name') == getres)
            {
                $(this).css('display','block');
            }
            else
            {
                $(this).css('display','none');
            }
        });
    });

    
});