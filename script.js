$(".add-todo-wrap").on("click", ".addIcon", function() {  
    $(this).parent().addClass("active");
    $(this).next("input").removeAttr("disabled").focus();   
  });
  
  //Enable/Disable Add button
  $("#addToDo").keyup(function(){
    var inputVal = $(this).val(); 
    if(!inputVal == "") {
      $(".addButton").addClass("active");
    } else {
      $(".addButton").removeClass("active");
    } 
  });
  
  //Reset ToDoList Header
  $(document).mouseup(function(e){
    var todoHeader = $("#todoHeader");
    if (!todoHeader.is(e.target) && todoHeader.has(e.target).length === 0) {
      todoHeader.removeClass("active");
      $("#addToDo").attr("disabled", "true");
      }  
  });
  
  //Add ToDoList
  $(".add-todo-wrap").on("click", ".addButton", function() {  
    if(!$("#addToDo").val() == "") {    
      var inputText = $("#addToDo").val();
      var editField = "<input type='text' class='editField'>";
      var buttons = "<div class='button-group'><span class='mdi mdi-pencil edit-btn'></span> <span class='mdi mdi-delete delete-btn'></span></div>";
      $(".todo-list ul").prepend("<li>" + "<span class='toDoText'>" + inputText + "</span>" + editField + buttons + "</li>");
      $("#addToDo").val("");
      $(this).parent().removeClass("active"); 
      $(this).removeClass("active");    
    }  
    
  });
  
  //Delete ToDoList
  $(".todo-list").on("click", ".delete-btn", function() {
    $(this).parents("li").remove();
  });
  
  //Edit ToDoList
  $(".todo-list").on("click", ".edit-btn", function() {
    $(this).parents("li").addClass("editMode");
    var toDoText = $(this).parents("li").find(".toDoText").text();
    $(this).parents("li").find(".editField").val(toDoText).focus();
    $(this).removeClass().addClass("mdi mdi-send save-btn");
    $(this).siblings(".delete-btn").remove();
  });
  //After Edit ToDoList
  $(".todo-list").on("click", ".save-btn", function() {
    var editFieldVal = $(this).parents("li").find(".editField").val();
    $(this).parents("li").find(".toDoText").text(editFieldVal);
    $(this).parents("li").removeClass("editMode");
    $(this).removeClass().addClass("mdi mdi-pencil edit-btn");
    $(this).after("<span class='mdi mdi-delete delete-btn'></span>");
  });  