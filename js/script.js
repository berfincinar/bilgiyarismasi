var ul=document.getElementById('ul');
   var btn=document.getElementById('button');
   var scoreCard=document.getElementById('scoreCard');
   var quizBox=document.getElementById('questionBox');
  var op1=document.getElementById('op1');
  var op2=document.getElementById('op2');
  var op3=document.getElementById('op3');
  var op4=document.getElementById('op4');
  var player=document.getElementById("audio-player");
  var timer=document.getElementById('timer');
  var kronometre=document.getElementById('kronometre');
  var zaman=document.getElementById('saniye');
 
//Timer
var sayac=0;
var deger;
var saniye=20;
function saniyeDurdur()
  {
  window.clearInterval(deger);
  }
function saniyeBaslat()
{
  this.saniye --;
  if(this.saniye >=0){
    document.getElementById('saniye').innerHTML=saniye;
  }
  else{
    window.location.href="start.html";
    window.alert("Süreniz Bitti");
     
  }
}
var deger=window.setInterval('saniyeBaslat()',1000);

var sec = 0;
      function pad ( val ) { return val > 9 ? val : "0" + val; }
var func;
  

    function timerstart(){
func = setInterval( function(){
              $("#seconds").html(pad(++sec%60));
              $("#minutes").html(pad(parseInt(sec/60,10)));
          }, 1000);
}
timerstart();

          function myStopFunction() {
                  clearInterval(func);
          }
function myClearFunction(){
myStopFunction();
$("#seconds").html(pad(00));
              $("#minutes").html(pad(00));
sec = 0;
}

 while(this.saniye==0){
                  this.app.next();
                  this.app.clickAble();
              }

//questions

      var app={
                questions:[
                          {q:'Web sayfasında resim göstermek için kullanılan etiket hangisidir.?', options:['picture','image','img','src'],answer:3},

                          {q:'< b > etiketi yazıları kalın kazmak için kullanılır, bu etiketten başka hangi etiket yazıları kalın yapar ?',options:['strong','dar','black','emp'],answer:1},

                          {q:'Etiketler ve yazılar hangi bölüme yazılırsa direkt olarak görüntülenmez ?',options:['html','head','title','body'],answer:2},

                          {q:'Web sayfalarına yatay çizgi eklemek için hangi etiket kullanılır ?',options:['hr','line','line direction="horizontal"','tr'],answer:1},
                          
                          {q:'Dinlediğiniz müziği seslendiren Kimdir? <br><audio controls autoplay><source src="sound/Adm_Kalbine_Yaz_181007_29032020.mp3" type="audio/mpeg"></audio> ',options:['Hadise','Tarkan','Murat Boz','Gülşen'],answer:2 },

                          {q:'Dinlediğiniz müziğin adı nedir? <br><audio controls autoplay><source src="sound/Hadise_-_Ak_Dediin_175330_23032020.mp3" type="audio/mpeg"></audio> ',options:['Aşk Dediğin','Aşk Kaç Beden Giyer?','Yolumun Işığı','Kahraman'],answer:1 },

                          {q:'Dinlediğiniz müziği seslendirenler kimdir? <br><audio controls autoplay><source src="sound/Mustafa_Sandal_Zeynep_Bastk_-_Mod_131348_23032020.mp3" type="audio/mpeg"></audio> ',options:['Mustafa Sandal-Zeynep Bastık',
                          'Murat Dalkılıç-Hande Yener','Murat Boz- Gülşen','Hadise-Oğuzhan Koç'],answer:1 },

                          {q:'Aşağıdaki videoda "Black Widow" karakterine can veren oyuncu kimdir? <br><center><video width="250" height="250"controls autoplay="true"><source src="videos/Black_Widow_Sorgu_Sahnesi__The_Avengers_2012__HD.mp4" type="video/mp4"></video></center>',options:['Gal Gadot','Mila Kunis',
                          'Jennifer Lawrence','Scarlett Johansson'],answer:4},

                          {q:'Aşağıdaki sahne hangi filme aittir? <br><center><video width="250" height="250"controls autoplay="true"><source src="videos/Terminatr_2_Kyamet_Gn_-_Bar_Sahnesi.mp4" type="video/mp4"></video></center>',options:['Terminatör 1','Terminatör 2-Mahşer Günü',
                          'Terminatör 3-Makinelerin Yükselişi','Terminatör 5-Genisys'],answer:2},
                         
                         {q:'Aşağıdaki sahne hangi filme aittir? <br><center><video width="250" height="250" controls autoplay="true"><source src="videos/WhatsApp Video 2020-05-05 at 18.02.00.mp4" type="video/mp4"></video></center>',options:['Wonder Woman','Captain Marvel',
                          'Wonder Woman 2','Justice League(Adalet Birliği)'],answer:4},

                           {q:' Görseldeki Şehrimiz Hangisidir? <br><center><img src="img/Ankara.jpeg"  width="250" height="250"></center> ',options:['İstanbul','Hatay','Ankara','Sivas'],answer:3},

                           {q:' Görseldeki Şehrimiz Hangisidir? <br><center><img src="img/Sivas.jpeg"  width="250" height="250"></center> ',options:['İstanbul','Çorum','Ankara','Sivas'],answer:4},

                           {q:' Görseldeki Şehrimiz Hangisidir? <br><center><img src="img/çanakkale.jpeg"  width="250" height="250"></center> ',options:['İstanbul','Samsun','Ankara','Çanakkale'],answer:4},

                           {q:' Görseldeki Şehrimiz Hangisidir? <br><center><img src="img/İstanbul.jpeg"  width="250" height="250" ></center> ',options:['İstanbul','Antalya','İzmir','Sivas'],answer:1},
                           
                           {q:'(2*2)+(4-2)=?  ',options:['6','8'],answer:1},

                           {q:'İtalyanların 1173 yılında yapılan ünlü Pisa Kulesi mühendislerin hatası yüzünden yamuk yapılmıştır.  ',options:['Doğru','Yanlış'],answer:2},

                           {q:'Atatürk 1881 yılında Selanik te doğmuştur.',options:['Doğru','Yanlış'],answer:1}
                          ],
                index:0,

                load:function(){
                     if(this.index<=this.questions.length-1){
                        quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;      
                        op1.innerHTML=this.questions[this.index].options[0];
                        op2.innerHTML=this.questions[this.index].options[1];
                        op3.innerHTML=this.questions[this.index].options[2];
                        op4.innerHTML=this.questions[this.index].options[3];
                           this.scoreCard();
                         kronometre.style.display="none"; 
                        
                         if(this.index>=14){
                        quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;      
                        op1.innerHTML=this.questions[this.index].options[0];
                        op2.innerHTML=this.questions[this.index].options[1]; 
                        op3.style.display="none";
                        op4.style.display="none";                
                           this.scoreCard();
                         kronometre.style.display="none"; 
                        }
                        }
                        else{

                        quizBox.innerHTML=' <center>Oyun Bitti! </center>' ;    
                        op1.style.display="none";
                        op2.style.display="none";
                        op3.style.display="none";
                        op4.style.display="none";
                        btn.style.display="none";
                        timer.style.display="none";
                        kronometre.style.display="";
                        zaman.style.display="none";
                        }
                         if(saniye==0)
                           {  
                              
                              window.clearInterval(func);
                              quizBox.innerHTML="----------Oyun Bitti!----------" ;    
                        op1.style.display="none";
                        op2.style.display="none";
                        op3.style.display="none";
                        op4.style.display="none";
                        btn.style.display="none";
                        timer.style.display="none";
                        kronometre.style.display="";   
                       
                           }

                },
                 next:function(){
                    this.index++;
                    this.load();
                    
                 },
                check:function(ele){
                   
                         var id=ele.id.split('');
                         
                         if(id[id.length-1]==this.questions[this.index].answer){
                          this.score++;
                          ele.className="correct";
                          ele.innerHTML="Doğru";
                          this.scoreCard();

                         }
                         else{
                          ele.className="wrong";
                          ele.innerHTML="Yanlış";
                           document.getElementById('op' + this.questions[this.index].answer).className ="correct";
                         }
                },
                notClickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                            ul.children[i].style.pointerEvents="none";

                       }
                },

                clickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                            ul.children[i].style.pointerEvents="auto";
                            ul.children[i].className=''
                       }
                },
                score:0,
                scoreCard:function(){
                  scoreCard.innerHTML=this.questions.length+"/"+this.score;
                }
                
           }


           window.onload=app.load();

           function button(ele){
                 app.check(ele);
                 app.notClickAble();
           }

         function  next(){
              app.next();
              app.clickAble();
              this.sayac++;
              this.saniye=20;
             
              if(sayac>16)
                      {
                            clearInterval(func);
                            window.clearInterval(deger);
                      }
         }