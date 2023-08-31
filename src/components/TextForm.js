import React, {useState} from 'react'
// import TextForm from './components/TextForm';


export default function TextForm(props) {
  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(0);
  let countChar = 0,
  countCons = 0;
  
        const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
          let newText = text.toUpperCase();
          setText(newText); 
          props.showAlert("Converted to Uppercase", "success")
        }
        const handleLoClick = ()=>{
            // console.log("Uppercase was clicked" + text);
          let newText = text.toLowerCase();
          setText(newText); 
          props.showAlert("Converted to Lowercase", "success" )
        }
        const speak = () =>{
          let msg = new SpeechSynthesisUtterance();
          msg.text = text;
          window.speechSynthesis.speak(msg);
          props.showAlert("Start Speaking", "success")
        }
        // Function to count Vowels:

        const handleVoClick = () => {
          for (count = 0; count <= text.length; count++) {
            if (text.charAt(count).match(/[aeiouAEIOU]/)) {
              countChar++;
              setCount (countChar);
            }
            
        }
        
    // console.log("No. of Vowels are: " + countChar);
  }


 // Function to count Consonants:
        const handleCoClick = () => {
          for (count1 = 0; count1 <= text.length; count1++) {
            if (text.charAt(count1).match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)) {
              countCons++;
              setCount1(countCons);
            }
          }
  }
 
  const [text, setText] = useState("Enter text here2");
  // const [text, setText] = useState(""); // Initialize text state
  const [fWord, findWord] = useState(""); // Initialize findWord state
  const [rWord, replaceWord] = useState(""); // Initialize replaceWord state

          const handleOnChange = (event)=>{
              console.log("On change");
              setText(event.target.value);
          }
          const handleFindChange = (event) => {
            findWord(event.target.value);
          }
        
          const handleReplaceChange = (event) => {
            replaceWord(event.target.value);
          }
  
            const handleReplaceClick = () => {
              let newText = text.replaceAll(fWord, rWord);
              setText(newText);
            }
            const handleExtraSpace = () =>{
              let newText = text.split (/[ ]+/);
              setText (countWords(newText.join(" ")));
              props.showAlert("Removed Extra Space", "success");
            };
            const countWords = (str) => {
              let words;
              if (str === " ") {
                words = 0;
              } else {
                words = str.trim().split(/\s+/).length;
              }
              return words;
            };
            
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
      <> 
      <div className="container  " style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="container">
        {/* <label for="myBox" className="form-label">Example textarea</label> */}
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'light', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="5"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button type="submit" onClick={speak} className="btn btn-primary my-2">Speak</button>
        <button type="button" className="btn btn-warning mx-2" onClick={handleExtraSpace} >Remove Extra Spaces</button>
        <button className="btn btn-primary mx-1" onClick={handleVoClick}>
          Count no. of Vowels
        </button>

        <button className="btn btn-primary mx-1" onClick={handleCoClick}>
          Count no. of Consonants
        </button>
        
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1> Your text summary </h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
      <h3>You have entered:</h3>
      <p>{count} No. of Vowels</p>
      <p>{count1} No. of Consonants</p>


   
        
    <div>
      <textarea  style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='black'?'white':'#042743'}} value={text} onChange={(event) => setText(event.target.value)}/>
      <div>
        <textarea  style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='black'?'black':'#042743'}} placeholder="Find word" value={fWord} onChange={handleFindChange}/>
    </div >
    <div>
      <textarea  style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} placeholder="Replace with" value={rWord} onChange={handleReplaceChange}/>
    </div>
        <button  style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} onClick={handleReplaceClick}>Replace</button></div>
    </div>
    
  


      </>
  );
}