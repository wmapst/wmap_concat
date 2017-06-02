//文字列の連結
function wmap_concat(concat_strings){
  
  var result = [];
  var concat_string = '';
  
  for(var i = 0;i < concat_strings.length; i++)
  {
    concat_string = '';
    for(var j = 0;j < concat_strings[i].length; j++)
    {
      concat_string += concat_strings[i][j];
    }
    result.push(concat_string);
  }
  
  return result;
}