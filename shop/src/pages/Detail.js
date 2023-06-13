import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

function Detail(props){

  let {id} = useParams();
  let [text, setText] = useState(100);
  let [tab, setTeb] = useState(0);
  let [fade, setFade] = useState('')

  useEffect(()=>{
    const regex = /^[0-9]*$/;
    if (!regex.test(text)) {
      alert('그러지마세요');
      setText(text.slice(0, -1));
    }
  }, [text])

  useEffect(()=>{
    setFade('end')
  }, [])

    return(
      <div className={`container start ${fade}`}>
        <div className="row">
          {
            props.shoes.map((prod, i) => {
              if(prod.id == id){
                return(
                  <>
                    <div className="col-md-6">
                      <img src={'https://codingapple1.github.io/shop/shoes'+(prod.id*1+1)+'.jpg'} width="100%" />
                    </div>
                    <div className="col-md-6">
                      <input value={text} onChange={(e)=>{
                        setText(e.target.value);
                      }}/>
                      <h4 className="pt-5">{prod.title}</h4>
                      <p>{prod.content}</p>
                      <p>{prod.price}</p>
                      <button className="btn btn-danger">주문하기</button> 
                    </div>
                  </>
                )
              }
            })
          }
        </div>

        <Nav justify variant="tabs" defaultActiveKey="/home">
          <Nav.Item onClick={() => setTeb(0)}>
            <Nav.Link eventKey="link-1">버튼0</Nav.Link>
          </Nav.Item>
          <Nav.Item onClick={() => setTeb(1)}>
            <Nav.Link eventKey="link-2">버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item onClick={() => setTeb(2)}>
            <Nav.Link eventKey="link-3">버튼2</Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent tab={tab} shoes={props.shoes}/>
        {/*
          tab == 0 ? <div>내용0</div> : 
          tab == 1 ? <div>내용1</div> : 
          tab == 2 ? <div>내용2</div> : null*/
        }
      </div> 
    );
  }

  function TabContent({tab, shoes}){
    let [fade, setFade] = useState('')
    useEffect(()=>{
      let a = setTimeout(() => {
        setFade('end')
      }, 10);
      return ()=>{
        clearTimeout(a)
        setFade('')
      }
    }, [tab])
    return (<div className={`start ${fade}`}>
      {[<div>{shoes[0].title}</div>, <div>{shoes[1].title}</div>, <div>{shoes[2].title}</div>][tab]}
    </div>)
  }

  export default Detail