import React from "react"

function SearchResults(props){
    return (
        <div className="SearchResults">
           
                
        
                    <tbody>
                        {props.results.map(result => (
                            <tr key={result}>
                                <td>
                                <img 
                                    src={result.picture.thumbnail} 
                                    className="userPhoto" alt={result.name.first}
                                />
                                </td>
                                <td>{result.name.first} {result.name.last}</td>
                                <td>{result.email}</td>
                                <td>{result.cell}</td>
                            </tr>
                        ))}
                    </tbody>
                
        </div>
    )
}

export default SearchResults
