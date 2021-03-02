import React from "react"
import { Container,Table } from 'react-bootstrap'

function SearchResults(props){
    return (
        <div className="SearchResults">
            <Container>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                    {/* "map" through our getUsers results for all users */}
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
