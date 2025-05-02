/********************* 
 * Corsi_Blocks *
 *********************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'corsi_blocks';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color([-1, -1, -1]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const text_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(text_loopLoopBegin(text_loopLoopScheduler));
flowScheduler.add(text_loopLoopScheduler);
flowScheduler.add(text_loopLoopEnd);


const photo_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(photo_loopLoopBegin(photo_loopLoopScheduler));
flowScheduler.add(photo_loopLoopScheduler);
flowScheduler.add(photo_loopLoopEnd);


const corsi_task_tLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(corsi_task_tLoopBegin(corsi_task_tLoopScheduler));
flowScheduler.add(corsi_task_tLoopScheduler);
flowScheduler.add(corsi_task_tLoopEnd);








flowScheduler.add(countdownRoutineBegin());
flowScheduler.add(countdownRoutineEachFrame());
flowScheduler.add(countdownRoutineEnd());
const corsi_taskLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(corsi_taskLoopBegin(corsi_taskLoopScheduler));
flowScheduler.add(corsi_taskLoopScheduler);
flowScheduler.add(corsi_taskLoopEnd);







flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'text.xlsx', 'path': 'text.xlsx'},
    {'name': 'images_t.xlsx', 'path': 'images_t.xlsx'},
    {'name': 'Images/photoI.jpg', 'path': 'Images/photoI.jpg'},
    {'name': 'Images/photoII.jpg', 'path': 'Images/photoII.jpg'},
    {'name': 'Images/photoIII.jpg', 'path': 'Images/photoIII.jpg'},
    {'name': 'Images/photoIV.jpg', 'path': 'Images/photoIV.jpg'},
    {'name': 'Images/photoV.jpg', 'path': 'Images/photoV.jpg'},
    {'name': 'Images/photoVI.jpg', 'path': 'Images/photoVI.jpg'},
    {'name': 'Images/photoVII.jpg', 'path': 'Images/photoVII.jpg'},
    {'name': 'CL_t.csv', 'path': 'CL_t.csv'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var WelcomeClock;
var text_Welcome;
var mouse_Welcome;
var instructions_tClock;
var image_t;
var mouse_instructions_t;
var ISI_tClock;
var nBlocks;
var blank_2;
var corsi_present_tClock;
var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7;
var box8;
var box9;
var corsi_respond_tClock;
var box1_2;
var box2_2;
var box3_2;
var box4_2;
var box5_2;
var box6_2;
var box7_2;
var box8_2;
var box9_2;
var corsi_mouse_t;
var submit_button_t;
var feedbackClock;
var fbtxt;
var instructionsClock;
var text_instructions;
var mouse_instructions;
var Play;
var Back;
var countdownClock;
var text_3;
var text_2;
var text_1;
var ISIClock;
var blank;
var corsi_presentClock;
var blk1_3;
var blk2_3;
var blk3_3;
var blk4_3;
var blk5_3;
var blk6_3;
var blk7_3;
var blk8_3;
var blk9_3;
var corsi_respondClock;
var blk1;
var blk2;
var blk3;
var blk4;
var blk5;
var blk6;
var blk7;
var blk8;
var blk9;
var corsi_mouse;
var submit_button;
var FBClock;
var incorrect_count;
var endClock;
var text_end;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Welcome"
  WelcomeClock = new util.Clock();
  text_Welcome = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_Welcome',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  mouse_Welcome = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_Welcome.mouseClock = new util.Clock();
  // Initialize components for Routine "instructions_t"
  instructions_tClock = new util.Clock();
  image_t = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_t', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  mouse_instructions_t = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_instructions_t.mouseClock = new util.Clock();
  // Initialize components for Routine "ISI_t"
  ISI_tClock = new util.Clock();
  // Run 'Begin Experiment' code from code_t2
  nBlocks = 2;
  
  blank_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'blank_2',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "corsi_present_t"
  corsi_present_tClock = new util.Clock();
  box1 = new visual.Rect ({
    win: psychoJS.window, name: 'box1', units : 'height', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color([1, 1, 1]), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: 0, 
    interpolate: true, 
  });
  
  box2 = new visual.Rect ({
    win: psychoJS.window, name: 'box2', units : 'height', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color([1, 1, 1]), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -1, 
    interpolate: true, 
  });
  
  box3 = new visual.Rect ({
    win: psychoJS.window, name: 'box3', units : 'height', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color([1, 1, 1]), 
    fillColor: new util.Color([1, 1, 1]), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -2, 
    interpolate: true, 
  });
  
  box4 = new visual.Rect ({
    win: psychoJS.window, name: 'box4', units : 'height', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color([1, 1, 1]), 
    fillColor: new util.Color([1, 1, 1]), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -3, 
    interpolate: true, 
  });
  
  box5 = new visual.Rect ({
    win: psychoJS.window, name: 'box5', units : 'height', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color([1, 1, 1]), 
    fillColor: new util.Color([1, 1, 1]), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -4, 
    interpolate: true, 
  });
  
  box6 = new visual.Rect ({
    win: psychoJS.window, name: 'box6', units : 'height', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color([1, 1, 1]), 
    fillColor: new util.Color([1, 1, 1]), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -5, 
    interpolate: true, 
  });
  
  box7 = new visual.Rect ({
    win: psychoJS.window, name: 'box7', units : 'height', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color([1, 1, 1]), 
    fillColor: new util.Color([1, 1, 1]), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -6, 
    interpolate: true, 
  });
  
  box8 = new visual.Rect ({
    win: psychoJS.window, name: 'box8', units : 'height', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color([1, 1, 1]), 
    fillColor: new util.Color([1, 1, 1]), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -7, 
    interpolate: true, 
  });
  
  box9 = new visual.Rect ({
    win: psychoJS.window, name: 'box9', units : 'height', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color([1, 1, 1]), 
    fillColor: new util.Color([1, 1, 1]), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -8, 
    interpolate: true, 
  });
  
  // Initialize components for Routine "corsi_respond_t"
  corsi_respond_tClock = new util.Clock();
  box1_2 = new visual.Rect ({
    win: psychoJS.window, name: 'box1_2', units : 'height', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color([1, 1, 1]), 
    fillColor: new util.Color([1, 1, 1]), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: 0, 
    interpolate: true, 
  });
  
  box2_2 = new visual.Rect ({
    win: psychoJS.window, name: 'box2_2', units : 'height', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color([1, 1, 1]), 
    fillColor: new util.Color([1, 1, 1]), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -1, 
    interpolate: true, 
  });
  
  box3_2 = new visual.Rect ({
    win: psychoJS.window, name: 'box3_2', units : 'height', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color([1, 1, 1]), 
    fillColor: new util.Color([1, 1, 1]), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -2, 
    interpolate: true, 
  });
  
  box4_2 = new visual.Rect ({
    win: psychoJS.window, name: 'box4_2', units : 'height', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color([1, 1, 1]), 
    fillColor: new util.Color([1, 1, 1]), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -3, 
    interpolate: true, 
  });
  
  box5_2 = new visual.Rect ({
    win: psychoJS.window, name: 'box5_2', units : 'height', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color([1, 1, 1]), 
    fillColor: new util.Color([1, 1, 1]), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -4, 
    interpolate: true, 
  });
  
  box6_2 = new visual.Rect ({
    win: psychoJS.window, name: 'box6_2', units : 'height', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color([1, 1, 1]), 
    fillColor: new util.Color([1, 1, 1]), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -5, 
    interpolate: true, 
  });
  
  box7_2 = new visual.Rect ({
    win: psychoJS.window, name: 'box7_2', units : 'height', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color([1, 1, 1]), 
    fillColor: new util.Color([1, 1, 1]), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -6, 
    interpolate: true, 
  });
  
  box8_2 = new visual.Rect ({
    win: psychoJS.window, name: 'box8_2', units : 'height', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color([1, 1, 1]), 
    fillColor: new util.Color([1, 1, 1]), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -7, 
    interpolate: true, 
  });
  
  box9_2 = new visual.Rect ({
    win: psychoJS.window, name: 'box9_2', units : 'height', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color([1, 1, 1]), 
    fillColor: new util.Color([1, 1, 1]), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -8, 
    interpolate: true, 
  });
  
  corsi_mouse_t = new core.Mouse({
    win: psychoJS.window,
  });
  corsi_mouse_t.mouseClock = new util.Clock();
  submit_button_t = new visual.TextBox({
    win: psychoJS.window,
    name: 'submit_button_t',
    text: 'Submit',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0.5, (- 0.4)], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.2, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: 'darkgrey', borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -11.0 
  });
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  fbtxt = new visual.TextStim({
    win: psychoJS.window,
    name: 'fbtxt',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  text_instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instructions',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  mouse_instructions = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_instructions.mouseClock = new util.Clock();
  Play = new visual.TextBox({
    win: psychoJS.window,
    name: 'Play',
    text: 'ไปต่อ',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0.25, (- 0.25)], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.3, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: 'darkgrey', borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Back = new visual.TextBox({
    win: psychoJS.window,
    name: 'Back',
    text: 'เล่นอีกครั้ง',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.25), (- 0.25)], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.3, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: 'darkgrey', borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  // Initialize components for Routine "countdown"
  countdownClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '3',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '2',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_1',
    text: '1',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "ISI"
  ISIClock = new util.Clock();
  blank = new visual.TextStim({
    win: psychoJS.window,
    name: 'blank',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Run 'Begin Experiment' code from setLocations
  nBlocks = 3;
  
  // Initialize components for Routine "corsi_present"
  corsi_presentClock = new util.Clock();
  blk1_3 = new visual.Rect ({
    win: psychoJS.window, name: 'blk1_3', units : 'height', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color([1, 1, 1]), 
    fillColor: new util.Color([1, 1, 1]), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -1, 
    interpolate: true, 
  });
  
  blk2_3 = new visual.Rect ({
    win: psychoJS.window, name: 'blk2_3', units : 'height', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color([1, 1, 1]), 
    fillColor: new util.Color([1, 1, 1]), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -2, 
    interpolate: true, 
  });
  
  blk3_3 = new visual.Rect ({
    win: psychoJS.window, name: 'blk3_3', units : 'height', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color([1, 1, 1]), 
    fillColor: new util.Color([1, 1, 1]), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -3, 
    interpolate: true, 
  });
  
  blk4_3 = new visual.Rect ({
    win: psychoJS.window, name: 'blk4_3', units : 'height', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color([1, 1, 1]), 
    fillColor: new util.Color([1, 1, 1]), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -4, 
    interpolate: true, 
  });
  
  blk5_3 = new visual.Rect ({
    win: psychoJS.window, name: 'blk5_3', units : 'height', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color([1, 1, 1]), 
    fillColor: new util.Color([1, 1, 1]), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -5, 
    interpolate: true, 
  });
  
  blk6_3 = new visual.Rect ({
    win: psychoJS.window, name: 'blk6_3', units : 'height', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color([1, 1, 1]), 
    fillColor: new util.Color([1, 1, 1]), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -6, 
    interpolate: true, 
  });
  
  blk7_3 = new visual.Rect ({
    win: psychoJS.window, name: 'blk7_3', units : 'height', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color([1, 1, 1]), 
    fillColor: new util.Color([1, 1, 1]), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -7, 
    interpolate: true, 
  });
  
  blk8_3 = new visual.Rect ({
    win: psychoJS.window, name: 'blk8_3', units : 'height', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color([1, 1, 1]), 
    fillColor: new util.Color([1, 1, 1]), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -8, 
    interpolate: true, 
  });
  
  blk9_3 = new visual.Rect ({
    win: psychoJS.window, name: 'blk9_3', units : 'height', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color([1, 1, 1]), 
    fillColor: new util.Color([1, 1, 1]), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -9, 
    interpolate: true, 
  });
  
  // Initialize components for Routine "corsi_respond"
  corsi_respondClock = new util.Clock();
  blk1 = new visual.Rect ({
    win: psychoJS.window, name: 'blk1', units : 'height', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color([1, 1, 1]), 
    fillColor: new util.Color([1, 1, 1]), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: 0, 
    interpolate: true, 
  });
  
  blk2 = new visual.Rect ({
    win: psychoJS.window, name: 'blk2', units : 'height', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color([1, 1, 1]), 
    fillColor: new util.Color([1, 1, 1]), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -1, 
    interpolate: true, 
  });
  
  blk3 = new visual.Rect ({
    win: psychoJS.window, name: 'blk3', units : 'height', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color([1, 1, 1]), 
    fillColor: new util.Color([1, 1, 1]), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -2, 
    interpolate: true, 
  });
  
  blk4 = new visual.Rect ({
    win: psychoJS.window, name: 'blk4', units : 'height', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color([1, 1, 1]), 
    fillColor: new util.Color([1, 1, 1]), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -3, 
    interpolate: true, 
  });
  
  blk5 = new visual.Rect ({
    win: psychoJS.window, name: 'blk5', units : 'height', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color([1, 1, 1]), 
    fillColor: new util.Color([1, 1, 1]), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -4, 
    interpolate: true, 
  });
  
  blk6 = new visual.Rect ({
    win: psychoJS.window, name: 'blk6', units : 'height', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color([1, 1, 1]), 
    fillColor: new util.Color([1, 1, 1]), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -5, 
    interpolate: true, 
  });
  
  blk7 = new visual.Rect ({
    win: psychoJS.window, name: 'blk7', units : 'height', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color([1, 1, 1]), 
    fillColor: new util.Color([1, 1, 1]), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -6, 
    interpolate: true, 
  });
  
  blk8 = new visual.Rect ({
    win: psychoJS.window, name: 'blk8', units : 'height', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color([1, 1, 1]), 
    fillColor: new util.Color([1, 1, 1]), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -7, 
    interpolate: true, 
  });
  
  blk9 = new visual.Rect ({
    win: psychoJS.window, name: 'blk9', units : 'height', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color([1, 1, 1]), 
    fillColor: new util.Color([1, 1, 1]), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -8, 
    interpolate: true, 
  });
  
  corsi_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  corsi_mouse.mouseClock = new util.Clock();
  submit_button = new visual.TextBox({
    win: psychoJS.window,
    name: 'submit_button',
    text: 'Submit',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0.5, (- 0.4)], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.2, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: 'darkgrey', borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -11.0 
  });
  
  // Initialize components for Routine "FB"
  FBClock = new util.Clock();
  // Run 'Begin Experiment' code from end_task
  incorrect_count = 0;
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  text_end = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_end',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var text_loop;
function text_loopLoopBegin(text_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    text_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'text.xlsx',
      seed: undefined, name: 'text_loop'
    });
    psychoJS.experiment.addLoop(text_loop); // add the loop to the experiment
    currentLoop = text_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisText_loop of text_loop) {
      snapshot = text_loop.getSnapshot();
      text_loopLoopScheduler.add(importConditions(snapshot));
      text_loopLoopScheduler.add(WelcomeRoutineBegin(snapshot));
      text_loopLoopScheduler.add(WelcomeRoutineEachFrame());
      text_loopLoopScheduler.add(WelcomeRoutineEnd(snapshot));
      text_loopLoopScheduler.add(text_loopLoopEndIteration(text_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function text_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(text_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function text_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var photo_loop;
function photo_loopLoopBegin(photo_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    photo_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'images_t.xlsx',
      seed: undefined, name: 'photo_loop'
    });
    psychoJS.experiment.addLoop(photo_loop); // add the loop to the experiment
    currentLoop = photo_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPhoto_loop of photo_loop) {
      snapshot = photo_loop.getSnapshot();
      photo_loopLoopScheduler.add(importConditions(snapshot));
      photo_loopLoopScheduler.add(instructions_tRoutineBegin(snapshot));
      photo_loopLoopScheduler.add(instructions_tRoutineEachFrame());
      photo_loopLoopScheduler.add(instructions_tRoutineEnd(snapshot));
      photo_loopLoopScheduler.add(photo_loopLoopEndIteration(photo_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function photo_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(photo_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function photo_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var corsi_task_t;
function corsi_task_tLoopBegin(corsi_task_tLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    corsi_task_t = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 4, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'corsi_task_t'
    });
    psychoJS.experiment.addLoop(corsi_task_t); // add the loop to the experiment
    currentLoop = corsi_task_t;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisCorsi_task_t of corsi_task_t) {
      snapshot = corsi_task_t.getSnapshot();
      corsi_task_tLoopScheduler.add(importConditions(snapshot));
      corsi_task_tLoopScheduler.add(ISI_tRoutineBegin(snapshot));
      corsi_task_tLoopScheduler.add(ISI_tRoutineEachFrame());
      corsi_task_tLoopScheduler.add(ISI_tRoutineEnd(snapshot));
      const block_sequence_tLoopScheduler = new Scheduler(psychoJS);
      corsi_task_tLoopScheduler.add(block_sequence_tLoopBegin(block_sequence_tLoopScheduler, snapshot));
      corsi_task_tLoopScheduler.add(block_sequence_tLoopScheduler);
      corsi_task_tLoopScheduler.add(block_sequence_tLoopEnd);
      corsi_task_tLoopScheduler.add(corsi_respond_tRoutineBegin(snapshot));
      corsi_task_tLoopScheduler.add(corsi_respond_tRoutineEachFrame());
      corsi_task_tLoopScheduler.add(corsi_respond_tRoutineEnd(snapshot));
      corsi_task_tLoopScheduler.add(feedbackRoutineBegin(snapshot));
      corsi_task_tLoopScheduler.add(feedbackRoutineEachFrame());
      corsi_task_tLoopScheduler.add(feedbackRoutineEnd(snapshot));
      corsi_task_tLoopScheduler.add(instructionsRoutineBegin(snapshot));
      corsi_task_tLoopScheduler.add(instructionsRoutineEachFrame());
      corsi_task_tLoopScheduler.add(instructionsRoutineEnd(snapshot));
      corsi_task_tLoopScheduler.add(corsi_task_tLoopEndIteration(corsi_task_tLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var block_sequence_t;
function block_sequence_tLoopBegin(block_sequence_tLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    block_sequence_t = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'CL_t.csv',
      seed: undefined, name: 'block_sequence_t'
    });
    psychoJS.experiment.addLoop(block_sequence_t); // add the loop to the experiment
    currentLoop = block_sequence_t;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBlock_sequence_t of block_sequence_t) {
      snapshot = block_sequence_t.getSnapshot();
      block_sequence_tLoopScheduler.add(importConditions(snapshot));
      block_sequence_tLoopScheduler.add(corsi_present_tRoutineBegin(snapshot));
      block_sequence_tLoopScheduler.add(corsi_present_tRoutineEachFrame());
      block_sequence_tLoopScheduler.add(corsi_present_tRoutineEnd(snapshot));
      block_sequence_tLoopScheduler.add(block_sequence_tLoopEndIteration(block_sequence_tLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function block_sequence_tLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(block_sequence_t);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function block_sequence_tLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function corsi_task_tLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(corsi_task_t);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function corsi_task_tLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var corsi_task;
function corsi_taskLoopBegin(corsi_taskLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    corsi_task = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 15, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'corsi_task'
    });
    psychoJS.experiment.addLoop(corsi_task); // add the loop to the experiment
    currentLoop = corsi_task;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisCorsi_task of corsi_task) {
      snapshot = corsi_task.getSnapshot();
      corsi_taskLoopScheduler.add(importConditions(snapshot));
      corsi_taskLoopScheduler.add(ISIRoutineBegin(snapshot));
      corsi_taskLoopScheduler.add(ISIRoutineEachFrame());
      corsi_taskLoopScheduler.add(ISIRoutineEnd(snapshot));
      const block_sequenceLoopScheduler = new Scheduler(psychoJS);
      corsi_taskLoopScheduler.add(block_sequenceLoopBegin(block_sequenceLoopScheduler, snapshot));
      corsi_taskLoopScheduler.add(block_sequenceLoopScheduler);
      corsi_taskLoopScheduler.add(block_sequenceLoopEnd);
      corsi_taskLoopScheduler.add(corsi_respondRoutineBegin(snapshot));
      corsi_taskLoopScheduler.add(corsi_respondRoutineEachFrame());
      corsi_taskLoopScheduler.add(corsi_respondRoutineEnd(snapshot));
      corsi_taskLoopScheduler.add(FBRoutineBegin(snapshot));
      corsi_taskLoopScheduler.add(FBRoutineEachFrame());
      corsi_taskLoopScheduler.add(FBRoutineEnd(snapshot));
      corsi_taskLoopScheduler.add(corsi_taskLoopEndIteration(corsi_taskLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var block_sequence;
function block_sequenceLoopBegin(block_sequenceLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    block_sequence = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nBlocks, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'block_sequence'
    });
    psychoJS.experiment.addLoop(block_sequence); // add the loop to the experiment
    currentLoop = block_sequence;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBlock_sequence of block_sequence) {
      snapshot = block_sequence.getSnapshot();
      block_sequenceLoopScheduler.add(importConditions(snapshot));
      block_sequenceLoopScheduler.add(corsi_presentRoutineBegin(snapshot));
      block_sequenceLoopScheduler.add(corsi_presentRoutineEachFrame());
      block_sequenceLoopScheduler.add(corsi_presentRoutineEnd(snapshot));
      block_sequenceLoopScheduler.add(block_sequenceLoopEndIteration(block_sequenceLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function block_sequenceLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(block_sequence);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function block_sequenceLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function corsi_taskLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(corsi_task);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function corsi_taskLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var t;
var frameN;
var continueRoutine;
var WelcomeMaxDurationReached;
var gotValidClick;
var WelcomeMaxDuration;
var WelcomeComponents;
function WelcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Welcome' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    WelcomeClock.reset();
    routineTimer.reset();
    WelcomeMaxDurationReached = false;
    // update component parameters for each repeat
    text_Welcome.setText(text_tutorial);
    // setup some python lists for storing info about the mouse_Welcome
    gotValidClick = false; // until a click is received
    WelcomeMaxDuration = null
    // keep track of which components have finished
    WelcomeComponents = [];
    WelcomeComponents.push(text_Welcome);
    WelcomeComponents.push(mouse_Welcome);
    
    for (const thisComponent of WelcomeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
function WelcomeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Welcome' ---
    // get current time
    t = WelcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_Welcome* updates
    if (t >= 0.0 && text_Welcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_Welcome.tStart = t;  // (not accounting for frame time here)
      text_Welcome.frameNStart = frameN;  // exact frame index
      
      text_Welcome.setAutoDraw(true);
    }
    
    // *mouse_Welcome* updates
    if (t >= 0.0 && mouse_Welcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_Welcome.tStart = t;  // (not accounting for frame time here)
      mouse_Welcome.frameNStart = frameN;  // exact frame index
      
      mouse_Welcome.status = PsychoJS.Status.STARTED;
      mouse_Welcome.mouseClock.reset();
      prevButtonState = mouse_Welcome.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_Welcome.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_Welcome.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of WelcomeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function WelcomeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Welcome' ---
    for (const thisComponent of WelcomeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "Welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instructions_tMaxDurationReached;
var instructions_tMaxDuration;
var instructions_tComponents;
function instructions_tRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions_t' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instructions_tClock.reset();
    routineTimer.reset();
    instructions_tMaxDurationReached = false;
    // update component parameters for each repeat
    image_t.setImage(photo);
    // setup some python lists for storing info about the mouse_instructions_t
    gotValidClick = false; // until a click is received
    instructions_tMaxDuration = null
    // keep track of which components have finished
    instructions_tComponents = [];
    instructions_tComponents.push(image_t);
    instructions_tComponents.push(mouse_instructions_t);
    
    for (const thisComponent of instructions_tComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructions_tRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions_t' ---
    // get current time
    t = instructions_tClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_t* updates
    if (t >= 0.0 && image_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_t.tStart = t;  // (not accounting for frame time here)
      image_t.frameNStart = frameN;  // exact frame index
      
      image_t.setAutoDraw(true);
    }
    
    // *mouse_instructions_t* updates
    if (t >= 0.0 && mouse_instructions_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_instructions_t.tStart = t;  // (not accounting for frame time here)
      mouse_instructions_t.frameNStart = frameN;  // exact frame index
      
      mouse_instructions_t.status = PsychoJS.Status.STARTED;
      mouse_instructions_t.mouseClock.reset();
      prevButtonState = mouse_instructions_t.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_instructions_t.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_instructions_t.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructions_tComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions_tRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions_t' ---
    for (const thisComponent of instructions_tComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "instructions_t" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ISI_tMaxDurationReached;
var blocks;
var respond_blocks;
var block_order;
var correct_order;
var respond_block_order;
var xys;
var count;
var positions;
var ISI_tMaxDuration;
var ISI_tComponents;
function ISI_tRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ISI_t' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    ISI_tClock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    ISI_tMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_t2
    blocks = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
    respond_blocks = [box1_2, box2_2, box3_2, box4_2, box5_2, box6_2, box7_2, box8_2, box9_2];
    block_order = [];
    correct_order = [];
    respond_block_order = [];
    for (var block, _pj_c = 0, _pj_a = util.range(2), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        block = _pj_a[_pj_c];
        blocks[block].setColor("white");
        respond_blocks[block].setColor("white");
        correct_order.push(respond_blocks[block].name);
        block_order.push(blocks[block]);
        respond_block_order.push(respond_blocks[block]);
    }
    console.log("block_order", block_order);
    console.log("correct_order", correct_order);
    console.log("respond_block_order", respond_block_order);
    xys = [[0.25625, 0.0975], [0.0675, 0.07375], [(- 0.09875), 0.065], [(- 0.26625), 0.235], [0.22, 0.2425], [0.16625, 0.3825], [(- 0.18625), 0.41125], [(- 0.01875), 0.235], [(- 0.3575), (- 0.05625)], [(- 0.12125), (- 0.12625)], [0.05875, (- 0.0575)], [0.19375, (- 0.17125)], [0.30125, (- 0.0175)], [0.4125, (- 0.1325)], [0.365, (- 0.27625)], [(- 0.01125), (- 0.295)], [(- 0.285), (- 0.27125)], [(- 0.4075), 0.11875], [(- 0.485), 0.34625], [0.4625, 0.35875], [0.45375, 0.175], [0.54, 0.03625], [0.62875, (- 0.1825)], [0.57875, (- 0.31375)], [(- 0.45875), (- 0.3)], [(- 0.55125), (- 0.13375)], [(- 0.6025), 0.0725], [(- 0.675), 0.29875], [(- 0.68625), (- 0.225)], [0.03125, (- 0.41)], [0.1925, (- 0.295)], [(- 0.16125), (- 0.28)], [(- 0.24625), 0.04375], [(- 0.0225), 0.395], [0.28875, 0.39875], [0.6375, 0.27375], [(- 0.35125), 0.36625]];
    util.shuffle(xys);
    count = 0;
    positions = [];
    for (var block, _pj_c = 0, _pj_a = blocks, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        block = _pj_a[_pj_c];
        block.setPos([xys[count][0], xys[count][1]]);
        respond_blocks[count].setPos([xys[count][0], xys[count][1]]);
        positions.push(xys[count]);
        count += 1;
    }
    psychoJS.experiment.addData("positions", positions);
    
    ISI_tMaxDuration = null
    // keep track of which components have finished
    ISI_tComponents = [];
    ISI_tComponents.push(blank_2);
    
    for (const thisComponent of ISI_tComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function ISI_tRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ISI_t' ---
    // get current time
    t = ISI_tClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *blank_2* updates
    if (t >= 0.0 && blank_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blank_2.tStart = t;  // (not accounting for frame time here)
      blank_2.frameNStart = frameN;  // exact frame index
      
      blank_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (blank_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blank_2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ISI_tComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ISI_tRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ISI_t' ---
    for (const thisComponent of ISI_tComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if (ISI_tMaxDurationReached) {
        ISI_tClock.add(ISI_tMaxDuration);
    } else {
        ISI_tClock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var corsi_present_tMaxDurationReached;
var corsi_present_tMaxDuration;
var corsi_present_tComponents;
function corsi_present_tRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'corsi_present_t' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    corsi_present_tClock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    corsi_present_tMaxDurationReached = false;
    // update component parameters for each repeat
    box1.setFillColor(new util.Color(CL));
    box2.setFillColor(new util.Color(CL2));
    corsi_present_tMaxDuration = null
    // keep track of which components have finished
    corsi_present_tComponents = [];
    corsi_present_tComponents.push(box1);
    corsi_present_tComponents.push(box2);
    corsi_present_tComponents.push(box3);
    corsi_present_tComponents.push(box4);
    corsi_present_tComponents.push(box5);
    corsi_present_tComponents.push(box6);
    corsi_present_tComponents.push(box7);
    corsi_present_tComponents.push(box8);
    corsi_present_tComponents.push(box9);
    
    for (const thisComponent of corsi_present_tComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function corsi_present_tRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'corsi_present_t' ---
    // get current time
    t = corsi_present_tClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *box1* updates
    if (t >= 0.0 && box1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box1.tStart = t;  // (not accounting for frame time here)
      box1.frameNStart = frameN;  // exact frame index
      
      box1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (box1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      box1.setAutoDraw(false);
    }
    
    
    // *box2* updates
    if (t >= 0.0 && box2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box2.tStart = t;  // (not accounting for frame time here)
      box2.frameNStart = frameN;  // exact frame index
      
      box2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (box2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      box2.setAutoDraw(false);
    }
    
    
    // *box3* updates
    if (t >= 0.0 && box3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box3.tStart = t;  // (not accounting for frame time here)
      box3.frameNStart = frameN;  // exact frame index
      
      box3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (box3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      box3.setAutoDraw(false);
    }
    
    
    // *box4* updates
    if (t >= 0.0 && box4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box4.tStart = t;  // (not accounting for frame time here)
      box4.frameNStart = frameN;  // exact frame index
      
      box4.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (box4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      box4.setAutoDraw(false);
    }
    
    
    // *box5* updates
    if (t >= 0.0 && box5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box5.tStart = t;  // (not accounting for frame time here)
      box5.frameNStart = frameN;  // exact frame index
      
      box5.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (box5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      box5.setAutoDraw(false);
    }
    
    
    // *box6* updates
    if (t >= 0.0 && box6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box6.tStart = t;  // (not accounting for frame time here)
      box6.frameNStart = frameN;  // exact frame index
      
      box6.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (box6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      box6.setAutoDraw(false);
    }
    
    
    // *box7* updates
    if (t >= 0.0 && box7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box7.tStart = t;  // (not accounting for frame time here)
      box7.frameNStart = frameN;  // exact frame index
      
      box7.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (box7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      box7.setAutoDraw(false);
    }
    
    
    // *box8* updates
    if (t >= 0.0 && box8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box8.tStart = t;  // (not accounting for frame time here)
      box8.frameNStart = frameN;  // exact frame index
      
      box8.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (box8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      box8.setAutoDraw(false);
    }
    
    
    // *box9* updates
    if (t >= 0.0 && box9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box9.tStart = t;  // (not accounting for frame time here)
      box9.frameNStart = frameN;  // exact frame index
      
      box9.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (box9.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      box9.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of corsi_present_tComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function corsi_present_tRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'corsi_present_t' ---
    for (const thisComponent of corsi_present_tComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if (corsi_present_tMaxDurationReached) {
        corsi_present_tClock.add(corsi_present_tMaxDuration);
    } else {
        corsi_present_tClock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var corsi_respond_tMaxDurationReached;
var order_clicked;
var show;
var corsi_respond_tMaxDuration;
var corsi_respond_tComponents;
function corsi_respond_tRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'corsi_respond_t' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    corsi_respond_tClock.reset();
    routineTimer.reset();
    corsi_respond_tMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the corsi_mouse_t
    // current position of the mouse:
    corsi_mouse_t.x = [];
    corsi_mouse_t.y = [];
    corsi_mouse_t.leftButton = [];
    corsi_mouse_t.midButton = [];
    corsi_mouse_t.rightButton = [];
    corsi_mouse_t.time = [];
    corsi_mouse_t.clicked_name = [];
    gotValidClick = false; // until a click is received
    // Run 'Begin Routine' code from check_correct_t
    order_clicked = [];
    show = false;
    
    corsi_respond_tMaxDuration = null
    // keep track of which components have finished
    corsi_respond_tComponents = [];
    corsi_respond_tComponents.push(box1_2);
    corsi_respond_tComponents.push(box2_2);
    corsi_respond_tComponents.push(box3_2);
    corsi_respond_tComponents.push(box4_2);
    corsi_respond_tComponents.push(box5_2);
    corsi_respond_tComponents.push(box6_2);
    corsi_respond_tComponents.push(box7_2);
    corsi_respond_tComponents.push(box8_2);
    corsi_respond_tComponents.push(box9_2);
    corsi_respond_tComponents.push(corsi_mouse_t);
    corsi_respond_tComponents.push(submit_button_t);
    
    for (const thisComponent of corsi_respond_tComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var _mouseXYs;
var _pj;
function corsi_respond_tRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'corsi_respond_t' ---
    // get current time
    t = corsi_respond_tClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *box1_2* updates
    if (t >= 0.0 && box1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box1_2.tStart = t;  // (not accounting for frame time here)
      box1_2.frameNStart = frameN;  // exact frame index
      
      box1_2.setAutoDraw(true);
    }
    
    
    // *box2_2* updates
    if (t >= 0.0 && box2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box2_2.tStart = t;  // (not accounting for frame time here)
      box2_2.frameNStart = frameN;  // exact frame index
      
      box2_2.setAutoDraw(true);
    }
    
    
    // *box3_2* updates
    if (t >= 0.0 && box3_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box3_2.tStart = t;  // (not accounting for frame time here)
      box3_2.frameNStart = frameN;  // exact frame index
      
      box3_2.setAutoDraw(true);
    }
    
    
    // *box4_2* updates
    if (t >= 0.0 && box4_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box4_2.tStart = t;  // (not accounting for frame time here)
      box4_2.frameNStart = frameN;  // exact frame index
      
      box4_2.setAutoDraw(true);
    }
    
    
    // *box5_2* updates
    if (t >= 0.0 && box5_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box5_2.tStart = t;  // (not accounting for frame time here)
      box5_2.frameNStart = frameN;  // exact frame index
      
      box5_2.setAutoDraw(true);
    }
    
    
    // *box6_2* updates
    if (t >= 0.0 && box6_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box6_2.tStart = t;  // (not accounting for frame time here)
      box6_2.frameNStart = frameN;  // exact frame index
      
      box6_2.setAutoDraw(true);
    }
    
    
    // *box7_2* updates
    if (t >= 0.0 && box7_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box7_2.tStart = t;  // (not accounting for frame time here)
      box7_2.frameNStart = frameN;  // exact frame index
      
      box7_2.setAutoDraw(true);
    }
    
    
    // *box8_2* updates
    if (t >= 0.0 && box8_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box8_2.tStart = t;  // (not accounting for frame time here)
      box8_2.frameNStart = frameN;  // exact frame index
      
      box8_2.setAutoDraw(true);
    }
    
    
    // *box9_2* updates
    if (t >= 0.0 && box9_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box9_2.tStart = t;  // (not accounting for frame time here)
      box9_2.frameNStart = frameN;  // exact frame index
      
      box9_2.setAutoDraw(true);
    }
    
    // *corsi_mouse_t* updates
    if (t >= 0.0 && corsi_mouse_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      corsi_mouse_t.tStart = t;  // (not accounting for frame time here)
      corsi_mouse_t.frameNStart = frameN;  // exact frame index
      
      corsi_mouse_t.status = PsychoJS.Status.STARTED;
      corsi_mouse_t.mouseClock.reset();
      prevButtonState = corsi_mouse_t.getPressed();  // if button is down already this ISN'T a new click
      }
    if (corsi_mouse_t.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = corsi_mouse_t.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          corsi_mouse_t.clickableObjects = eval([box1_2, box2_2, box3_2, box4_2, box5_2, box6_2, box7_2, box8_2, box9_2])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(corsi_mouse_t.clickableObjects)) {
              corsi_mouse_t.clickableObjects = [corsi_mouse_t.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of corsi_mouse_t.clickableObjects) {
              if (obj.contains(corsi_mouse_t)) {
                  gotValidClick = true;
                  corsi_mouse_t.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              corsi_mouse_t.clicked_name.push(null);
          }
          _mouseXYs = corsi_mouse_t.getPos();
          corsi_mouse_t.x.push(_mouseXYs[0]);
          corsi_mouse_t.y.push(_mouseXYs[1]);
          corsi_mouse_t.leftButton.push(_mouseButtons[0]);
          corsi_mouse_t.midButton.push(_mouseButtons[1]);
          corsi_mouse_t.rightButton.push(_mouseButtons[2]);
          corsi_mouse_t.time.push(corsi_mouse_t.mouseClock.getTime());
        }
      }
    }
    // Run 'Each Frame' code from check_correct_t
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    for (var block, _pj_c = 0, _pj_a = respond_blocks, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        block = _pj_a[_pj_c];
        if (corsi_mouse_t.isPressedIn(block)) {
            block.fillColor = [1, 0, 0];
            if ((! _pj.in_es6(block.name, order_clicked))) {
                order_clicked.push(block.name);
            }
        }
    }
    if ((corsi_mouse_t.clicked_name.length === 2)) {
        show = true;
    }
    if (corsi_mouse_t.isPressedIn(submit_button)) {
        continueRoutine = false;
    }
    
    
    // *submit_button_t* updates
    if ((show) && submit_button_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      submit_button_t.tStart = t;  // (not accounting for frame time here)
      submit_button_t.frameNStart = frameN;  // exact frame index
      
      submit_button_t.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of corsi_respond_tComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var correct;
var correct_list;
function corsi_respond_tRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'corsi_respond_t' ---
    for (const thisComponent of corsi_respond_tComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('corsi_mouse_t.x', corsi_mouse_t.x);
    psychoJS.experiment.addData('corsi_mouse_t.y', corsi_mouse_t.y);
    psychoJS.experiment.addData('corsi_mouse_t.leftButton', corsi_mouse_t.leftButton);
    psychoJS.experiment.addData('corsi_mouse_t.midButton', corsi_mouse_t.midButton);
    psychoJS.experiment.addData('corsi_mouse_t.rightButton', corsi_mouse_t.rightButton);
    psychoJS.experiment.addData('corsi_mouse_t.time', corsi_mouse_t.time);
    psychoJS.experiment.addData('corsi_mouse_t.clicked_name', corsi_mouse_t.clicked_name);
    
    // Run 'End Routine' code from check_correct_t
    correct = 0;
    console.log("order_clicked", order_clicked);
    console.log("correct_order", correct_order);
    correct_list = [];
    count = 0;
    for (var name, _pj_c = 0, _pj_a = order_clicked, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        name = _pj_a[_pj_c];
        if ((name === correct_order[count])) {
            correct_list.push(1);
        } else {
            correct_list.push(0);
        }
        count += 1;
    }
    console.log(correct_list);
    psychoJS.experiment.addData("correct_list", correct_list);
    if ((util.sum(correct_list) === correct_list.length)) {
        correct = 1;
    }
    psychoJS.experiment.addData("corsi_correct", correct);
    
    // the Routine "corsi_respond_t" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedbackMaxDurationReached;
var thisfb;
var fbcol;
var feedbackMaxDuration;
var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    feedbackClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    feedbackMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from fbcode
    if (correct) {
        thisfb = "Correct!";
        fbcol = "green";
    } else {
        thisfb = "Incorrect!";
        fbcol = "red";
    }
    
    fbtxt.setColor(new util.Color(fbcol));
    fbtxt.setText(thisfb);
    // Run 'Begin Routine' code from reset_col_code_t
    for (var block, _pj_c = 0, _pj_a = respond_blocks, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        block = _pj_a[_pj_c];
        block.fillColor = new util.Color([1 ,1, 1])
    }
    
    for (var block, _pj_c = 0, _pj_a = blocks, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        block = _pj_a[_pj_c];
        block.fillColor = new util.Color([1 ,1, 1])
    }
    
    feedbackMaxDuration = null
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(fbtxt);
    
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback' ---
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fbtxt* updates
    if (t >= 0.0 && fbtxt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fbtxt.tStart = t;  // (not accounting for frame time here)
      fbtxt.frameNStart = frameN;  // exact frame index
      
      fbtxt.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fbtxt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fbtxt.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback' ---
    for (const thisComponent of feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if (feedbackMaxDurationReached) {
        feedbackClock.add(feedbackMaxDuration);
    } else {
        feedbackClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instructionsMaxDurationReached;
var instructionsMaxDuration;
var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instructionsClock.reset();
    routineTimer.reset();
    instructionsMaxDurationReached = false;
    // update component parameters for each repeat
    text_instructions.setText('\nกดปุ่มเพื่อดำเนินการต่อ\n');
    // setup some python lists for storing info about the mouse_instructions
    // current position of the mouse:
    mouse_instructions.x = [];
    mouse_instructions.y = [];
    mouse_instructions.leftButton = [];
    mouse_instructions.midButton = [];
    mouse_instructions.rightButton = [];
    mouse_instructions.time = [];
    gotValidClick = false; // until a click is received
    instructionsMaxDuration = null
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(text_instructions);
    instructionsComponents.push(mouse_instructions);
    instructionsComponents.push(Play);
    instructionsComponents.push(Back);
    
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions' ---
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_instructions* updates
    if (t >= 0.0 && text_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instructions.tStart = t;  // (not accounting for frame time here)
      text_instructions.frameNStart = frameN;  // exact frame index
      
      text_instructions.setAutoDraw(true);
    }
    
    // *mouse_instructions* updates
    if (t >= 0.0 && mouse_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_instructions.tStart = t;  // (not accounting for frame time here)
      mouse_instructions.frameNStart = frameN;  // exact frame index
      
      mouse_instructions.status = PsychoJS.Status.STARTED;
      mouse_instructions.mouseClock.reset();
      prevButtonState = mouse_instructions.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_instructions.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_instructions.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_instructions.getPos();
          mouse_instructions.x.push(_mouseXYs[0]);
          mouse_instructions.y.push(_mouseXYs[1]);
          mouse_instructions.leftButton.push(_mouseButtons[0]);
          mouse_instructions.midButton.push(_mouseButtons[1]);
          mouse_instructions.rightButton.push(_mouseButtons[2]);
          mouse_instructions.time.push(mouse_instructions.mouseClock.getTime());
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *Play* updates
    if ((show) && Play.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Play.tStart = t;  // (not accounting for frame time here)
      Play.frameNStart = frameN;  // exact frame index
      
      Play.setAutoDraw(true);
    }
    
    
    // *Back* updates
    if ((show) && Back.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Back.tStart = t;  // (not accounting for frame time here)
      Back.frameNStart = frameN;  // exact frame index
      
      Back.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions' ---
    for (const thisComponent of instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_instructions.x', mouse_instructions.x);
    psychoJS.experiment.addData('mouse_instructions.y', mouse_instructions.y);
    psychoJS.experiment.addData('mouse_instructions.leftButton', mouse_instructions.leftButton);
    psychoJS.experiment.addData('mouse_instructions.midButton', mouse_instructions.midButton);
    psychoJS.experiment.addData('mouse_instructions.rightButton', mouse_instructions.rightButton);
    psychoJS.experiment.addData('mouse_instructions.time', mouse_instructions.time);
    
    // Run 'End Routine' code from end_task_t_2
    if (mouse_instructions.isPressedIn(Play)) {
        corsi_task_t.finished = true;
    }
    if (mouse_instructions.isPressedIn(Back)) {
        corsi_task_t.finished = false;
    }
    
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var countdownMaxDurationReached;
var countdownMaxDuration;
var countdownComponents;
function countdownRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'countdown' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    countdownClock.reset(routineTimer.getTime());
    routineTimer.add(3.000000);
    countdownMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('countdown.started', globalClock.getTime());
    countdownMaxDuration = null
    // keep track of which components have finished
    countdownComponents = [];
    countdownComponents.push(text_3);
    countdownComponents.push(text_2);
    countdownComponents.push(text_1);
    
    for (const thisComponent of countdownComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function countdownRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'countdown' ---
    // get current time
    t = countdownClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_3.setAutoDraw(false);
    }
    
    
    // *text_2* updates
    if (t >= 1.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    frameRemains = 1.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    
    
    // *text_1* updates
    if (t >= 2.0 && text_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_1.tStart = t;  // (not accounting for frame time here)
      text_1.frameNStart = frameN;  // exact frame index
      
      text_1.setAutoDraw(true);
    }
    
    frameRemains = 2.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_1.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of countdownComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function countdownRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'countdown' ---
    for (const thisComponent of countdownComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('countdown.stopped', globalClock.getTime());
    if (countdownMaxDurationReached) {
        countdownClock.add(countdownMaxDuration);
    } else {
        countdownClock.add(3.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ISIMaxDurationReached;
var ISIMaxDuration;
var ISIComponents;
function ISIRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ISI' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    ISIClock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    ISIMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from setLocations
    blocks = [blk1_3, blk2_3, blk3_3, blk4_3, blk5_3, blk6_3, blk7_3, blk8_3, blk9_3];
    respond_blocks = [blk1, blk2, blk3, blk4, blk5, blk6, blk7, blk8, blk9];
    block_order = [];
    correct_order = [];
    respond_block_order = [];
    for (var block, _pj_c = 0, _pj_a = util.range(nBlocks), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        block = _pj_a[_pj_c];
        blocks[block].setColor("white");
        respond_blocks[block].setColor("white");
        correct_order.push(respond_blocks[block].name);
        block_order.push(blocks[block]);
        respond_block_order.push(respond_blocks[block]);
    }
    console.log("block_order", block_order);
    console.log("correct_order", correct_order);
    console.log("respond_block_order", respond_block_order);
    xys = [[0.25625, 0.0975], [0.0675, 0.07375], [(- 0.09875), 0.065], [(- 0.26625), 0.235], [0.22, 0.2425], [0.16625, 0.3825], [(- 0.18625), 0.41125], [(- 0.01875), 0.235], [(- 0.3575), (- 0.05625)], [(- 0.12125), (- 0.12625)], [0.05875, (- 0.0575)], [0.19375, (- 0.17125)], [0.30125, (- 0.0175)], [0.4125, (- 0.1325)], [0.365, (- 0.27625)], [(- 0.01125), (- 0.295)], [(- 0.285), (- 0.27125)], [(- 0.4075), 0.11875], [(- 0.485), 0.34625], [0.4625, 0.35875], [0.45375, 0.175], [0.54, 0.03625], [0.62875, (- 0.1825)], [0.57875, (- 0.31375)], [(- 0.45875), (- 0.3)], [(- 0.55125), (- 0.13375)], [(- 0.6025), 0.0725], [(- 0.675), 0.29875], [(- 0.68625), (- 0.225)], [0.03125, (- 0.41)], [0.1925, (- 0.295)], [(- 0.16125), (- 0.28)], [(- 0.24625), 0.04375], [(- 0.0225), 0.395], [0.28875, 0.39875], [0.6375, 0.27375], [(- 0.35125), 0.36625]];
    util.shuffle(xys);
    count = 0;
    positions = [];
    for (var block, _pj_c = 0, _pj_a = blocks, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        block = _pj_a[_pj_c];
        block.setPos([xys[count][0], xys[count][1]]);
        respond_blocks[count].setPos([xys[count][0], xys[count][1]]);
        positions.push(xys[count]);
        count += 1;
    }
    psychoJS.experiment.addData("positions", positions);
    
    psychoJS.experiment.addData('ISI.started', globalClock.getTime());
    ISIMaxDuration = null
    // keep track of which components have finished
    ISIComponents = [];
    ISIComponents.push(blank);
    
    for (const thisComponent of ISIComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ISIRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ISI' ---
    // get current time
    t = ISIClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *blank* updates
    if (t >= 0.0 && blank.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blank.tStart = t;  // (not accounting for frame time here)
      blank.frameNStart = frameN;  // exact frame index
      
      blank.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (blank.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blank.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ISIComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ISIRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ISI' ---
    for (const thisComponent of ISIComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ISI.stopped', globalClock.getTime());
    if (ISIMaxDurationReached) {
        ISIClock.add(ISIMaxDuration);
    } else {
        ISIClock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var corsi_presentMaxDurationReached;
var corsi_presentMaxDuration;
var corsi_presentComponents;
function corsi_presentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'corsi_present' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    corsi_presentClock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    corsi_presentMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from setColor
    block_order[block_sequence.thisN].fillColor = new util.Color("red")
    console.log(block_order[block_sequence.thisN].pos);
    console.log(block_order[block_sequence.thisN].opacity);
    
    psychoJS.experiment.addData('corsi_present.started', globalClock.getTime());
    corsi_presentMaxDuration = null
    // keep track of which components have finished
    corsi_presentComponents = [];
    corsi_presentComponents.push(blk1_3);
    corsi_presentComponents.push(blk2_3);
    corsi_presentComponents.push(blk3_3);
    corsi_presentComponents.push(blk4_3);
    corsi_presentComponents.push(blk5_3);
    corsi_presentComponents.push(blk6_3);
    corsi_presentComponents.push(blk7_3);
    corsi_presentComponents.push(blk8_3);
    corsi_presentComponents.push(blk9_3);
    
    for (const thisComponent of corsi_presentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function corsi_presentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'corsi_present' ---
    // get current time
    t = corsi_presentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *blk1_3* updates
    if (t >= 0.0 && blk1_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blk1_3.tStart = t;  // (not accounting for frame time here)
      blk1_3.frameNStart = frameN;  // exact frame index
      
      blk1_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (blk1_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blk1_3.setAutoDraw(false);
    }
    
    
    // *blk2_3* updates
    if (t >= 0.0 && blk2_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blk2_3.tStart = t;  // (not accounting for frame time here)
      blk2_3.frameNStart = frameN;  // exact frame index
      
      blk2_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (blk2_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blk2_3.setAutoDraw(false);
    }
    
    
    // *blk3_3* updates
    if (t >= 0.0 && blk3_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blk3_3.tStart = t;  // (not accounting for frame time here)
      blk3_3.frameNStart = frameN;  // exact frame index
      
      blk3_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (blk3_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blk3_3.setAutoDraw(false);
    }
    
    
    // *blk4_3* updates
    if (t >= 0.0 && blk4_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blk4_3.tStart = t;  // (not accounting for frame time here)
      blk4_3.frameNStart = frameN;  // exact frame index
      
      blk4_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (blk4_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blk4_3.setAutoDraw(false);
    }
    
    
    // *blk5_3* updates
    if (t >= 0.0 && blk5_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blk5_3.tStart = t;  // (not accounting for frame time here)
      blk5_3.frameNStart = frameN;  // exact frame index
      
      blk5_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (blk5_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blk5_3.setAutoDraw(false);
    }
    
    
    // *blk6_3* updates
    if (t >= 0.0 && blk6_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blk6_3.tStart = t;  // (not accounting for frame time here)
      blk6_3.frameNStart = frameN;  // exact frame index
      
      blk6_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (blk6_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blk6_3.setAutoDraw(false);
    }
    
    
    // *blk7_3* updates
    if (t >= 0.0 && blk7_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blk7_3.tStart = t;  // (not accounting for frame time here)
      blk7_3.frameNStart = frameN;  // exact frame index
      
      blk7_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (blk7_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blk7_3.setAutoDraw(false);
    }
    
    
    // *blk8_3* updates
    if (t >= 0.0 && blk8_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blk8_3.tStart = t;  // (not accounting for frame time here)
      blk8_3.frameNStart = frameN;  // exact frame index
      
      blk8_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (blk8_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blk8_3.setAutoDraw(false);
    }
    
    
    // *blk9_3* updates
    if (t >= 0.0 && blk9_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blk9_3.tStart = t;  // (not accounting for frame time here)
      blk9_3.frameNStart = frameN;  // exact frame index
      
      blk9_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (blk9_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blk9_3.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of corsi_presentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function corsi_presentRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'corsi_present' ---
    for (const thisComponent of corsi_presentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('corsi_present.stopped', globalClock.getTime());
    // Run 'End Routine' code from setColor
    block_order[block_sequence.thisN].fillColor = new util.Color([1, 1, 1])
    
    if (corsi_presentMaxDurationReached) {
        corsi_presentClock.add(corsi_presentMaxDuration);
    } else {
        corsi_presentClock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var corsi_respondMaxDurationReached;
var corsi_respondMaxDuration;
var corsi_respondComponents;
function corsi_respondRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'corsi_respond' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    corsi_respondClock.reset();
    routineTimer.reset();
    corsi_respondMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the corsi_mouse
    // current position of the mouse:
    corsi_mouse.x = [];
    corsi_mouse.y = [];
    corsi_mouse.leftButton = [];
    corsi_mouse.midButton = [];
    corsi_mouse.rightButton = [];
    corsi_mouse.time = [];
    corsi_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // Run 'Begin Routine' code from check_correct
    order_clicked = [];
    show = false;
    
    psychoJS.experiment.addData('corsi_respond.started', globalClock.getTime());
    corsi_respondMaxDuration = null
    // keep track of which components have finished
    corsi_respondComponents = [];
    corsi_respondComponents.push(blk1);
    corsi_respondComponents.push(blk2);
    corsi_respondComponents.push(blk3);
    corsi_respondComponents.push(blk4);
    corsi_respondComponents.push(blk5);
    corsi_respondComponents.push(blk6);
    corsi_respondComponents.push(blk7);
    corsi_respondComponents.push(blk8);
    corsi_respondComponents.push(blk9);
    corsi_respondComponents.push(corsi_mouse);
    corsi_respondComponents.push(submit_button);
    
    for (const thisComponent of corsi_respondComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function corsi_respondRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'corsi_respond' ---
    // get current time
    t = corsi_respondClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *blk1* updates
    if (t >= 0.0 && blk1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blk1.tStart = t;  // (not accounting for frame time here)
      blk1.frameNStart = frameN;  // exact frame index
      
      blk1.setAutoDraw(true);
    }
    
    
    // *blk2* updates
    if (t >= 0.0 && blk2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blk2.tStart = t;  // (not accounting for frame time here)
      blk2.frameNStart = frameN;  // exact frame index
      
      blk2.setAutoDraw(true);
    }
    
    
    // *blk3* updates
    if (t >= 0.0 && blk3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blk3.tStart = t;  // (not accounting for frame time here)
      blk3.frameNStart = frameN;  // exact frame index
      
      blk3.setAutoDraw(true);
    }
    
    
    // *blk4* updates
    if (t >= 0.0 && blk4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blk4.tStart = t;  // (not accounting for frame time here)
      blk4.frameNStart = frameN;  // exact frame index
      
      blk4.setAutoDraw(true);
    }
    
    
    // *blk5* updates
    if (t >= 0.0 && blk5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blk5.tStart = t;  // (not accounting for frame time here)
      blk5.frameNStart = frameN;  // exact frame index
      
      blk5.setAutoDraw(true);
    }
    
    
    // *blk6* updates
    if (t >= 0.0 && blk6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blk6.tStart = t;  // (not accounting for frame time here)
      blk6.frameNStart = frameN;  // exact frame index
      
      blk6.setAutoDraw(true);
    }
    
    
    // *blk7* updates
    if (t >= 0.0 && blk7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blk7.tStart = t;  // (not accounting for frame time here)
      blk7.frameNStart = frameN;  // exact frame index
      
      blk7.setAutoDraw(true);
    }
    
    
    // *blk8* updates
    if (t >= 0.0 && blk8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blk8.tStart = t;  // (not accounting for frame time here)
      blk8.frameNStart = frameN;  // exact frame index
      
      blk8.setAutoDraw(true);
    }
    
    
    // *blk9* updates
    if (t >= 0.0 && blk9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blk9.tStart = t;  // (not accounting for frame time here)
      blk9.frameNStart = frameN;  // exact frame index
      
      blk9.setAutoDraw(true);
    }
    
    // *corsi_mouse* updates
    if (t >= 0.0 && corsi_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      corsi_mouse.tStart = t;  // (not accounting for frame time here)
      corsi_mouse.frameNStart = frameN;  // exact frame index
      
      corsi_mouse.status = PsychoJS.Status.STARTED;
      corsi_mouse.mouseClock.reset();
      prevButtonState = corsi_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (corsi_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = corsi_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          corsi_mouse.clickableObjects = eval([blk1, blk2, blk3, blk4, blk5, blk6, blk7, blk8, blk9])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(corsi_mouse.clickableObjects)) {
              corsi_mouse.clickableObjects = [corsi_mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of corsi_mouse.clickableObjects) {
              if (obj.contains(corsi_mouse)) {
                  gotValidClick = true;
                  corsi_mouse.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              corsi_mouse.clicked_name.push(null);
          }
          _mouseXYs = corsi_mouse.getPos();
          corsi_mouse.x.push(_mouseXYs[0]);
          corsi_mouse.y.push(_mouseXYs[1]);
          corsi_mouse.leftButton.push(_mouseButtons[0]);
          corsi_mouse.midButton.push(_mouseButtons[1]);
          corsi_mouse.rightButton.push(_mouseButtons[2]);
          corsi_mouse.time.push(corsi_mouse.mouseClock.getTime());
        }
      }
    }
    // Run 'Each Frame' code from check_correct
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    for (var block, _pj_c = 0, _pj_a = respond_blocks, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        block = _pj_a[_pj_c];
        if (corsi_mouse.isPressedIn(block)) {
            block.fillColor = [1, 0, 0];
            if ((! _pj.in_es6(block.name, order_clicked))) {
                order_clicked.push(block.name);
            }
        }
    }
    if ((corsi_mouse.clicked_name.length === nBlocks)) {
        show = true;
    }
    if (corsi_mouse.isPressedIn(submit_button)) {
        continueRoutine = false;
    }
    
    
    // *submit_button* updates
    if ((show) && submit_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      submit_button.tStart = t;  // (not accounting for frame time here)
      submit_button.frameNStart = frameN;  // exact frame index
      
      submit_button.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of corsi_respondComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function corsi_respondRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'corsi_respond' ---
    for (const thisComponent of corsi_respondComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('corsi_respond.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('corsi_mouse.x', corsi_mouse.x);
    psychoJS.experiment.addData('corsi_mouse.y', corsi_mouse.y);
    psychoJS.experiment.addData('corsi_mouse.leftButton', corsi_mouse.leftButton);
    psychoJS.experiment.addData('corsi_mouse.midButton', corsi_mouse.midButton);
    psychoJS.experiment.addData('corsi_mouse.rightButton', corsi_mouse.rightButton);
    psychoJS.experiment.addData('corsi_mouse.time', corsi_mouse.time);
    psychoJS.experiment.addData('corsi_mouse.clicked_name', corsi_mouse.clicked_name);
    
    // Run 'End Routine' code from check_correct
    correct = 0;
    console.log("order_clicked", order_clicked);
    console.log("correct_order", correct_order);
    correct_list = [];
    count = 0;
    for (var name, _pj_c = 0, _pj_a = order_clicked, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        name = _pj_a[_pj_c];
        if ((name === correct_order[count])) {
            correct_list.push(1);
        } else {
            correct_list.push(0);
        }
        count += 1;
    }
    console.log(correct_list);
    psychoJS.experiment.addData("correct_list", correct_list);
    if ((util.sum(correct_list) === correct_list.length)) {
        correct = 1;
    }
    psychoJS.experiment.addData("corsi_correct", correct);
    if (correct) {
        nBlocks += 1;
    }
    if ((nBlocks > blocks.length)) {
        nBlocks = blocks.length;
    }
    
    // the Routine "corsi_respond" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var FBMaxDurationReached;
var FBMaxDuration;
var FBComponents;
function FBRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'FB' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    FBClock.reset();
    routineTimer.reset();
    FBMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from reset_col_code
    for (var block, _pj_c = 0, _pj_a = respond_blocks, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        block = _pj_a[_pj_c];
        block.fillColor = new util.Color([1 ,1, 1])
    }
    
    for (var block, _pj_c = 0, _pj_a = blocks, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        block = _pj_a[_pj_c];
        block.fillColor = new util.Color([1 ,1, 1])
    }
    
    psychoJS.experiment.addData('FB.started', globalClock.getTime());
    FBMaxDuration = null
    // keep track of which components have finished
    FBComponents = [];
    
    for (const thisComponent of FBComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function FBRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'FB' ---
    // get current time
    t = FBClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of FBComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function FBRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'FB' ---
    for (const thisComponent of FBComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('FB.stopped', globalClock.getTime());
    // Run 'End Routine' code from end_task
    if ((! correct)) {
        incorrect_count += 1;
    }
    if ((incorrect_count > 3)) {
        corsi_task.finished = true;
    }
    if ((nBlocks === 9)) {
        corsi_task.finished = true;
    }
    
    // the Routine "FB" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var endMaxDurationReached;
var endMaxDuration;
var endComponents;
function endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    endClock.reset();
    routineTimer.reset();
    endMaxDurationReached = false;
    // update component parameters for each repeat
    text_end.setText(("Your maximum blocks remembered was: " + (nBlocks - 1).toString()));
    // Disable downloading results to browser
    psychoJS._saveResults = 0; 
    
    // Generate filename for results
    let filename = psychoJS._experiment._experimentName + '_' + psychoJS._experiment._datetime + '.csv';
    
    // Extract data object from experiment
    let dataObj = psychoJS._experiment._trialsData;
    
    // Convert data object to CSV
    let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
        console.log(dataObj)
        return Object.values(it).toString()
    }).join('\n')
    
    // Send data to OSF via DataPipe
    console.log('Saving data...');
    fetch('https://pipe.jspsych.org/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
        },
        body: JSON.stringify({
            experimentID: 'twuyYotue693', // ⭑ UPDATE WITH YOUR DATAPIPE EXPERIMENT ID ⭑
            filename: filename,
            data: data,
        }),
    }).then(response => response.json()).then(data => {
        // Log response and force experiment end
        console.log(data);
        quitPsychoJS();
    })
    psychoJS.experiment.addData('end.started', globalClock.getTime());
    endMaxDuration = null
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(text_end);
    
    for (const thisComponent of endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end' ---
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_end* updates
    if (t >= 0.0 && text_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_end.tStart = t;  // (not accounting for frame time here)
      text_end.frameNStart = frameN;  // exact frame index
      
      text_end.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end' ---
    for (const thisComponent of endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('end.stopped', globalClock.getTime());
    // the Routine "end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
