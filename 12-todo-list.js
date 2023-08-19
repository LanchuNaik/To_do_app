const todoList=[{name:'reading', 
                  date:'2023-06-1'},
                  {name:'washing dish',
                  date:'2023-06-2'}];


display();

function display(){
  let todoListHTML='';

  todoList.forEach(function(todoObject,index){
    const{name,date}=todoObject;

    //creating html code for each todo
    const html=`
      <div>${name}</div>
      <div>${date}</div>
      <button onclick="todoList.splice(${index},1);
        display();
    " class="delete-button">Delete</button>`;

    //to combining all html code we use accumulator pattern
    todoListHTML+=html;
  })
   console.log(todoListHTML);
   document.querySelector('.js-display').innerHTML=todoListHTML;
}

function addTodo(){
  const inputElem=document.querySelector('.js-name-input');
  const name=inputElem.value;

  const dateElem=document.querySelector('.js-date-input');
  const date=dateElem.value;

  //console.log(name);
  todoList.push({
    name:name,
    date:date
  });

  inputElem.value='';
  dateElem.value='';

  display();
}