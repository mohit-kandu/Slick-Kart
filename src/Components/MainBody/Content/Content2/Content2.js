import React from 'react'
import Content from "../Content"
import data from "./Content2.json"

export default function Content2() {
    // const [datas, setData] = React.useState([])

    // React.useEffect(() =>
    //     fetch(data)
    //         .then(res => console.log(res))
    //     , [])
    return (
        <>
            {data.results.forEach(element => {
                // console.log(element)
            })}
            <Content title="Pick your favorite recipe" url={'https://api.spoonacular.com/recipes/complexSearch?apiKey=714f4f3e2c5340fbae57fab63b751d8b'} />
        </>
    )
}
