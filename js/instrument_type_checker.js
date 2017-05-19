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
    message = "You got drums. You either joined because you're a musical prodigy or you've never been able to read music and watch 'Drumline' on repeat."

    img = "<img src='img/drummarchingband.jpeg'>";

  }
  else if (max == trumpet) {
    message = "You got trumpet. You spend your days popping blood vessels trying to hit the highest note only dogs can here. What an ego boost."

    img = "<img src='img/marchingbandtrumpet.jpg'>";
  }
  else if (max == guard) {
    message = "You're in the color guard. Your flag may not be an instrument, but it is definitely one deadly weapon."

    img = "<img src='img/marchingbandguard.jpg'>";
  }
  else if (max == sax) {
    message = "You're a saxophone player! You're the life of the party and all the chicks dig you. Good for you."

    img = "<img src='img/marchingband2.jpg'>";
  }
  else if (max == tuba) {
    message = "You got the tuba. No matter how many times you say it's a sousaphone we'll still call it a tuba."

    img = "<img src='img/clarinet.jpg'>";
  }
  else if (max == clarinet) {
    message = "You play the clarinet. You spend hours locked in your room mastering your craft to get back at all the kids who compared you to squidward."

    img = "<img src='img/tuba.jpg'>";
  }





  // Display result
  // document.getElementById('result-text').innerHTML = counts;
   document.getElementById('result-text').innerHTML = message;

}
