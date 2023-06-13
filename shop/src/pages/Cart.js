import { Table } from "react-bootstrap"
import { useSelector } from "react-redux"

function Cart(){
    let cart = useSelector(state=>state.cart)
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
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
                                    <td>변경</td>
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