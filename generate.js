$("form :input").each(function(){
   var input = $(this);
    var name = input.attr("name");
    $('#my_div').append("$"+name+" = $this->input->post('"+name+"');<br>"  );
});
