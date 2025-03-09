import { useRef, useState } from 'react'
import './App.css'
import { casualWords, lengthenedWords, misspellings } from "./wordsReplacements";
import { charsTypos, multiCharsEndOfString, replaceWithMisspellings, separateMessages } from './textTransforms';

const botMsg = `Hello. I know this might be a bit unexpected, but something about you caught my attention, and I’d love the chance to get to know you. I’d be happy to meet up, have a chat, and see where things go. What do you think? 😊`

function App() {
  const [humanizeText, setHumanizeText] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const onHumanize = () => {
    if (!inputRef.current) return;

    let textWithTypos = charsTypos(inputRef.current.value);
    textWithTypos = multiCharsEndOfString(textWithTypos);
    textWithTypos = replaceWithMisspellings(textWithTypos, misspellings);
    textWithTypos = replaceWithMisspellings(textWithTypos, lengthenedWords);
    textWithTypos = replaceWithMisspellings(textWithTypos, casualWords);
    textWithTypos = separateMessages(textWithTypos);
    setHumanizeText(textWithTypos);
  }

  return (
    <>
      <h1>Humanizer</h1>
      <div className="container">
        <div className='section-container'>
          <h2>Input</h2>
          <textarea defaultValue={botMsg} ref={inputRef} rows={20} cols={50} />
        </div>
        <button className='humanize' onClick={onHumanize}>
          Humanize!
        </button>
        <div className='section-container'>
          <h2>Result</h2>
          <textarea disabled value={humanizeText} rows={20} cols={50} />
        </div>
      </div>
    </>
  )
}

export default App
