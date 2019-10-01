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

         _this.setTextContent( _this.milsT, _this.milsH, _this.secsO, _this.secsT );

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
      
      this.setTextContent( 0, 0, 0, 0 );
   }
   
   setTextContent( mT, mH, sO, sT ) {
      document.querySelector('#msTens').textContent = mT;
      document.querySelector('#msHundreds').textContent = mH;
      document.querySelector('#secondOnes').textContent = sO;
      document.querySelector('#secondTens').textContent = sT;
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