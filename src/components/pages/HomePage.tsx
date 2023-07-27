import React,{useState,useEffect,useRef} from 'react'
import Contact from './Contact';

const HomePage = () => {

//useEffect

  // const [ resourseType,setResourceType ] = useState('posts' as string);
  // const [ items,setItems ] = useState({} as any)
  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${resourseType}`)
  //     .then(response => response.json())
  //     .then(json => setItems(json))
  // }, [resourseType])

  // const [dark,setDark] = useState(false as boolean)
  // const themeStyle={
  //   backgroundColor :dark?'black' : 'white',
  //   color : dark? 'white' : 'black'
  // }

  const [text,setText] = useState("" as string);
  const inputRef = useRef<HTMLInputElement>('' as any);
  const values=((e: React.ChangeEvent<HTMLInputElement>)=>{
    console.log(e.target.value)
    setText(e.target.value)
  })

  const focus=()=>{
    inputRef?.current?.focus();
    inputRef.current.value = "Hello Developer";
  }

  return(
    
    <>


    <input ref={inputRef} type="text" value={text} onChange={values}/>
    <button onClick={focus}>focus</button>

          {/* <p style={themeStyle}>Hello</p>
          <button onClick={()=>setDark(dark=>!dark)}>change theme</button> */}

        {/* <button onClick={()=>setResourceType('posts')}>posts</button>
        <button onClick={()=>setResourceType('comments')}>comments</button>
        <button onClick={()=>setResourceType('albums')}>albums</button>
        <button onClick={()=>setResourceType('todos')}>todos</button>
        <button onClick={()=>setResourceType('photos')}>photos</button>
        <button onClick={()=>setResourceType('users')}>users</button>

        {
          items.map((item:any)=>(
           <h3>{JSON.stringify(item)}</h3>
          ))
        } */}
    </>
  );
}

export default HomePage