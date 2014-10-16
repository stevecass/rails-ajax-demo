##README

A simple app to demonstrate use of ```remote:true``` on ```form_for```, ```button_to``` and ```link_to``` rails helpers.

The simple version of doing so is

* Add ```remote: true``` as an option on the helper.
* Attach a jQuery event handler to handle the 'ajax:success' jQuery event

In general, you can attach an event handler for ajax:success to the element you expect to emit the event, or (as in this case) attach the handler to the document itself, and examine the event target to determine the source. Attaching the handler to the document has the possible advantage that it will (without further work) respond to events that originate from elements added dynamically after the intial binding takes place on document.ready.
 
