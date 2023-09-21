
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


const tasks = ["1_buy groceries","2_prepare groceries","3_make food"];
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
