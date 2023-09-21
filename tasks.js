
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
    FileList()
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
  console.log(onDataReceived+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(){
  console.log('hello'+chickenSub+ 'world'+'!')
  var chickenSub = text.trim()

  
}
function help(){
  console.log('help')
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
