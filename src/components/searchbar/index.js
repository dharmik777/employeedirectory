import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,FormControl,InputGroup, Button } from 'react-bootstrap'


function SearchBar(props){
    return(
        <div className="searchbar">
            <Container className="searchForm">
            <InputGroup className="mb-3">
              {/* FormControl will use props.handleInputChange to filter our results*/}
              <FormControl
                onChange={props.handleInputChange}
                placeholder="Search"
                className="inputFull"
              />
              
            </InputGroup>
            </Container>
        </div>
    )
}
export default SearchBar;