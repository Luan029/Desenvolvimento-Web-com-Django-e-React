import React from "react";
import List from "../list/List";
import Login from "../login/Login";
class UserList extends React.Component{
    state = { lists: [], loading: true}
    async componentDidMount(){
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        config.headers['Authorization'] = 'Token ' + localStorage.getItem('token')

        let url = 'http://127.0.0.1:8000/list/'
        const response = await fetch(url, config)
        const data = await response.json()
        console.log(data)
        this.setState({lists: data, loading: false})
    }
    render(){
        const listsApi = this.state.lists
        let token = localStorage.getItem('token')
        if(!token){
            return(
                <Login/>
            )
        }else{
            return(
                <React.Fragment>
                    <section className="Listas">
                        {listsApi.map(list =>
                            <List 
                                key={list.id}
                                listName={list.name} 
                                itens={list.item_set} 
                            />
                        )}
                    </section>
                </React.Fragment>
            )
        }
    }
}
export default UserList