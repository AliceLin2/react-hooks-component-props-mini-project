import React from 'react'

function Article({title, date="January 1, 1970", preview, minutes}){
    let times
    let stringTimes

    if(minutes<30){
        times=Math.ceil(minutes/5)
        stringTimes = "☕️ ".repeat(times)
    }else{
        times=Math.ceil(minutes/10)
        stringTimes = "🍱 ".repeat(times)
    }
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small><small>{`*${stringTimes} ${minutes} min read`}</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article