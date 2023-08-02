import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { changeName, plusAge } from "../store/userSlice"
import { plusCount, minusCount, deleteCart } from "../store"

function Cart(){
    let cart = useSelector(state=>state.cart)
    let user = useSelector(state=>state.user)
    let dispatch = useDispatch()

    return (
        <div>
            {user.name}({user.age})의 장바구니
            <button onClick={()=>{
                dispatch(changeName())
                dispatch(plusAge(10))
            }}>버튼</button>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>더 담기</th>
                        <th>줄이기</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((prod, i)=>{
                            return(
                                <tr key={i}>
                                    <td>{prod.id}</td>
                                    <td>{prod.name}</td>
                                    <td>{prod.count}</td>
                                    <td><button onClick={()=>{
                                      dispatch(plusCount(prod.id))
                                    }}>+</button></td>
                                    <td><button onClick={()=>{
                                      dispatch(minusCount(prod.id))
                                    }}>-</button></td>
                                    <td><button onClick={()=>{
                                      dispatch(deleteCart(prod.id))
                                    }}>삭제</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table> 
        </div>
    )
}
export default Cart