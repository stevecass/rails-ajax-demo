$(document).ready(function(){

  $(document).on('ajax:success', function(event, data){
    //log target explicitly so we can see it easily
    console.log(event.target);
    console.log(event);
    console.log(data);

    /* 
    Here we examine event.target to see which  link / button / form 
    originated the ajax call. Rails generates a form around button_to,
    which complicates things slightly
    */

    if(event.target.className == 'age_cow') {
       ageACow(data);
    }

    if(event.target.className == 'new_cow') {
      addACowToTable(data);
    }

    if(event.target.tagName == 'FORM' && 
      event.target.className == 'button_to') {
      removeACowFromTable(event, data);
    }
  });
});

function ageACow(data) {
  /*
   find the cow and replace the content of the age field
   The server response passed to us in the data parameter 
   will be json (because we set up the age method in cows 
   controller to respond with json)
  */

  var newAge = data.age;
  var cowId = data.id;
  var selector = 'tr#cow_' + cowId + ' td.age';
  $(selector).html(newAge);

}

function addACowToTable(data) {
  // cows#create returns an html snippet. We'll append it to the cows table

  $('table#cow_list').append(data);
}

function removeACowFromTable(event, data) {
/*
  We'll get here when someone clicks one of the "destroy" buttons to delete a cow.

  When we mark a button_to as remote: true, rails generates a form (with css class button_to)
  to surround our button. The event target for the ajax:success is the generated form, not 
  the button we clicked to submit it. Because the form is generated, it can be a bit more
  challenging to locate it - our own id and css class from the helper end up on the button 
  not on the surrounding form that rails generated.

  Having said that, we can still figure out which cow we need to remove from the display:

  1. We can check the data from the controller. Our destroy method returns json like {deleted: 17} 
  2. We can check the action attribute of the form that raised the event to find its target url.
  3. We can use event.target to build a jquery selector to select the form and look at its inputs using jQuery's attr method.

  We'll do something convoluted here to check in both ways 1 and 2 just for demo purposes. If the results
  differ, we'll throw a javascript error as that should never happen - if it does we've probably made a 
  logic error somewhere in our code.

  We'll grab the cow id then use it to remove the corresponding row from the table.

*/


  var formAction = event.target.action;
  var formCowId = formAction.match(/\d+$/)[0];
  var dataCowId = data.deleted;

  if (dataCowId != formCowId) {
    throw "The cow id in the form action and the cow id in the return data don't match. Headscratcher."
  }

  var selector = 'tr#cow_' + dataCowId;
  $(selector).remove();

}

