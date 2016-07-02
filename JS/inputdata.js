var total = 0;
    var fdb = new ForerunnerDB();
    var db = fdb.db("myDatabaseName");
    var entryCollection = db.collection("entryCollection");
    
    
    function addToEntry(){
      console.log("Add button clicked")
      entryCollection.insert({
        amount: $("#amount").val(),
        name: $("#name").val(),
        date: $("#date").val(),
        type: $("#type").val()
        
      });
     
    }
    
    function writeOnTable(){
      var table = entryCollection.find();
      $("#stuffBody").html("");
      for(var i = 0; i < table.length-1; i++){
          $("#stuffBody").append("<tr><td>"+table[i].date+"</td><td>"+table[i].amount+"</td><td>"+table[i].type+"</td><td>"+table[i].name+"</td></tr>");
      
      }
    }
    
    $("body #submitbtn").on("click",function(){
      console.log("Clicked Add button")
      addToEntry();
      writeOnTable();
    });