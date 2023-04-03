let flag=0;
$(document).ready(function(){
 
    console.log(flag);
    $("#addTask").click(function () {
        let input = $("#new-task").val();
        $("#addTask").html("Add");
        if (input == "") {
          $("#error").html("Please enter something!!!");
        } else {
          $("#error").html("");
          if (flag == 1) {
            $.ajax({
              url: "update.php",
              type: "POST",
              data: "data=" + input,
              datatype: "text",
            }).done(function (result) {
              $("#incomplete-tasks").html(result);
              flag = 0;
            });
          } else {
            $.ajax({
              url: "addtask.php",
              type: "POST",
              data: "data=" + input,
              datatype: "text",
            }).done(function (result) {
              $("#incomplete-tasks").html(result);
            });
          }
        }
      });

});


function  incomplete_to_complete(id) {
            //alert("Checkbox is clicked");
        $newid=id;
       // console.log(id);
        $.ajax({
            method:"POST",
            url:"complete.php",
            data:"d="+$newid,

        }).done(function(result){
            $("#completed-tasks").html(result);
            //displaycompleted(result);
           // console.log(result);
           deletetask(id);
        })
}
displaytodo();
// function addtask()
// {
//     $input=$("#new-task").val();
   
//     if($input!="")
//     {
//         $('#message').html("");
//         $.ajax({
//             method:"POST",
//             url:"addtask.php",
//             data:"d="+$input,
//             datatype:"text"
//         }).done(function(result){
//             displaytodo(result);
           
//         });
      
//     }
//     else{
//          $('#message').html('<div class="alert alert-danger">Enter Task Details</div>');
// }
// }

function deletetask(id)
{
  
    console.log(id);
    $.ajax({
    method:"POST",
    url:"delete.php",
    datatype:"text",
    data:"d="+id,
    success:function(data)
{
   //console.log(data);
displaytodo(data);
}
});
console.log(flag);
}  
let global=0;
function edittask(id)
{
    flag=1;
   
    global = id; 
    $.ajax({
        method:"POST",
        url:"update.php",
        datatype:"text",
        data:"d="+id,
        success:function(data)
        {
            
           $("#new-task").val(data);
           $("#addTask").html("Update");
           //console.log(data);
        }
    });
    
}

function displaytodo()
{
    $('#message').html('');
    $.ajax({
        method:"POST",
        url:"display.php",
        datatype:"text",
        
        success:function(data)
        { 
            $('#message').html('Task Details Added');
            $("#incomplete-tasks").html(data);
            
        }
    });
}

function deleteTaskCompleted(id) {
    $.ajax({
      url: "deleteCompleted.php",
      type: "POST",
      data: "id=" + id,
    }).done(function (result) {
      $("#completed-tasks").html(result);
    });
  }


// function update()
// {
    
//     $new=$("#new-task").val();

//     $.ajax({
//         method:"POST",
//         url:"update.php",
//         data:{"d":$new,"globalid":global},
//         success:function(result)
//         {
//             displaytodo(result);
          
//         }
//     })
// }
function completedRevert(id) {
    $.ajax({
      url: "completeRevert.php",
      type: "POST",
      data: "id=" + id,
    }).done(function (result) {
      $("#incomplete-tasks").html(result);
      deleteTaskCompleted(id);
    });
  }
function displaycompleted()
{
    
    $.ajax({
        method:"POST",
        url:"displaycompleted.php",
        datatype:"text",
        
        success:function(data)
        { 
            console.log(data);
           // $("#completed-tasks").html(data);
            
        }
    });
}