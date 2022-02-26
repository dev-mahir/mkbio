/* Template Name: MKBIO || Onepage fashion designer template
   Author: MK Themes
   Email: support@mkthemes.in
   Website: https://mkthemes.in
   Version: 1.0.0
   Created: February 2022
   File Description: Main JS file of the template
*/


/* ======= Index =========*/
/**===============
1. Header Mobile menu 
2. Contact form validation 
 ======================*/




 /*  Header Mobile menu  */
const mobile_btn = document.querySelector('header button');
const main_menu = document.querySelector('.main-menu ul');
const mobile_menu = document.querySelector('.mobile-menu');


mobile_btn.addEventListener('click',function(){
   main_menu.classList.toggle('active');
})




/* Contact form validation  */
const contact_form = document.getElementById('contact-form');

contact_form.addEventListener('submit',function(e){
   e.preventDefault();
   let name = this.querySelector('.name');
   let phone = this.querySelector('.phone');
   let subject = this.querySelector('.subject');
   let message = this.querySelector('.message');
   let error_check = this.querySelector('.form_error');
   let border = this.querySelector('input');
   
   if( name.value == '' || phone.value == '' || subject.value == '' || message.value == ''){
      error_check.innerHTML = `<span style="color: var(--red);">All Fields are required</span>` ;
    
   }else{
    error_check.innerHTML = `<span style="color:green;">Message send successfully</span>` ;

    name.value = '';
    email.value = '';
    phone.value ='' ;
    subject.value = '';
    message.value = '';
   }

});