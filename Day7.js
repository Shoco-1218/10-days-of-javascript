// Regular expression 1
{
  function regexVar() {
    
    const re = new RegExp('^(a|i|e|o|u).*\\1$');

    return re;
}
}

// Regular expressions2
{
  function regexVar() {
    
    const re = new RegExp('^(Mr\\.|Mrs\\.|Ms\\.|Dr\\.|Er\\.)[a-zA-Z]+$');
    
    return re;
}
}

// RegEx 3
{
  function regexVar() {
    
    const re = /\d+/g;    
    
    return re;
}
