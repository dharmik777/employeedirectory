import React from "react"
import { Container,Table } from 'react-bootstrap'

function SearchResults(props){
    return (
        <div className="SearchResults">
            <Container>
                <Table striped>
        
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
                </Table>
            </Container>
        </div>
    )
}

export default SearchResults
