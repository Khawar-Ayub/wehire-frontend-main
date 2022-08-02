import React, {useState} from 'react'

export default function StartTest(props) {
    let question = "What is the Capital of Pakistan?";
    let options1 = "Islamabad is the Capital of Pakistan.";
    let options2 = "Karachi is the Capital of Pakistan.";
    let options3 = "Lahore is the Capital of Pakistan.";
    let testName = "Amazon Web Services";
    // let subject = "Computer Science.";
    // let difficultyLevel = "hard";
    const h1Style ={
        color: '#2c6f8b',
        fontWeight: 'bold',
        float: 'left'
      }
    const [optionList, setOptionList] = useState([{option: ''},{option: ''}]);
  return (
    <div style={{width: '90%',float: 'right',padding: '20px',border: '2px solid red',marginTop: '7%',marginRight: '5%'}}>
        <h1 style={h1Style}>{testName}</h1>
                    {/* QUESTIONITEM AREA */}
                    {optionList.map((singleOption, index) =>(
                    <div className="questionitem-area" style={{marginTop: '4%', border: '1px solid grey', padding: '30px'}}>
                        <h3 className="" style={{color: "#2c6f8b"}}>
                            <ol>
                                <li><h3>{question}{props.question}</h3></li>
                            </ol>
                        </h3>
                        <ol>
                           <li className=" text" style={{color: 'green'}}> <h4 >{options1}{props.options}</h4></li>
                           <li className=" text-muted"><h4>{options2}{props.options}</h4></li>
                           <li className=" text-muted"><h4>{options3}{props.options}</h4></li>
                        </ol>
                        {/* <p style={{fontStyle: 'italic'}}>{subject}{props.subject}</p> */}
                        {/* <p style={{color: 'chocolate'}}>Difficulty Level: {difficultyLevel}{props.difficultyLevel}</p> */}
                    </div>
                    ))}
    </div>
  )
}
