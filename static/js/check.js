$(function(){
    $('.get_screener_row').on("change",function(){
        alert('Chacha')
        let new_t = "";
        var inputText = $('.get_screener_row').val();
        var linesArray = inputText.split('\n');
        
        $(this).hide();

        for(var i=0; i<linesArray.length; i++)
        {
            
            new_t = new_t + '<input type="text" name="SROW_0" class="question_response_text" value="'+ linesArray[i] +'"/>'
            $(this).parent().append(new_t)
            new_t = "";
        }
    });


    $('.get_screener_column_text').on("change",function(){
        let new_t = "";
        var inputText = $('.get_screener_column_text').val();
        var linesArray = inputText.split('\n');
        
        $(this).hide();

        for(var i=0; i<linesArray.length; i++)
        {
            
            new_t = new_t + '<input type="text" name="SCOL_0" class="question_response_text" value="'+ linesArray[i] +'"/>'
            $('.S_Q_Set .show_column_option').append(new_t)
            new_t = "";
        }
    });

    $('.get_demo_row').on("change",function(){
        let new_t = "";
        var inputText = $('.get_demo_row').val();
        var linesArray = inputText.split('\n');
        
        $(this).hide();

        for(var i=0; i<linesArray.length; i++)
        {
            
            new_t = new_t + '<input type="text" name="DROW_0" class="question_response_text_demo" value="'+ linesArray[i] +'"/>'
            $(this).parent().append(new_t)
            new_t = "";
        }
    });

    $('.get_demo_col').on("change",function(){
        let new_t = "";
        var inputText = $('.get_demo_col').val();
        var linesArray = inputText.split('\n');
        
        $(this).hide();

        for(var i=0; i<linesArray.length; i++)
        {
            
            new_t = new_t + '<input type="text" name="DCOL_0" class="question_response_text_demo" value="'+ linesArray[i] +'"/>'
            $(this).parent().append(new_t)
            new_t = "";
        }
    });

    $('.get_Main_section_row').on("change",function(){
        let new_t = "";
        var inputText = $('.get_Main_section_row').val();
        var linesArray = inputText.split('\n');
        
        $(this).hide();

        for(var i=0; i<linesArray.length; i++)
        {
            
            new_t = new_t + '<input type="text" name="DROW_0" class="question_response_text_Main" value="'+ linesArray[i] +'"/>'
            $(this).parent().append(new_t)
            new_t = "";
        }
    });

    $('.get_Main_section_Col').on("change",function(){
        let new_t = "";
        var inputText = $('.get_Main_section_Col').val();
        var linesArray = inputText.split('\n');
        
        $(this).hide();

        for(var i=0; i<linesArray.length; i++)
        {
            
            new_t = new_t + '<input type="text" name="DCOL_0" class="question_response_text_Main" value="'+ linesArray[i] +'"/>'
            $(this).parent().append(new_t)
            new_t = "";
        }
    });
});