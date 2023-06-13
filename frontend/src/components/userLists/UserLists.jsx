import React from "react";
import List from "../list/List";
class UserList extends React.Component{
    state = { lists: null, loading: true}
    async componentDidMount(){
        let url = 'http://127.0.0.1:8000/list/'
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        this.setState({lists: data, loading: false})
    }
    render(){
        return(
            <React.Fragment>
                <section className="Listas">
                    <List listName={"Lista 1"} />
                    <List listName={"Lista 2"} />
                    <List listName={"Lista 3"} />
                </section>
            </React.Fragment>
        )
    }
}
export default UserList