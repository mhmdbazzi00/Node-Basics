
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
console.log(onDataReceived)
function onDataReceived(text) {
  if (text === 'quit'.replace().split() || text === 'exit'.replace().split()) {
    quit();
  }
  else if(text=== 'hello'){
   console.log("hello!")
  }
  else if(text.startsWith('help')){
    //  helping people listing possible commands
    const helping = text.replace('help ', '')
    help(helping);
  }
  else if(text === 'help'){
    console.log("quit/exit")
    console.log("hello")
    console.log("list")
    console.log("add")
    console.log("Remove")

  }
  else if(text === 'list'){
   list()
  }
  else if (text.startsWith('add ')){
    add()
  }
   else if (text.startsWith('remove ')){
    Remove()
   }
  else {
    unknownCommand(text);
  }
}




/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(name){
  console.log(`hello ${name}!`) //Print 'hello' with the specified argument

}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("Mohammad Bazzi")
function help(helping) {
  console.log(`help ${helping}`);
}
function list(){
  for (i=0;i<tasks.length;i++){
    console.log(`${i+1} - [${tasks[i].done? "✓":" "}] ${tasks[i].taskName}`);  // here the function will print the number of task first, then a dash, then the task it self , then a new line
  }
  }


const tasks = [{task:"1_buy groceries",done:false}, {task:"2_prepare groceries", done:false},{task:"3_make food", done:false}];
function list(){
for (i=0;i<tasks.length;i++){
  console.log(tasks[i]+'\n');
}
}

function add(){
  tasks.push(result.slice(1,result.length))
}

function Remove(){

tasks.splice(parseInt(result[1]-1),1)
}
function ifremove() {
  if (parseInt(result[1]) > tasks.length || parseInt(result[1]) < 1) {//if the umber is more than the tasks or lower than 1 it will print that the task number does not exist
    console.log("Task number does not exist");
  }
}
function edit() {
  if (result.length < 2) {
    console.log('Error: Please provide the task number and new text.'); // checking if the user's input is a number
  } else if (result.length === 2) {      // checking if it exactly has two elements
    var newText = result[1];
    tasks[tasks.length - 1] = newText;
    console.log('Task ' + tasks.length + ' has been updated to "' + newText + '".');
  } else if (result.length >= 3) {
    var taskIndex = result[1] - 1;

    var newText = result.slice(2).join(' ');
    if (taskIndex < 0 || taskIndex >= tasks.length) {
      console.log('Error: Invalid task number.');
    } else {
      tasks[taskIndex] = newText;
      console.log('Task ' + (taskIndex + 1) + ' has been updated to "' + newText + '".');
    }
  }
}

function Check(){
  tasks[parseInt(result[1]-1)].done=true
}
function unCheck(){
  tasks[parseInt(result[1]-1)].done=false
}

