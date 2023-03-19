function startSportsDay(scores, onRedFinished, onYellowFinished, onBlueFinished, onGreenFinished) {
    // initialize the scores to 0
    const currentScores = { red: 0, blue: 0, green: 0, yellow: 0 };
    
    // callback function for red team
    function redTeam(onFinished) {
      console.log('Red team started');
      setTimeout(() => {
        currentScores.red += scores.red;
        console.log('Red team finished');
        onFinished(currentScores.red);
      }, 2000);
    }
    
    // callback function for yellow team
    function yellowTeam(onFinished) {
      console.log('Yellow team started');
      setTimeout(() => {
        currentScores.yellow += scores.yellow;
        console.log('Yellow team finished');
        onFinished(currentScores.yellow);
      }, 3000);
    }
    
    // callback function for blue team
    function blueTeam(onFinished) {
      console.log('Blue team started');
      setTimeout(() => {
        currentScores.blue += scores.blue;
        console.log('Blue team finished');
        onFinished(currentScores.blue);
      }, 4000);
    }
    
    // callback function for green team
    function greenTeam(onFinished) {
      console.log('Green team started');
      setTimeout(() => {
        currentScores.green += scores.green;
        console.log('Green team finished');
        onFinished(currentScores.green);
      }, 1000);
    }
    
    // start the sports day
    redTeam((redScore) => {
      console.log(`Red team score: ${redScore}`);
      yellowTeam((yellowScore) => {
        console.log(`Yellow team score: ${yellowScore}`);
        blueTeam((blueScore) => {
          console.log(`Blue team score: ${blueScore}`);
          greenTeam((greenScore) => {
            console.log(`Green team score: ${greenScore}`);
            onRedFinished(currentScores.red);
            onYellowFinished(currentScores.yellow);
            onBlueFinished(currentScores.blue);
            onGreenFinished(currentScores.green);
          });
        });
      });
    });
  }
  
  // example usage
  startSportsDay(
    { red: 100, blue: 50, green: 150, yellow: 100 },
    (redScore) => console.log(`Red team final score: ${redScore}`),
    (yellowScore) => console.log(`Yellow team final score: ${yellowScore}`),
    (blueScore) => console.log(`Blue team final score: ${blueScore}`),
    (greenScore) => console.log(`Green team final score: ${greenScore}`)
  );
  