function CheckPassword(inputtxt) { 
  var passw = "TrussLab";///^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if(inputtxt.value.match(passw)) { 
    alert('Correct, try another...')
    return true;
  }
  else { 
    alert('Wrong...!')
    return false;
  }
}
