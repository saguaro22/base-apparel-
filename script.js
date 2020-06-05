
let button_wrap = document.getElementById('button_wrap');
let img_error_icon = document.getElementById('img_error_icon');
let wrong_email = document.getElementById('wrong_email');
let good_email = document.getElementById('good_email');

img_error_icon.style.visibility = "hidden";
wrong_email.style.visibility='hidden';
good_email.style.visibility='hidden';

let w = window.innerWidth;
let h = window.innerHeight;
image_changing();


function image_changing(){
  if (window.innerWidth<=1100){
    document.getElementById('left_column_img').style.visibility='hidden';
  }
  if (window.innerWidth>1100){
    document.getElementById('left_column_img').style.visibility='visible';
  }
}

// Attaching the event listener function to window's resize event
window.addEventListener("resize", image_changing);




button_wrap.addEventListener('click', function() {

img_error_icon.style.visibility = "hidden";
wrong_email.style.visibility='hidden';
good_email.style.visibility='hidden';

        var email_adress = document.getElementById("email").value;
        
        ValidateEmail(email_adress);
            


} );


function ValidateEmail(email_adress) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email_adress))
  {
    good_email.style.visibility='visible';
    return (true)
  }
  else{
    wrong_email.style.visibility='visible';
    img_error_icon.style.visibility='visible';
    return (false)
  }
}

