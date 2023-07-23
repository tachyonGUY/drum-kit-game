
var object={"w":"sounds\\crash.mp3","a":"sounds\\kick-bass.mp3","s":"sounds\\snare.mp3","d":"sounds\\tom-1.mp3","j":"sounds\\tom-2.mp3","k":"sounds\\tom-3.mp3","l":"sounds\\tom-4.mp3"};

$(".drum").on({click:function(){makeSound(this.innerHTML);showAnimation(this.innerHTML);}},{keydown:function(event){makeSound(event.key);showAnimation(event.key);
}});

function makeSound(key){
  const audio = new Audio(object[key]);//this is object creation using constructor name "Audio having methods like play()"
  audio.play(); 
}

function showAnimation(key){
  document.querySelector("."+key).classList.add("pressed");
   setTimeout(function(){document.querySelector("."+key).classList.remove("pressed")},100);
  }
  
  
  
 