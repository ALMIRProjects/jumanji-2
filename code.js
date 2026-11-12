var Pchar1e = 0;
var Pchar2e = 0;
var Pchar2e = 0;
var PMchar1e = 0;
var Pchar2eD = 0;
var PMchar2e = 0;
var Pchar3e = 0;
var Pchar4e = 0;
var Left = 0;
var Right = 0;
var Play = 0;
var RingScore = 0;
var coin = 0;
var BS;
var Lives = 3;
var gamespeed = 2;
var keyspeed = 1000;
var arrowspeed = 150;
var shiftposition = 0;
var Selectchar1e = 75;
var Selectchar2e = 170;
var Selectchar2e = 265;
var SelectMetalchar1e = 360;
var Selectchar6e = 455;
var Selectchar5e = 550;
var Selectchar3e = 645;
var Selectchar4e = 740;

//Title Screen
playSound("assets/StardustSpeedway2.mp3", true);
onEvent("Start", "click", function(event) {
  stopSound("BlueSpheresLoop.mp3");
  playSound("MenuAccept.mp3", false);
  console.log("Start clicked!");
  CharacterSelectShift();
  setScreen("DeviceSelect");
});

//Devices
onEvent("Desktop", "click", function(event) {
  console.log("Game Speed = 1");
  gamespeed = 1;
  keyspeed = 2000;
  arrowspeed = 200;
  stopSound("BlueSpheresLoop.mp3");
  playSound("MenuAccept.mp3", false);
  setScreen("Character");
});

onEvent("Laptop", "click", function(event) {
  console.log("Game Speed = 2");
  gamespeed = 2;
  keyspeed = 1000;
  arrowspeed = 150;
  stopSound("BlueSpheresLoop.mp3");
  playSound("MenuAccept.mp3", false);
  setScreen("Character");
});

onEvent("Tablet", "click", function(event) {
  console.log("Game Speed = 5");
  gamespeed = 5;
  keyspeed = 800;
  arrowspeed = 100;
  stopSound("BlueSpheresLoop.mp3");
  playSound("MenuAccept.mp3", false);
  setScreen("Character");
});

onEvent("Mobile", "click", function(event) {
  console.log("Game Speed = 10");
  gamespeed = 10;
  keyspeed = 400;
  arrowspeed = 50;
  stopSound("BlueSpheresLoop.mp3");
  playSound("MenuAccept.mp3", false);
  setScreen("Character");
});

// Credits
onEvent("Credits", "click", function(event) {
  stopSound("BlueSpheresLoop.mp3");
  playSound("MenuAccept.mp3", false);
  setScreen("Credit");
});

onEvent("Return", "click", function(event) {
  stopSound("BlueSpheresLoop.mp3");
  playSound("MenuAccept.mp3", false);
  setScreen("Character");
});

//Pause
onEvent("Pause", "click", function( ) {
  Pause = 1;
  playSound("MenuAccept.mp3", false);
  hideElement("Pause");
  showElement("Play");
  showElement("Paused");
  showElement("Refresh");
  showElement("Block");
  Check();
});
onEvent("Play", "click", function() {
  playSound("MenuAccept.mp3", false);
  UnPause();
  Check();
});
function Check() {
  ringM();
  spikeM();
}

onEvent("Refresh", "click", function( ) {
  Refresh();
  Begin();
});

//Character
onEvent("CharacterSelDown", "click", function( ) {
  if (shiftposition < 5) {
    stopSound("BlueSpheresLoop.mp3");
    playSound("assets/MenuBleep.mp3", false);
    shiftposition = shiftposition + 1;
    Selectchar1e = Selectchar1e - 95;
    Selectchar2e = Selectchar2e - 95;
    Selectchar2e = Selectchar2e - 95;
    SelectMetalchar1e = SelectMetalchar1e - 95;
    Selectchar6e = Selectchar6e - 95;
    Selectchar5e = Selectchar5e - 95;
    Selectchar3e = Selectchar3e - 95;
    Selectchar4e = Selectchar4e - 95;
    CharacterSelectShift();
  } else {
   shiftposition = 5;
  }
});

onEvent("CharacterSelUp", "click", function( ) {
  if (shiftposition > 0) {
    stopSound("BlueSpheresLoop.mp3");
  playSound("assets/MenuBleep.mp3", false);
  shiftposition = shiftposition - 1;
  Selectchar1e = Selectchar1e + 95;
  Selectchar2e = Selectchar2e + 95;
  Selectchar2e = Selectchar2e + 95;
  SelectMetalchar1e = SelectMetalchar1e + 95;
  Selectchar6e = Selectchar6e + 95;
  Selectchar5e = Selectchar5e + 95;
  Selectchar3e = Selectchar3e + 95;
  Selectchar4e = Selectchar4e + 95;
  CharacterSelectShift();  
  } else {
  shiftposition = 0;
  }
});

onEvent("Selchar1e", "click", function(event) {
  console.log("Selchar1e clicked!");
  setImageURL("ring", "assets/r.gif");
  setImageURL("Ringhud", "assets/Ring.gif");
  setImageURL("RingHud", "assets/Ring.gif");
  coin = 0;
  ischar1e();
});
  
onEvent("Selchar2e", "click", function(event) {
  console.log("Selchar2e clicked!");
  setImageURL("ring", "assets/r.gif");
  setImageURL("Ringhud", "assets/Ring.gif");
  setImageURL("RingHud", "assets/Ring.gif");
  coin = 0;
  ischar2e();
});  
  
onEvent("Selchar2e", "click", function(event) {
  console.log("SelKunckles clicked!");
  setImageURL("ring", "assets/r.gif");
  setImageURL("Ringhud", "assets/Ring.gif");
  setImageURL("RingHud", "assets/Ring.gif");
  coin = 0;
  ischar2e();
});

onEvent("SelMchar1e", "click", function(event) {
  console.log("SelMchar1e clicked!");
  setImageURL("ring", "assets/r.gif");
  setImageURL("Ringhud", "assets/Ring.gif");
  setImageURL("RingHud", "assets/Ring.gif");
  coin = 0;
  isMchar1e();
});

onEvent("Selchar2eD", "click", function(event) {
  console.log("Selchar2eD clicked!");
  setImageURL("ring", "assets/r.gif");
  setImageURL("Ringhud", "assets/Ring.gif");
  setImageURL("RingHud", "assets/Ring.gif");
  coin = 0;
  ischar2eD();
});

onEvent("SelMchar2e", "click", function(event) {
  console.log("SelMchar2e clicked!");
  setImageURL("ring", "assets/r.gif");
  setImageURL("Ringhud", "assets/Ring.gif");
  setImageURL("RingHud", "assets/Ring.gif");
  coin = 0;
  isMchar2e();
});


onEvent("SelMSU", "click", function(event) {
  console.log("SelMSU clicked!");
  UnlockMchar1e();
});

onEvent("SelTDU", "click", function(event) {
  console.log("SelTDU clicked!");
  Unlockchar2eD();
});

onEvent("SelMKU", "click", function(event) {
  console.log("SelMKU clicked!");
  UnlockMchar2e();
});

onEvent("SelMU", "click", function(event) {
  console.log("SelMU clicked!");
  Unlockchar3e();
});

onEvent("SelLU", "click", function(event) {
  console.log("SelLU clicked!");
  Unlockchar4e();
});

//Keyboard
var xVel = 0;
var yVel = 0;
var keys = [false, false, false, false];
var Sonlox = 115;

//Story
onEvent("Begin", "click", function(event) {
  console.log("Begin clicked!");
  Begin();
});
function Begin() {
  stopSound("assets/StardustSpeedway2.mp3");
  stopSound("BlueSpheresLoop.mp3");
  playSound("MenuAccept.mp3", false);
  playSound("Go.mp3", false);
  playSound("assets/BlueSpheresStart.mp3", false);
  BS = setTimeout(function() {
    playSound("BlueSpheresLoop.mp3", true);
    if (getTime(BS) > 5500) {
      clearTimeout(BS);
    }
  }, 5500);
  timedLoop(keyspeed, function() {
    if (keys[0]) {
      Left = 1;
      moveSon();
    }
    if (keys[1]) {
      Right = 1;
      moveSon();
    }
  });
  Play = 1;
  Left = 0;
  Right = 0;
  ringM();
  spikeM();
  setScreen("World");
}

//Movement Function
var Sonloy = 300;
var ringx = 135;
var ringy = 235;
var ringo = 0;
var RingCol = 1;
var Sonloy2 = Sonloy + 75;
var Rail = [15, 35, 55, 75, 95, 115, 135, 155, 175, 195, 215, 235, 255];
var RailR;
var AS = 0;
var sanic = 0;
var AT = 0;
var tales = 0;
var AK = 0;
var kukles = 0;
var AMS = 0;
var ATD = 0;
var AMK = 0;
var AM = 0;
var AL = 0;
var MS = 0;
var TD = 0;
var MK = 0;
var M = 0;
var L = 0;
var spikex = 195;
var spikey = 235;
var spikeo = 0;
var SpikeCol = 1;
var SpikeR;
var Pause = 0;
SRposit();
onEvent("l1", "mousedown", function(event) {
  if (Pause == 0) {
    Left = 1;
    moveSon();
  }
});
onEvent("r1", "mousedown", function(event) {
  if (Pause == 0) {
    Right = 1;
    moveSon();
  }
});
onEvent("l1", "mouseup", function(event) {
  Left = 0;
});
onEvent("r1", "mouseup", function(event) {
  Right = 0;
});
function moveSon() {
  if (Left == 1) {
    Sonlox = Sonlox - 20;
    setPosition("char1e", Sonlox, 300, -100, 115);
    setTimeout(function() {
      if (Left == 1) {
        moveSon();
      }
    }, arrowspeed);
    SRposit();
  }
  if (getXPosition("char1e") < 0) {
    Sonlox = -5;
    setPosition("char1e", Sonlox, 300, -100, 115);
  }
  
  if (Right == 1) {
    Sonlox = Sonlox + 20;
    setPosition("char1e", Sonlox, 300, 100, 115);
    setTimeout(function() {
      if (Right == 1) {
        moveSon();
      }
    }, arrowspeed);
    SRposit();
  }
  if (getXPosition("char1e") > 250) {
    Sonlox = 235;
    setPosition("char1e", Sonlox, 300, -100, 115);
  }
}


//Ring
function ringCollect() {
  if (Sonlox == ringx - 20 && Sonloy2 == ringy + 40 || Sonlox == ringx - 40 && Sonloy2 == ringy + 40 || Sonlox == ringx - 20 && Sonloy == ringy || (Sonlox == ringx - 40) && Sonloy == ringy) {
    SRposit();
    hideElement("ring");
    if (RingCol == 1) {
      RingScore++;
      if (coin == 1) {
        playSound("Coin.mp3", false);
      } else {
        playSound("assets/Ring.mp3", false);
      }
      setNumber("RingScore", RingScore);
      setNumber("RingScoreB", RingScore);
      RingCol = 0;
    }
    if (RingScore > 49) {
      Awards();
    }
    if (RingScore > 99) {
      Stars();
    }
  }
}
function PreventRing() {
  if (getYPosition("ring") > 449) {
    ringo = 1;
    ringy = 235;
    RailR = randomNumber(12);
    ringx = Rail[RailR];
    setPosition("ring", ringx, ringy, -100, 115);
    if (RingCol == 0) {
      RingCol = 1;
      showElement("ring");
    }
    ringo = 0;
  }
}

function ringM() {
  if (Pause == 0) {
    setTimeout(function() {
      if (Play == 1&&Pause == 0) {
        ringy = ringy + gamespeed;
        setPosition("ring", ringx, ringy, 45, 45);
        PreventRing();
        ringCollect();
        ringM();
      }
    }, 1);
  }
}


//Spike
function spikeCollect() {
  if (Sonlox == spikex - 20 && Sonloy2 == spikey + 40 || Sonlox == spikex - 40 && Sonloy2 == spikey + 40 || Sonlox == spikex - 20 && Sonloy == spikey || (Sonlox == spikex - 40) && Sonloy == spikey) {
    SRposit();
    hideElement("spike");
    if (SpikeCol == 1) {
      Lives--;
      playSound("assets/Hurt.mp3", false);
      setNumber("LifeN", Lives);
      setNumber("LifeNB", Lives);
      SpikeCol = 0;
      Life();
    }
  }
}
function PreventSpike() {
  if (getYPosition("spike") > 449) {
    spikeo = 1;
    spikey = 235;
    SpikeR = randomNumber(12);
    spikex = Rail[SpikeR];
    setPosition("spike", spikex, spikey, -100, 115);
    if (SpikeCol == 0) {
      SpikeCol = 1;
      showElement("spike");
    }
    spikeo = 0;
  }
}

function spikeM() {
  if (Pause == 0) {
    setTimeout(function() {
      if (Play == 1&&Pause == 0) {
        spikey = spikey + gamespeed;
        setPosition("spike", spikex, spikey, 45, 45);
        PreventSpike();
        spikeCollect();
        spikeM();
      }
    }, 1);
  }
}

//Characters and other
function CharacterSelectShift() {
  setPosition("Selchar1e", 5, Selectchar1e, 310, 80);
  setPosition("100char1e", 285, Selectchar1e, 30, 30);
  setPosition("Selchar2e", 5, Selectchar2e, 310, 80);
  setPosition("100char2e", 285, Selectchar2e, 30, 30);
  setPosition("Selchar2e", 5, Selectchar2e, 310, 80);
  setPosition("100char2e", 285, Selectchar2e, 30, 30);
  setPosition("SelMchar1e", 5, SelectMetalchar1e, 310, 80);
  setPosition("SelMSU", 5, SelectMetalchar1e, 310, 80);
  setPosition("100Metal", 285, SelectMetalchar1e, 30, 30);
  setPosition("Selchar2eD", 5, Selectchar6e, 310, 80);
  setPosition("SelTDU", 5, Selectchar6e, 310, 80);
  setPosition("100char6e", 285, Selectchar6e, 30, 30);
  setPosition("SelMchar2e", 5, Selectchar5e, 310, 80);
  setPosition("SelMKU", 5, Selectchar5e, 310, 80);
  setPosition("100char5e", 285, Selectchar5e, 30, 30);
  setPosition("Selchar3e", 5, Selectchar3e, 310, 80);
  setPosition("SelMU", 5, Selectchar3e, 310, 80);
  setPosition("100char3e", 285, Selectchar3e, 30, 30);
  setPosition("Selchar4e", 5, Selectchar4e, 310, 80);
  setPosition("SelLU", 5, Selectchar4e, 310, 80);
  setPosition("100char4e", 285, Selectchar4e, 30, 30);
}
function SRposit() {
  console.log("SX = " + Sonlox);
  console.log("RX = " + ringx);
  console.log("SY = " + Sonloy);
  console.log("RY = " + ringy);
  console.log("SPX = " + spikex);
  console.log("SPY = " + spikey);
}
function Results() {
  if (RingScore > 99) {
    setImageURL("Rank", "assets/X.gif");
  } else if ((RingScore > 49)) {
    setImageURL("Rank", "assets/S.gif");
  } else if ((RingScore > 39)) {
    setImageURL("Rank", "assets/A.gif");
  } else if ((RingScore > 29)) {
    setImageURL("Rank", "B.gif");
  } else if ((RingScore > 19)) {
    setImageURL("Rank", "assets/C.gif");
  } else if ((RingScore > 9)) {
    setImageURL("Rank", "assets/D.gif");
  } else {
    setImageURL("Rank", "assets/E.gif");
  }
}
function ischar1e() {
  playSound("char1e.mp3", false);
  stopSound("BlueSpheresLoop.mp3");
  playSound("MenuAccept.mp3", false);
  setImageURL("char1e", "assets/char1eR.gif");
  setImageURL("Life", "Lchar1e.gif");
  Pchar1e = 1;
  Pchar2e = 0;
  Pchar2e = 0;
  PMchar1e = 0;
  Pchar2eD = 0;
  PMchar2e = 0;
  Pchar3e = 0;
  Pchar4e = 0;
  playSound("MenuAccept.mp3", false);
  setScreen("Story");
}

function ischar2e() {
  playSound("char2e.mp3", false);
  stopSound("BlueSpheresLoop.mp3");
  playSound("MenuAccept.mp3", false);
  setImageURL("char1e", "assets/char2eR.gif");
  setImageURL("Life", "Lchar2e.gif");
  Pchar2e = 1;
  Pchar2e = 0;
  Pchar1e = 0;
  PMchar1e = 0;
  Pchar2eD = 0;
  PMchar2e = 0;
  Pchar3e = 0;
  Pchar4e = 0;
  setScreen("Story");
}

function ischar2e() {
  playSound("char2e.mp3", false);
  stopSound("BlueSpheresLoop.mp3");
  playSound("MenuAccept.mp3", false);
  setImageURL("char1e", "assets/char2eR.gif");
  setImageURL("Life", "Lchar2e.gif");
  Pchar2e = 1;
  Pchar2e = 0;
  Pchar1e = 0;
  PMchar1e = 0;
  Pchar2eD = 0;
  PMchar2e = 0;
  Pchar3e = 0;
  Pchar4e = 0;
  setScreen("Story");
}

function isMchar1e() {
  playSound("char1e.mp3", false);
  stopSound("BlueSpheresLoop.mp3");
  playSound("MenuAccept.mp3", false);
  setImageURL("char1e", "assets/Mchar1eR.gif");
  setImageURL("Life", "LMchar1e.gif");
  PMchar1e = 1;
  Pchar1e = 0;
  Pchar2e = 0;
  Pchar2e = 0;
  Pchar2eD = 0;
  PMchar2e = 0;
  Pchar3e = 0;
  Pchar4e = 0;
  setScreen("Story");
}

function UnlockMchar1e() {
  var MSU = prompt("Type in the Code to Unlock shelly obero (Case Sensitive)");
  if (MSU == "shelly oberon") {
    stopSound("BlueSpheresLoop.mp3");
    playSound("MedalCaught.mp3", false);
    sanic = 1;
    hideElement("SelMSU");
    showElement("SelMchar1e");
    MS = 1;
  } else {
    stopSound("BlueSpheresLoop.mp3");
    playSound("Fail.mp3", false);
  }
}

function ischar2eD() {
  playSound("char6eA.mp3", false);
  stopSound("BlueSpheresLoop.mp3");
  playSound("MenuAccept.mp3", false);
  setImageURL("char1e", "char6e R.gif");
  setImageURL("Life", "Lifechar6e.gif");
  Pchar2eD = 1;
  Pchar2e = 0;
  Pchar2e = 0;
  Pchar1e = 0;
  PMchar1e = 0;
  PMchar2e = 0;
  Pchar3e = 0;
  Pchar4e = 0;
  setScreen("Story");
}

function Unlockchar2eD() {
  var TDU = prompt("Type in the Code to shelly oberon");
  if (TDU == "shelly oberon1") {
    stopSound("BlueSpheresLoop.mp3");
    playSound("MedalCaught.mp3", false);
    tales = 1;
    hideElement("SelTDU");
    showElement("Selchar2eD");
    TD = 1;
  } else {
    stopSound("BlueSpheresLoop.mp3");
    playSound("Fail.mp3", false);
  }
}

function isMchar2e() {
  playSound("char5eA.mp3", false);
  stopSound("BlueSpheresLoop.mp3");
  playSound("MenuAccept.mp3", false);
  setImageURL("char1e", "char5e R.gif");
  setImageURL("Life", "Lifechar5e.gif");
  PMchar2e = 1;
  Pchar2e = 0;
  Pchar2e = 0;
  Pchar1e = 0;
  PMchar1e = 0;
  Pchar2eD = 0;
  Pchar3e = 0;
  Pchar4e = 0;
  setScreen("Story");
}

function UnlockMchar2e() {
  var MKU = prompt("Type in the Code to Unlock shelly oberon");
  if (MKU == "shelly oberon") {
    stopSound("BlueSpheresLoop.mp3");
    playSound("MedalCaught.mp3", false);
    kukles = 1;
    hideElement("SelMKU");
    showElement("SelMchar2e");
    MK = 1;
  } else {
    stopSound("BlueSpheresLoop.mp3");
    playSound("Fail.mp3", false);
  }
}





function Awards() {
  if (Pchar1e == 1 && AS == 0) {
    showElement("50char1e");
    playSound("Continue.mp3", false);
    AS = 1;
    sanic = 2;
  }
  if (Pchar2e == 1 && AT == 0) {
    showElement("50char2e");
    playSound("Continue.mp3", false);
    AT = 1;
    tales = 2;
  }
  if (Pchar2e == 1 && AK == 0) {
    showElement("50char2e");
    playSound("Continue.mp3", false);
    AK = 1;
    kukles = 2;
  }
  if (PMchar1e == 1 && AMS == 0) {
    showElement("50Mchar1e");
    playSound("Continue.mp3", false);
    AMS = 1;
  }
  if (Pchar2eD == 1 && ATD == 0) {
    showElement("50char2eD");
    playSound("Continue.mp3", false);
    ATD = 1;
  }
  if (PMchar2e == 1 && AMK == 0) {
    showElement("50Mchar2e");
    playSound("Continue.mp3", false);
    AMK = 1;
  }
  if (Pchar3e == 1 && AM == 0) {
    showElement("50char3e");
    playSound("Continue.mp3", false);
    AM = 1;
  }
  if (Pchar4e == 1 && AL == 0) {
    showElement("50char4e");
    playSound("Continue.mp3", false);
    AL = 1;
  }
}

function Stars() {
  if (Pchar1e == 1 && AS == 1) {
    showElement("100char1e");
    playSound("Continue.mp3", false);
    AS = 3;
  }
  if (Pchar2e == 1 && AT == 1) {
    showElement("100char2e");
    playSound("Continue.mp3", false);
    AT = 3;
  }
  if (Pchar2e == 1 && AK == 1) {
    showElement("100char2e");
    playSound("Continue.mp3", false);
    AK = 3;
  }
  if (PMchar1e == 1 && AMS == 1) {
    showElement("100Metal");
    playSound("Continue.mp3", false);
    AMS = 3;
  }
  if (Pchar2eD == 1 && ATD == 1) {
    showElement("100char6e");
    playSound("Continue.mp3", false);
    ATD = 3;
  }
  if (PMchar2e == 1 && AMK == 1) {
    showElement("100char5e");
    playSound("Continue.mp3", false);
    AMK = 3;
  }
  if (Pchar3e == 1 && AM == 1) {
    showElement("100char3e");
    playSound("Continue.mp3", false);
    AM = 3;
  }
  if (Pchar4e == 1 && AL == 1) {
    showElement("100char4e");
    playSound("Continue.mp3", false);
    AL = 3;
  }
}

function endChar() {
  if (Pchar1e == 1) {
    setImageURL("Name", "char1e.gif");
    setPosition("Name", -5, 5, 215, 35);
    playSound("char1eWins.mp3", false);
  }
  if (Pchar2e == 1) {
    setImageURL("Name", "char2e.gif");
    setPosition("Name", -5, 5, 215, 35);
    playSound("char2eWins.mp3", false);
  }
  if (Pchar2e == 1) {
    setImageURL("Name", "char2e.gif");
    setPosition("Name", 10, 7, 215, 35);
    playSound("char3eWins.mp3", false);
  }
  if (PMchar1e == 1) {
    setImageURL("Name", "Mchar1e.gif");
    setPosition("Name", -5, 5, 215, 35);
    playSound("char1eWins.mp3", false);
  }
  if (Pchar2eD == 1) {
    setImageURL("Name", "char6eN.gif");
    setPosition("Name", -5, 5, 215, 35);
    playSound("char6eWin.mp3", false);
  }
  if (PMchar2e == 1) {
    setImageURL("Name", "char5eN.gif");
    setPosition("Name", 10, 7, 215, 35);
    playSound("char5eWin.mp3", false);
  }
  if (Pchar3e == 1) {
    setImageURL("Name", "char3e.png");
    setPosition("Name", -5, 5, 215, 35);
    playSound("char3eWins.mp3", false);
  }
  if (Pchar4e == 1) {
    setImageURL("Name", "char4e.png");
    setPosition("Name", -5, 5, 215, 35);
    playSound("char4eWins.mp3", false);
  }
}
function Life() {
  if (Lives == 0) {
  stopSound("assets/BlueSpheresStart.mp3");
  stopSound("BlueSpheresLoop.mp3");
  setNumber("RingRB", RingScore);
  setNumber("RingR", RingScore);
  playSound("assets/SSExit.mp3", false);
  
  Results();
  endChar();
  if (Pchar1e == 1 && sanic == 2 && MS == 0) {
    playSound("Event.mp3", false);
    setScreen("Unlocked");
    setImageURL("UName", "Mchar1e.gif");
    setPosition("UName", 45, 150, 215, 35);
    setText("Code", "SFMS");
  } else if (Pchar2e == 1 && tales == 2 && TD == 0) {
    playSound("Event.mp3", false);
    setScreen("Unlocked");
    setImageURL("UName", "char6eN.gif");
    setPosition("UName", 45, 150, 215, 35);
    setText("Code", "SSRS");
  } else if (Pchar2e == 1 && kukles == 2 && MK == 0) {
    playSound("Event.mp3", false);
    setScreen("Unlocked");
    setImageURL("UName", "char5eN.gif");
    setPosition("UName", 60, 152, 215, 35);
    setText("Code", "KCMA");
  } else {
    console.log("Results clicked!");
    playSound("ActClear.mp3", false);
    setScreen("Results");
  }
  }
}
onEvent("Cont", "click", function(event) {
  console.log("Results clicked!");
  playSound("ActClear.mp3", false);
  setScreen("Results");
});


//Resets
onEvent("Block", "click", function(event) {
  Refresh();
});

onEvent("Restart", "click", function(event) {
  Refresh();
});
onEvent("SetSpeed", "click", function(event) {
  console.log("SetSpeed clicked!");
  stopSound("BlueSpheresLoop.mp3");
  playSound("MenuAccept.mp3", false);
  setScreen("DeviceSelect");
});
function Refresh() {
  stopSound("assets/BlueSpheresStart.mp3");
  stopSound("BlueSpheresLoop.mp3");
  stopSound("ActClear.mp3");
  stopSound("assets/SSExit.mp3");
  playSound("MenuAccept.mp3", false);
  playSound("assets/StardustSpeedway2.mp3", true);
  UnPause();
  Play = 0;
  console.log("char1e clicked!");
  Sonlox = 115;
  Sonloy = 300;
  ringx = 135;
  ringy = 235;
  ringo = 0;
  RingCol = 1;
  RingScore = 0;
  Left = 0;
  Right = 0;
  Lives = 3;
  spikex = 195;
  spikey = 235;
  spikeo = 0;
  SpikeCol = 1;
  setNumber("RingScore", RingScore);
  setNumber("RingScoreB", RingScore);
  setNumber("RingRB", RingScore);
  setNumber("RingR", RingScore);
  setNumber("LifeN", Lives);
  setNumber("LifeNB", Lives);
  showElement("spike");
  showElement("ring");
  setPosition("char1e", Sonlox, 300, -100, 115);
  setScreen("Character");
}

//Keyboard
onEvent("World", "keydown", function(event) {
  if (Pause == 0) {
    if (event.key == "Up") {
      keys[2] = false;
    } else if ((event.key == "Down")) {
      keys[3] = false;
    } else if ((event.key == "Left")) {
      keys[0] = true;
      Left = 1;
    } else if ((event.key == "Right")) {
      keys[1] = true;
      Right = 1;
    }
  }
});
onEvent("World", "keyup", function(event) {
  if (Pause == 0) {
    if (event.key == "Up") {
      keys[2] = false;
    } else if ((event.key == "Down")) {
      keys[3] = false;
    } else if ((event.key == "Left")) {
      keys[0] = false;
      Left = 0;
    } else if ((event.key == "Right")) {
      keys[1] = false;
      Right = 0;
    }
  }
});

function UnPause() {
  Pause = 0;
  hideElement("Play");
  showElement("Pause");
  hideElement("Paused");
  hideElement("Refresh");
  hideElement("Block");
}
