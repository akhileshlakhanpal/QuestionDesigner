$(function(){

    $('.S_Q_Set:eq(0)').each(function(){
        $(this).find('.show_row_option').find('.Row_addiion').click(function(){           
            $(this).parent().append('<input type="text" name="ROW_0" class="question_response_text"/>');
        });
    });

    $('.S_Q_Set:eq(0)').each(function(){
        $(this).find('.show_column_option').find('.Col_addiion').click(function(){           
            $(this).parent().append('<input type="text" name="COL_0" class="question_response_text"/>');
        });
    });

    $('.S_Q_Set_demo:eq(0)').each(function(){
        $(this).find('.show_row_option').find('.Row_addiion').click(function(){           
            $(this).parent().append('<input type="text" name="ROW_0" class="question_response_text_demo"/>');
        });
    });

    $('.S_Q_Set_demo:eq(0)').each(function(){
        $(this).find('.show_column_option').find('.Col_addiion').click(function(){           
            $(this).parent().append('<input type="text" name="ROW_0" class="question_response_text_demo"/>');
        });
    });

    $('.S_Q_Set_Main:eq(0)').each(function(){
        $(this).find('.show_row_option').find('.Row_addiion').click(function(){           
            $(this).parent().append('<input type="text" name="ROW_0" class="question_response_text_Main"/>');
        });
    });

    $('.S_Q_Set_Main:eq(0)').each(function(){
        $(this).find('.show_column_option').find('.Col_addiion').click(function(){           
            $(this).parent().append('<input type="text" name="ROW_0" class="question_response_text_Main"/>');
        });
    });
});