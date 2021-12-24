import React, { useEffect, useState } from 'react'

const GenerateDistances = () => {

    let [distances, setDistances] = useState(null)

    // useEffect(() => {
    //     setDistances()
    // },)


    let generate = async () => {

        let response = await fetch("http://localhost:8000/api/distance/generate")

        console.log(response)

        let data = await response.json()

        setDistances(data)

    }


    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <button onClick={generate}>
                GENERATE DISTANCES
            </button>

        </div>
    )
}

export default GenerateDistances
