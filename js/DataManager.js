(function(){
  var dataManager = window.dataManager = {
    chatRooms: {},
    sendMessage: function(message){
      $.ajax("http://127.0.0.1:8080/1/classes/"+chatRoom, {
        beforeSend: headerSetter,  
        type: "POST",
        contentType: "application/json",
        data: message,
        success: function(){
          $('#text').val('');  
        },
        error: function() {}
      });
    }
  }	

  var fetchData = function(room){
		$.ajax("http://127.0.0.1:8080/1/classes/" + room + "?order=-createdAt", {
			beforeSend: headerSetter,
			type: "GET",
			contentType: "application/json",
			success: function(data){
				dataManager.chatRooms[room] = data;
				// dataManager.chatRooms.trigger('fetched');
			},
			error: function() {}
		});
	};

	setInterval(function(){
		fetchData(chatRoom);
  }, 1000);

}());
