import { Container, Row, Col, Nav, Navbar, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import './App.css';
import data from './data'
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import axios from 'axios';

function App() {

  useEffect(()=>{
    if(localStorage.getItem('watched') === null) localStorage.setItem('watched', JSON.stringify([]))
  },[])

  let [modal, setModal] = useState(0);
  let [shoes, setShoes] = useState(data);
  let [count, setCount] = useState(2);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={()=>{navigate('/')}}>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/Cart')}}>Features</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail/0')}}>Pricing</Nav.Link>
            <Button onClick={()=>{
              let newShoes = [...shoes].sort((a,b)=>a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1 );
              setShoes(newShoes);
            }}>정렬</Button>
          </Nav>  
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <>
            <div className='main-bg'></div>
            <Container>
              <Row>
                {
                  shoes.map((prod, i) => {
                    return(<Product prod={prod} i={i}/>)
                  })
                }
              </Row>
            </Container>
            {modal ? <Loding/> : <></>}
            <button onClick={()=>{
              if(count < 4){
                setModal(1)
                setTimeout(1000)
                axios.get('https://codingapple1.github.io/shop/data'+count+'.json')
                .then((result)=>{
                  let copyShoes = [...shoes, ...result.data]
                  setShoes(copyShoes)
                  setCount(count+1)
                  setModal(0)
                })
                .catch(()=>{
                  setModal(0)
                  console.log('실패했어요')
                })
              }else{
                alert('상품이 없습니다.')
              }
            }}>{count}</button>
          </>
        }/>
        <Route path='/detail/:id' element={<Detail shoes={shoes}/>}/>

        <Route path='/cart' element={<Cart/>}/>

        <Route path='/event' element={<Event/>}>
          <Route path='one' element={<div>첫 주문시 양배추 즙 서비스</div>}/>
          <Route path='two' element={<div>생일기념 쿠폰받기</div>}/>
        </Route>
      </Routes>
    </div>
  );
}

function Product(props){
  let navigate = useNavigate();
  return (
    <Col onClick={()=>{navigate('/detail/'+props.prod.id)}}>
      <img src={'https://codingapple1.github.io/shop/shoes'+(props.prod.id+1)+'.jpg'} width='80%'/>
      <h4>{props.prod.title}</h4>
      <p>{props.prod.content}</p>
    </Col>
  );
}

function Event(){
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Loding(){
  return (
    <div>
      <h4>로딩중</h4>
    </div>
  );
}

export default App;
