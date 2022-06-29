class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No..");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.message = createElement("h2")
  }

  hide(){
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
  }

  display(){
    this.title.html("Riddle Game");
    this.title.position(350, 0);

   
    this.question.html("What type of lion never roars?")
    this.question.position(150, 80);
    this.option1.html("1: A dandelion " );
    this.option1.position(150, 100);
    this.option2.html("2: A captured lion" );
    this.option2.position(150, 120);
    this.option3.html("3: A lion cub " );
    this.option3.position(150, 140);
    this.option4.html("4: A mountain lion" );
    this.option4.position(150, 160);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);

    this.button.mousePressed(()=>{
      
       this.message.html("Thank You, Your Answer Has Been Submitted");
       this.message.position(300, 300);

      

    });
  }
}
