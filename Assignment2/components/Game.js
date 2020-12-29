import { getRedirectStatus } from "next/dist/lib/load-custom-routes";
import { useState } from "react"
import Input from '../components/Input'

let  x = false

function isPalindrome(word, i, j) {
    return(word.split("").reverse().join("") == word)
}

function to_string(bool){
    if(bool) {
        return "true";
    }
    else {
        return "false";
    }
}

const Game = (props) => {
    
    const [score, setScore] = useState(0)
    const words = ['ana', 'joe', 'level', 'cereal', 'ada', 'information']
    const [word, setWord] = useState(words[0])
    const [response, setResponse] = useState('')
    const [accuracy, setAccuracy] = useState(false)
    const [index, setIndex] = useState(0)

    const getWord = () => {
        let new_index = index + 1
        if(new_index >= words.length) {
            props.over()
        }
        setWord(words[new_index])
        setIndex(new_index) 
    }
  
    const handle_answer = (event, val) => {
        event.preventDefault()
        getWord()
        setResponse(event.target[0].value)
        const rsp = event.target[0].value
        const palindrome = isPalindrome(word, 0, word.length -1)
        console.log(to_string(palindrome))
        console.log(rsp)
        if(to_string(palindrome) == rsp){
            setScore(score + 1)
        }
    }

    return (
    <div className='text-4xl mb-2'>
        <div className='text-7xl font-bold mb-10'>{score}</div>
        <div>Is this anagram? (true/false)</div>
        {word}
    <Input handler = {handle_answer}/>
    {accuracy}
    </div>
    )
};

export default Game