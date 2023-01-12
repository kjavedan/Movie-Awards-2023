import { useState, useEffect, createContext } from "react";
const Context = createContext();

const ContextProvider = props => {

  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [result, setResult] = useState([])
  const [displayResult, setDisplayResult] = useState(false)
 
  const updateResult = (title, data) => {
  let movieName, movieImg;
   result.forEach(item => {
        if(item.title === title){
            data.forEach(movie => {
                if(movie.isHeld){
                    movieName = movie.title
                    movieImg = movie.img
                }
            })
          }
    })

    setResult(prevState => prevState.map(item => {
      if(item.title === title){
        return ({
          ...item, 
          movie: {
            name: movieName,
            img: movieImg
          }
        })
      }
      else return item
    }))

  }

  const submitResult = () => {
    setDisplayResult(true)
  }

  useEffect(()=> {
    fetch('https://api.jsonbin.io/v3/b/63bf2d65dfc68e59d57fef4a')
    .then(res => res.json())
    .then(res => {
      const data = res.record.data;
      setCategories(data)
      setIsLoading(false)
      let array = [];
      data.forEach(category => {
        array.push({ 
            title: category.title,
            movie: { name: '', img: '' }
        })
    });
      setResult(array)
    })
    }, []) 

  return(
    <Context.Provider value={{categories, isLoading, result, displayResult, setDisplayResult, updateResult, submitResult}}>
        {props.children}
    </Context.Provider>
  )
}

export {Context, ContextProvider as Provider}