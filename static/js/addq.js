$(function(){
    let i = 0;
    $('.addN').on("click",function(){
        let div_q = $('.S_Q_Set_dummy').html();
        $('.Question_container_Screener').append('<div class="S_Q_Set">' + div_q + '</div>'); 
        
        $('.Question_container_Screener').find('.S_Q_Set:last').find('.show_row_option').addClass('NRow' + i);
        $('.Question_container_Screener').find('.S_Q_Set:last').find('.show_column_option').addClass('NCol' + i);

                    $('.S_Q_Set').not(':first').each(function(){
                        $(this).find('.NRow' + i).find('.get_screener_row').on("change",function(){
                            let new_t = "";
                            var inputText = $(this).val();
                            var linesArray = inputText.split('\n');
                            
                            $(this).hide();
                    
                            for(var i=0; i<linesArray.length; i++)
                            {
                                
                                new_t = new_t + '<input type="text" name="SROW_0" class="question_response_text" value="'+ linesArray[i] +'"/>'
                                $(this).parent().append(new_t)
                                new_t = "";
                            }
                        });
                        $(this).find('.NRow' + i).find('.Row_addiion').click(function(){                           
                            $(this).parent().append('<input type="text" name="ROW_0" class="question_response_text"/>');
                        });
                    });
                
                    $('.S_Q_Set').not(':first').each(function(){
                        $(this).find('.NCol' + i).find('.get_screener_column_text').on("change",function(){
                            let new_t = "";
                            var inputText = $(this).val();
                            var linesArray = inputText.split('\n');
                            
                            $(this).hide();
                    
                            for(var i=0; i<linesArray.length; i++)
                            {
                                
                                new_t = new_t + '<input type="text" name="SCOL_0" class="question_response_text" value="'+ linesArray[i] +'"/>'
                                $(this).parent().append(new_t)
                                new_t = "";
                            }
                        });
                        $(this).find('.NCol' + i).find('.Col_addiion').click(function(){           
                            $(this).parent().append('<input type="text" name="COL_0" class="question_response_text"/>');
                        });
                    });

        i+=1;
    });

    let j=0;
    $('.addN_demo').on("click",function(){
        let div_q = $('.S_Q_Set_demo_dummy').html();
        $('.Question_container_demo').append('<div class="S_Q_Set_demo">' + div_q + '</div>'); 
        
        $('.Question_container_demo').find('.S_Q_Set_demo:last').find('.show_row_option').addClass('NRowDemo' + j);
        $('.Question_container_demo').find('.S_Q_Set_demo:last').find('.show_column_option').addClass('NColDemo' + j);

        $('.S_Q_Set_demo').not(':first').each(function(){
            
            $(this).find('.NRowDemo' + j).find('.get_demo_row').on("change",function(){
                let new_t = "";
                var inputText = $(this).val();
                var linesArray = inputText.split('\n');
                
                $(this).hide();
        
                for(var i=0; i<linesArray.length; i++)
                {
                    
                    new_t = new_t + '<input type="text" name="DROW_0" class="question_response_text_demo" value="'+ linesArray[i] +'"/>'
                    $(this).parent().append(new_t)
                    new_t = "";
                }
            });

            $(this).find('.NRowDemo' + j).find('.Row_addiion').click(function(){           
                $(this).parent().append('<input type="text" name="ROW_0" class="question_response_text"/>');
            });
        });
    
        $('.S_Q_Set_demo').not(':first').each(function(){

            $(this).find('.NColDemo' + j).find('.get_demo_col').on("change",function(){
                let new_t = "";
                var inputText = $(this).val();
                var linesArray = inputText.split('\n');
                
                $(this).hide();
        
                for(var i=0; i<linesArray.length; i++)
                {
                    
                    new_t = new_t + '<input type="text" name="DCOL_0" class="question_response_text_demo" value="'+ linesArray[i] +'"/>'
                    $(this).parent().append(new_t)
                    new_t = "";
                }
            });

            $(this).find('.NColDemo' + j).find('.Col_addiion').click(function(){           
                $(this).parent().append('<input type="text" name="ROW_0" class="question_response_text"/>');
            });
        });

        j+=1;
    });


    let k=0;
    $('.addN_Main').on("click",function(){
        let div_q = $('.S_Q_Set_Main_dummy').html();
        $('.Question_container_Main').append('<div class="S_Q_Set_Main">' + div_q + '</div>'); 

        $('.Question_container_Main').find('.S_Q_Set_Main:last').find('.show_row_option').addClass('NRowMain' + k);
        $('.Question_container_Main').find('.S_Q_Set_Main:last').find('.show_column_option').addClass('NColMain' + k);
        $('.Question_container_Main').find('.S_Q_Set_Main:last').find('.q_sel_type_Main .q_type_Main .category_selection').addClass('SCl' + k);
        
        $('.S_Q_Set_Main').not(':first').each(function(){

            $(this).find('.NRowMain' + k).find('.get_Main_section_row').on("change",function(){
                let new_t = "";
                var inputText = $(this).val();
                var linesArray = inputText.split('\n');
             
                
                $(this).hide();
        
                for(var i=0; i<linesArray.length; i++)
                {
                    
                    new_t = new_t + '<input type="text" name="DROW_0" class="question_response_text_Main" value="'+ linesArray[i] +'"/>'
                    $(this).parent().append(new_t)
                    new_t = "";
                }
            });

            $(this).find('.NRowMain' + k).find('.Row_addiion').click(function(){           
                $(this).parent().append('<input type="text" name="ROW_0" class="question_response_text_Main"/>');
            });
        });
    
        $('.S_Q_Set_Main').not(':first').each(function(){

            $(this).find('.NColMain' + k).find('.get_Main_section_Col').on("change",function(){
                let new_t = "";
                var inputText = $(this).val();
                var linesArray = inputText.split('\n');
                
                $(this).hide();
        
                for(var i=0; i<linesArray.length; i++)
                {
                    
                    new_t = new_t + '<input type="text" name="DCOL_0" class="question_response_text_Main" value="'+ linesArray[i] +'"/>'
                    $(this).parent().append(new_t)
                    new_t = "";
                }
            });
            $(this).find('.NColMain' + k).find('.Col_addiion').click(function(){           
                $(this).parent().append('<input type="text" name="DCOL_0" class="question_response_text_Main"/>');
            });
        });

        $('.S_Q_Set_Main').not(':first').each(function(){            
            $(this).find('.q_sel_type_Main .q_type_Main').find('.SCl' + k).on("click",function(){               
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
        
    k+=1;
    });
    
    

    

});
