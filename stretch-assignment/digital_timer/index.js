//======================== Timer Class ========================
class Timer {
   constructor(){
      this.milsT = 0;
      this.milsH = 0;
      this.secsO = 0;
      this.secsT = 0;
      this.interval = null;
   }

   start(){
      const _this = this;

      this.interval = setInterval( function() {
         
         _this.milsT++;
         if ( _this.milsT > 9 ) {
            _this.milsH++;
            _this.milsT = 0;
            
            if ( _this.milsH > 9 ){
               _this.secsO++;
               _this.milsH = 0;
               
               if ( _this.secsO > 9 ){
                  _this.secsT++;
                  _this.secsO = 0;
               }
            }
         }

         document.querySelector('#msTens').textContent = _this.milsT;
         document.querySelector('#msHundreds').textContent = _this.milsH;
         document.querySelector('#secondOnes').textContent = _this.secsO;
         document.querySelector('#secondTens').textContent = _this.secsT;

         if ( _this.secsT === 1 ) { clearInterval( _this.interval ); }

      }, 10);
   }


   stop() { clearInterval( this.interval ); }

   reset(){
      clearInterval( this.interval );
      this.milsT = 0;
      this.milsH = 0;
      this.secsO = 0;
      this.secsT = 0;
      
      document.querySelector('#msTens').textContent = 0;
      document.querySelector('#msHundreds').textContent = 0;
      document.querySelector('#secondOnes').textContent = 0;
      document.querySelector('#secondTens').textContent = 0;
   }
}//================================================


// Vars
const myTimer     = new Timer();
const buttonDiv   = document.createElement( 'div' );
const startButton = document.createElement( 'button' );
const resetButton = document.createElement( 'button' );

//  Attributes & Styles
startButton.setAttribute( 'onclick', 'btnStartFn();' );
resetButton.setAttribute( 'onclick', 'btnResetFn();' );

startButton.style.margin = "0 2rem";
startButton.textContent  = 'Start';

resetButton.textContent  = 'Reset';
resetButton.style.margin = "0 2rem";

buttonDiv.style.margin   = '0 auto';

buttonDiv.appendChild( startButton );
buttonDiv.appendChild( resetButton );

// On Load
window.onload = function() {
   document.body.appendChild( buttonDiv );
   document.body.style.display = "flex";
   document.body.style["flex-direction"] = 'column';
};

//=================== Functions ===================
const btnStartFn = () => {
   myTimer.start();
   startButton.disabled = true;
}

const btnResetFn = () => {
   myTimer.reset();
   startButton.disabled = false;
}
//====================== EoF ======================