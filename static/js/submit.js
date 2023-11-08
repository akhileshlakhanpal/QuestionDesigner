$(function(){
    $('#sub_res').click(function(){
        
        let i = 0;

        let i1 = 0;
        

        let i2 = 0;
        
        let l = 0;
        $('.S_Q_Set').each(function(){
           
            let j =0;
            let k = 0;
            // $(this).find('.q_sel_type .q_type').find('select').find(":selected").val('SQTYPE_' + i);
            $(this).find('.q_sel_type .q_type').find('select').attr('name','SQ_TYPE_' + i)
            $(this).find('.Que_text').find('input[type="text"]').attr('name','SQT_' + i);
            $(this).find('.show_row_option').find('input[type="text"]').each(function(){
                $(this).attr('name','SROW_'+ i + '_' + j);
                j+=1;
            });
            $(this).find('.show_column_option').find('input[type="text"]').each(function(){
                $(this).attr('name','SCOL_'+ i + '_' + k);
                k+=1;
            });
            i+=1;
        });

        $('.S_Q_Set_demo').each(function(){
            let j1 =0;
            let k1 = 0;
            // $(this).find('.q_sel_type_demo .q_type_demo').find('select').find(":selected").val('DQTYPE_' + i1);
            $(this).find('.q_sel_type_demo .q_type_demo').find('select').attr('name','DQ_TYPE_' + i)
            $(this).find('.Que_text').find('input[type="text"]').attr('name','DQT_' + i1);
            $(this).find('.show_row_option').find('input[type="text"]').each(function(){
                $(this).attr('name','DROW_'+ i1 + '_' + j1);
                j1+=1;
            });
            $(this).find('.show_column_option').find('input[type="text"]').each(function(){
                $(this).attr('name','DCOL_'+ i1 + '_' + k1);
                k1+=1;
            });
            i1+=0;
        });

        $('.S_Q_Set_Main').each(function(){
            let j2 =0;
            let k2 = 0;
            $(this).find('.q_sel_type_Main .q_type_Main').find('select').attr('name','MQ_TYPE_' + i)
            $(this).find('.Que_text').find('input[type="text"]').attr('name','MQT_' + i2);
            $(this).find('.show_row_option').find('input[type="text"]').each(function(){
                $(this).attr('name','MROW_'+ i2 + '_' + j2);
                j2+=1;
            });
            $(this).find('.show_column_option').find('input[type="text"]').each(function(){
                $(this).attr('name','MCOL_'+ i2 + '_' + k2);
                k2+=1;
            });
            i2+=0;
        });
    });
});