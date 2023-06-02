import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props){

  let {id} = useParams();
  let [text, setText] = useState(100)

  useEffect(()=>{
    const regex = /^[0-9]*$/;
    if (!regex.test(text)) {
      alert('그러지마세요');
      setText(text.slice(0, -1));
    }
  }, [text])

    return(
      <div className="container">
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
      </div> 
    );
  }

  export default Detail