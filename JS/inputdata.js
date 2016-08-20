    var version = 0.1
    var total = 0;
    var fdb = new ForerunnerDB();
    var db = fdb.db("myDatabaseName");
    var entryCollection = db.collection("entryCollection");
    
    
    function dateToString(date){
        var result;
        if(date.getMonth() >= 10){
        if(date.getDate() >= 10){
          var result = date.getFullYear().toString()+"-"+date.getMonth().toString()+"-"+date.getDate().toString();
        } else {
          var result = date.getFullYear().toString()+"-"+date.getMonth().toString()+"-0"+date.getDate().toString();
        }
      } else {
        if(date.getDate() >= 10){
          var result = date.getFullYear().toString()+"-0"+date.getMonth().toString()+"-"+date.getDate().toString();
        } else {
          var result = date.getFullYear().toString()+"-0"+date.getMonth().toString()+"-0"+date.getDate().toString();
        }
        
      }
      
      return result;
    }
    
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
    
    function printTable(table){
    
      $("#stuffBody").html("");
      for(var i = 0; i < table.length; i++){
          $("#stuffBody").append("<tr><td>"+table[i].date+"</td><td>"+table[i].amount+"</td><td>"+table[i].type+"</td><td>"+table[i].name+"</td></tr>");
      
      }
      entryCollection.save();
    }
    
    function addTable(table){
        for(var i = 0; i < table.length; i++){
          $("#stuffBody").append("<tr><td>"+table[i].date+"</td><td>"+table[i].amount+"</td><td>"+table[i].type+"</td><td>"+table[i].name+"</td></tr>");
      
      }
    }
    
    function findByDate(firstDate, secondDate){
        var table = entryCollection.find({
            date: {
                 "$gt": firstDate,
                "$lt": secondDate
            }   
                
            
        });
        
        printTable(table);
        
        
    }
    
    
    
    function submitAll(){
      
      addToEntry();
      writeOnTable();
      entryCollection.save();
    };
