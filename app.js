$('#search').keyup(function(){
    var field = $('#search').val();
    var exp = new RegExp(field,"i");
    $.getJSON('data.json',function(data){ 
    
    //console.log(data);
        var output =  '<ul class="searchresults">';
        $.each(data, function(key, val)
          { 
            if((val.name.search(exp) != -1)||(val.bio.search(exp) != -1)){
            output += '<li>';
            output += '<h2>'+ val.name +'</h2>';
            output += '<img src ="images/' + val.shortname +'_tn.jpg " alt= '+val.shortname +'"/>';
            output += '<p>' + val.bio +'</p>';
            output += '</li>';
            }
          });
            output += '</ul>';
         $('#result').html(output);   
});  
});
