##README

A simple app to demonstrate use of ```remote:true``` on ```form_for```, ```button_to``` and ```link_to``` rails helpers.

The simple version of doing so is

* Add ```remote: true``` as an option on the helper.
* Attach a jQuery event handler to handle the 'ajax:success' jQuery event

In general, you can attach an event handler for ajax:success to the element you expect to emit the event, or to any containing DOM element. In this case we attach the handler to the document itself, and examine the event target to determine the source. 

In some cases we may not be able to attach the handler to the event source directly. For example, we may add DOM elements dynamically after the document loads. In those cases, there is some value in attaching the handler to some DOM element that *is* present when the page loads.
