window.onload= function(){
  const c = document.getElementById('canvas');
  c.width = window.innerWidth;
  c.height = 509;
var context = "";
  var data = [];

  const ctx = c.getContext('2d');
const enviroment = new Enviroment(c, ctx);

   $.ajax({
        url: "http://api.open-notify.org/astros.json",
        method: 'GET',
        success: function(space) {
        data = space.people;
        console.log(data);
        }

    });

gameloop();



   function gameloop(){
     ctx.fillRect(0,0,c.width, c.height);
     enviroment.update();
     enviroment.render();
     ctx.font= "14px Georgia";
     ctx.fillStyle = "white";
     for(var i = 0; i < data.length; i++){
           context = data[i].name;
          ctx.fillText(context, enviroment.bgWidth/2,100 + 20 * i);
        }

     window.requestAnimationFrame(gameloop);
   }
}
