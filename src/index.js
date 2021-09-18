import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom';

//自定义的Hook
const useList = () => {
  const [list,setList] = useState(null)
  useEffect(() => {
    ajax("/list").then(list=>{
      setList(list)
    })},[])
    return {
      list,
      setList
    }
  }

function ajax(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve([
        {id:1,name:"Amy"},
        {id:2,name:"Alice"},
        {id:3,name:"Bob"},
        {id:4,name:"Jack"}
      ])
    },2000)
  })
}

function App(){
  // buttonRef相当于DOM对象的引用
  const {list} = useList()
  return (
    <div className="App">
      <h1>List</h1>
      {list?(<ol>{list.map(item=>(<li key={item.id}>{item.name}</li>))}</ol>):("加载中...")}
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />,rootElement)

