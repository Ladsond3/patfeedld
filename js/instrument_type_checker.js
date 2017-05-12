function checkIt() {
  // Initialize scores
  var drum = 0;
  var trumpet = 0;
  var guard = 0;
  var sax = 0;
  var clarinet = 0;
  var tuba = 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'drum') {
        drum++;
      }
      else if (e.value == 'trumpet') {
        trumpet++;
      }
      else if (e.value == 'guard') {
        guard++;
      }
      else if (e.value == 'sax') {
        sax++;
      }
      else if (e.value == 'clarinet') {
        clarinet++;
      }
      else if (e.value == 'tuba') {
        tuba++;
      }

    }

  }

  // Determine result
  var counts = "Drum: " + drum + " , " +
               "Trumpet: " + trumpet  + " ," +
               "Saxophone: " + sax + " , " +
               "Clarinet: " + clarinet  + " , " +
               "Tuba: " + tuba + " , " +
               "Color Guard: " + guard;

  // What is the highest value?
  var max = Math.max(drum, trumpet, guard, sax, tuba, clarinet);

  // Form a message
  var message;

  if (max == drum) {
    message = "drum.";
  }
  else if (max == trumpet) {
    message = "trumpet.";
  }
  else if (max == guard) {
    message = "guard";
  }
  else if (max == sax) {
    message = "saxophone.";
  }
  else if (max == tuba) {
    message = "tuba.";
  }
  else if (max == clarinet) {
    message = "clarinet";
  }

  // Display result
  document.getElementById('result-text').innerHTML = counts;
  // document.getElementById('result-text').innerHTML = message;
}
