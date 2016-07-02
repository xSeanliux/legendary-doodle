    var version = 0.1
    var total = 0;
    var fdb = new ForerunnerDB();
    var db = fdb.db("myDatabaseName");
    var entryCollection = db.collection("entryCollection");
    
    
    function addToEntry(){
    
      entryCollection.insert({
        amount: $("#amount").val(),
        name: $("#name").val(),
        date: $("#date").val(),
        type: $("#type").val()
        
      });
      entryCollection.save();
     
    }
    
    function writeOnTable(){
      var table = entryCollection.find();
      $("#stuffBody").html("");
      for(var i = 0; i < table.length; i++){
          $("#stuffBody").append("<tr><td>"+table[i].date+"</td><td>"+table[i].amount+"</td><td>"+table[i].type+"</td><td>"+table[i].name+"</td></tr>");
      
      }
      entryCollection.save();
    }
    
    function submitAll(){
      
      addToEntry();
      writeOnTable();
      entryCollection.save();
    };
