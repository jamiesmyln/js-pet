$(document).ready( function() {

  function hideEgg() {
    $ ("#egg").addClass( "animated shake" );

    setTimeout(function() {
        $ ("#hatch").addClass( "hide animated fadeOut" );
      }, 1000 );

    setTimeout(function() {
        $( "#egg" ).removeClass( "active" );
      }, 2000 );
  }

  function showPet() {
    setTimeout(function() {
        $ (".pet").addClass( "active pulse" );
      }, 2100 );
  }

  $( "#hatch" ).click(function() {
    hideEgg();
    showPet();
  });

  $("#feed").click(function(){
    $ (".pizza").addClass( "active fadeIn" );
    setTimeout(function() {
        $( ".pizza" ).removeClass( "active" );
      }, 2000 );
  });

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function causeEvent() {
    x = getRndInteger(0, 12)
    if ( x >= 0 && x <= 1 ) {
      poop = true;
      console.log("poop");
    } else if ( x >= 2 && x <= 3 ) {
      sick = true;
      console.log("sick");
    } else if ( x >= 4 && x <= 5 ) {
      trouble = true;
      console.log("trouble");
    } else if ( x >= 6 && x <= 7 ) {
      hungry = true;
      console.log("hungry");
    } else if ( x >= 8 && x <= 9 ) {
      sad = true;
      console.log("sad");
    } else {
      sleepy = true;
      console.log("sleepy");
    }
  }
  causeEvent();

  // Store
  var pet = {
    petName: "Mochi",
    petHealth: "Good",
    petHunger: "Full",
    petHappiness: "Happy",
    petDiscipline: "Nice",
    petSick: false,
    petPoop: false 
  }
  localStorage.game()

  function update(progress) {
  // Update the state of the world for the elapsed time since last render
  }

  function draw() {
    // Draw the state of the world
  }

  function loop(timestamp) {
    var progress = timestamp - lastRender

    update(progress)
    draw()

    lastRender = timestamp
    window.requestAnimationFrame(loop)
  }
  var lastRender = 0
  window.requestAnimationFrame(loop)


});
