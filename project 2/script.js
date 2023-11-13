$(function () {
  var pet_info = {
      name: "Buddy",
      weight: 5,
      happiness: 5,
      level: 1,
      happinessThreshold1: 20,
      happinessThreshold2: 30
  };

  checkAndUpdatePetInfoInHtml();

  $('.treat-button').click(clickedTreatButton);
  $('.play-button').click(clickedPlayButton);
  $('.exercise-button').click(clickedExerciseButton);
  $('.new-button').click(clickedNewButton);

  function clickedTreatButton() {
      if (pet_info.happiness < pet_info.happinessThreshold1) {
        pet_info.happiness += 2;
        pet_info.weight += 5;
        checkAndUpdatePetInfoInHtml();
        playSound('actionSound');
        // checkHappinessThreshold();
        if (pet_info.happiness >= pet_info.happinessThreshold1) {
          playSound('prowlerSound');
          changePetImage('pictures/rathalos_azure.jpg')
          pet_info.level = 2;
          checkAndUpdatePetInfoInHtml();
        }
        showNotification("   Yum! That treat was delicious.   ").trim();
        updateSuggestions();
      }

      else if (pet_info.happiness >= pet_info.happinessThreshold1 && pet_info.happiness < pet_info.happinessThreshold2) {
        pet_info.happiness += 2;
        pet_info.weight += 5;
        checkAndUpdatePetInfoInHtml();
        playSound('actionSound');
        // checkHappinessThreshold();
        if (pet_info.happiness >= pet_info.happinessThreshold2) {
          playSound('prowlerSound');
          changePetImage('pictures/rathalos_silver.jpg')
          pet_info.level = "MAX";
          checkAndUpdatePetInfoInHtml();
        }
        showNotification("Yum! That treat was delicious.");
        updateSuggestions();
      }

      else if (pet_info.happiness >= pet_info.happinessThreshold2) {
        pet_info.happiness += 2;
        pet_info.weight += 5;
        checkAndUpdatePetInfoInHtml();
        playSound('actionSound');
        showNotification("Yum! That treat was delicious.");
        updateSuggestions();
      }

      
      updateSuggestions();
  }

  function clickedPlayButton() {

    if (pet_info.happiness < pet_info.happinessThreshold1) {
      pet_info.happiness += 2;
      pet_info.weight -= 1;
      checkAndUpdatePetInfoInHtml();
      playSound('actionSound');
      // checkHappinessThreshold();
      if (pet_info.happiness >= pet_info.happinessThreshold1) {
        playSound('prowlerSound');
        changePetImage('pictures/rathalos_azure.jpg')
        pet_info.level = 2;
        checkAndUpdatePetInfoInHtml();
      }
      showNotification("Let's play! That was fun.");
      updateSuggestions();
    }

    else if (pet_info.happiness >= pet_info.happinessThreshold1 && pet_info.happiness < pet_info.happinessThreshold2) {
      pet_info.happiness += 2;
      pet_info.weight -= 1;
      checkAndUpdatePetInfoInHtml();
      playSound('actionSound');
      // checkHappinessThreshold();
      if (pet_info.happiness >= pet_info.happinessThreshold2) {
        playSound('prowlerSound');
        changePetImage('pictures/rathalos_silver.jpg')
        pet_info.level = "MAX";
        checkAndUpdatePetInfoInHtml();
      }
      showNotification("Let's play! That was fun.");
      updateSuggestions();
    }

    else if (pet_info.happiness >= pet_info.happinessThreshold2) {
      pet_info.happiness += 2;
      pet_info.weight -= 1;
      checkAndUpdatePetInfoInHtml();
      playSound('actionSound');
      showNotification("Let's play! That was fun.");
      updateSuggestions();
    }
    updateSuggestions();
  }

  function clickedExerciseButton() {
      if (pet_info.happiness < pet_info.happinessThreshold1) {
        pet_info.happiness -= 5;
        pet_info.weight -= 5;
        checkAndUpdatePetInfoInHtml();
        playSound('actionSound');
        // checkHappinessThreshold();
        if (pet_info.happiness >= pet_info.happinessThreshold1) {
          playSound('prowlerSound');
          changePetImage('pictures/rathalos_azure.jpg')
        }
        showNotification("I hate exercising. I hate you, Dad.");
        updateSuggestions();
      }
  
      else if (pet_info.happiness >= pet_info.happinessThreshold1 && pet_info.happiness < pet_info.happinessThreshold2) {
        pet_info.happiness -= 5;
        pet_info.weight -= 5;
        checkAndUpdatePetInfoInHtml();
        playSound('actionSound');
        // checkHappinessThreshold();
        if (pet_info.happiness >= pet_info.happinessThreshold2) {
          playSound('prowlerSound');
          changePetImage('pictures/rathalos_silver.jpg')
        }
        showNotification("I hate exercising. I hate you, Dad.");
        updateSuggestions();
      }
  
      else if (pet_info.happiness >= pet_info.happinessThreshold2) {
        pet_info.happiness -= 5;
        pet_info.weight -= 5;
        checkAndUpdatePetInfoInHtml();
        playSound('actionSound');
        showNotification("I hate exercising. I hate you, Dad.");
        updateSuggestions();
      }
  }

  function clickedNewButton() {
    playSound('actionSound');

    const songs = [
      'song1', // Ed Sheeran
      'song2', // Chris Brown
      'song3', // One Direction
      'song4', // Radiohead
      'song5', // The Script
      'song6', // A$AP
    ]


      const randomIndex = Math.floor(Math.random() * songs.length);
      const randomSongId = songs[randomIndex];
      const song = document.getElementById(randomSongId);

      song.play();

      switch (randomSongId) {
        case 'song1': 
          showNotification("Very VERY good song. +++Happiness");
          pet_info.happiness += 5;
          break;
        case 'song2': 
          showNotification("Ok song. No effect.");
          break;
        case 'song3': 
          showNotification("Very VERY bad song. ---Happiness, ---Weight");
          pet_info.happiness -= 5;
          pet_info.weight -= 5;
          break;  
        case 'song4': 
          showNotification("Very VERY sad song. ---Happiness, +++Weight");
          pet_info.happiness -= 5;
          pet_info.weight += 5;
          break;  
        case 'song5': 
          showNotification("EXTREMELY SAD SONG. Happiness reset to 0.");
          pet_info.happiness = 0;
          break;            
        case 'song6': 
          showNotification("Ok song. No effect.");
          break;  
      }

      checkAndUpdatePetInfoInHtml();
      updateSuggestions();

  }
  function showNotification(message) {
      var notification = $('<p class="notification">' + message + '</p>');
      $('.button-container').append(notification);

      // Use jQuery to animate the opacity property
      notification.animate({ opacity: 0 }, 3000, function () {
          // Remove the notification after the animation is complete
          notification.remove();
      });
  }

  function playSound(soundId) {
      var audioElement = document.getElementById(soundId);
      audioElement.play();
  }

  function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();
      updatePetInfoInHtml();
  }

  function checkWeightAndHappinessBeforeUpdating() {
      if (pet_info.happiness < 0) {
          pet_info.happiness = 0;
      }
      if (pet_info.weight < 0) {
          pet_info.weight = 0;
      }
  }

  function updatePetInfoInHtml() {
      $('.name').text(pet_info.name);
      $('.weight').text(pet_info.weight);
      $('.happiness').text(pet_info.happiness);
      $('.level').text(pet_info.level);
  }

  function updateSuggestions() {
      var suggestionsContainer = $('.suggestions');
      suggestionsContainer.empty() // Clear previous suggestions

      // Check pet's state and add suggestions accordingly
      if (pet_info.happiness < 10) {
          addSuggestion("Your pet is extremely depressed.");
          playSound('helpSound');
      }

      if (pet_info.weight > 20) {
          addSuggestion("Your pet is overweight.");
          playSound('helpSound');
      }

      if (pet_info.weight < 10) {
          addSuggestion("Your pet is severely underweight.");
          playSound('helpSound');
      }
  }

  function addSuggestion(suggestionText) {
      var suggestion = $('<div class="suggestion">' + suggestionText + '</div>');
      $('.suggestions').append(suggestion);
      suggestion.hide().fadeIn(3000); // Add fade-in effect
  }

  function changePetImage(imagePath) {
      var petImage = $('.pet-image');
      petImage.fadeOut(500, function () {
          petImage.attr('src', imagePath).fadeIn(500);
      });
  }
});
