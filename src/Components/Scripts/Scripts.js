import React from 'react'
import ReactMarkdown from 'react-markdown'
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { coy } from "react-syntax-highlighter/dist/styles/prism";

import '../../App.css'
import data from './data'


function Scripts(props) {
    console.log(data)
    return (

        <div>
            <h3>{data[0].Title}</h3>
            <p className="content">{data[0].Content}</p>
            <p className="content"><ReactMarkdown source={data[0].Code} ></ReactMarkdown></p>
            <p className="content">{data[0].Content1}</p>
            <p className="content"><ReactMarkdown source={data[0].Code1} ></ReactMarkdown></p>
            <p className="content">{data[0].Content2}</p>
        </div>
    )
}

export default Scripts