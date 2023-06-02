/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [a, b] = useState(['남자 코트 추천', 'ㄱ여자 코트 추천', 'ㄹㄹ', 'ㅂㅂ', 'ㅍㅍ', 'ㅅㅅ', 'ㅇㅇ', 'ㅎㅎ']);
  let [like, setLike] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  let [modal, setModal] = useState(0);
  let [title, setTitle] = useState(0);
  let [inputText, setInputText] = useState("");

  function change(){
    let copy = [...a];
    copy[0] = '여자 코트 변경';
    b(copy);
  }

  function remove(id){
    b(a.filter(c => c != id));
  }

  return (
    <div className="App">

      <div className='black-nav'>
        블로그
      </div>
      {/* <button onClick={change}>수정</button>
      <button onClick={()=>{
        let copy = [...a];
        copy.sort();
        b(copy);
      }}>가나다순 정렬 버튼</button>
      <h4 style={{color:'red', fontSize:'26px'}}>{post}</h4>
      <div className='list'>
        <h4>{a[0]} <span onClick={() => {c(like++)}}>🙂</span> {like} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={()=>{modal?setModal(0):setModal(1)}}>{a[1]}</h4>
        <p>3월 17일 발행</p>
      </div> */}

      {
        a.map((q, i)=>{
          return (
            <div className='list' key={i}>
              <h4 onClick={()=>{setTitle(i);modal?setModal(0):setModal(1)}}>{q} 
                <span onClick={() => {
                  setLike(like[i]++);
                  let copy = [...like];
                  setLike(copy);
                  }}>🙂</span> {like[i]} 
                <button onClick={(e) => {e.stopPropagation();remove(q);}}>삭제</button>  
              </h4>
              <p>3월 17일 발행</p>
            </div>
          )
        })
      }

      <input value={inputText} onChange={(e)=>{
        setInputText(e.target.value);
      }}/>
      <button onClick={() => {
                let copy = [...a, inputText];
                b(copy);
                setInputText('');
              }}>생성</button>
      {modal ? <Modal a={a} title={title} change={change}/> : <></>}

    </div>
  );
}

function Modal(props){
  return( 
    <div className='modal'>
      <h4>{props.a[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.change}>글수정</button>
    </div>
  );
} 

export default App;
