import PropTypes from "prop-types"; 
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/esm/Container";
import FilterListIcon from '@mui/icons-material/FilterList';


const Categore = ({ lowcatgry, lowallCat }) => {
  const onfeand = (cato) => {
    lowcatgry(cato);
  };

  return (
    <Container className="nav_title">

      <div>

      <h1 className="main_title"> 
      Explore our amazing <br/>
      tourist destinations</h1>
      </div>

      <div >
        <Dropdown >
          <Dropdown.Toggle className="Filters" id="dropdown-basic">
          Filters
          <FilterListIcon
          sx={{ fontSize: 20, color: "#fff" }}
        />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {lowallCat.length !== 0 ? (
              lowallCat.map((elm, index) => {
                return (
                  <div key={index}>
                    <Dropdown.Item onClick={() => onfeand(elm)}>
                      {elm}
                    </Dropdown.Item>
                  </div>
                );
              })
            ) : (
              <h2>none</h2>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Container>
  );
};


Categore.propTypes = {
  lowcatgry: PropTypes.func.isRequired,
  lowallCat: PropTypes.array.isRequired, 
};

export default Categore;
