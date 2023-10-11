import image from "../images/note.jpeg"
import { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const [fdata, setFData] = useState([]);
    const navigate = useNavigate();
    var Id = " "
    

    const [book, setBook] = useState({
        title: "",
        text: "",
        
      });
    
  
  
      const handleOnChange = (e) => {
        const { id, value } = e.target;
        setBook((book) => ({
          ...book,
          [id]: value,
        }));
      };



   

    useEffect(() => {
        Axios.get("http://localhost:4000/book").then((res) => {
          setFData(res.data);
        });
    }, []);



      const Create = () => {
        navigate("/create");
    };



      const handleview = (bookId) =>{
        
        Axios.get(`http://localhost:4000/book/${bookId}`).then((res) => {
          setBook(res.data);
          Id = bookId
          console.log(bookId)
          console.log(Id)
        });    
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log(Id)
        Axios.put(`http://localhost:4000/book/${Id}`, book)
          .then((res) => {
            console.log("Book updated:", res.data);
            alert("Updated")
            setTimeout(() => {
              navigate("/");
            }, 1000);
            // Redirect to the book list page or handle navigation as needed
          })
          .catch((error) => {
            console.error("Error updating book:", error);
           alert(error)
          });
      };

      const handleDelete = (bookId) => {
        // Send a DELETE request to the server
        Axios.delete(`http://localhost:4000/book/${bookId}`)
          .then((res) => {
            // Update the list of books after successful deletion
           
            setFData(fdata.filter((book) => book._id !== bookId));
          })
          .catch((error) => {
            alert(error);
              
            console.error("Error deleting book:", error);
          });
      };




    return ( 
        <> 

        <button class="btn btn-outline-success" onClick={Create}>Create New</button>
        <div className="container mt-5">
      <center><h2 className="mb-4">Notes</h2></center>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
  {fdata.map((book) => (
    <div className="col-md-3 col-lg-3 col-sm-6 mb-4" key={book._id}>
      <div className="card shadow-sm">
        <img
          src={image}
          className="card-img-top"
          alt="Book Cover"
          style={{ height: "300px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{book.title}</h5>
          <p className="card-text">
            <strong>Text:</strong> {book.text}
          </p>
          
          <div className="d-flex justify-content-center align-items-center mt-3">
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
           onClick={() => handleview(book._id)}
          >view</button>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(book._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
    </div>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add a Book to the Library</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div>

        <form  onSubmit={handleUpdate}>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Title
                    </label>
                    <input
                       type="text"
                       className="form-control"
                       id="title"
                       placeholder="Enter title"
                       value={book.title}
                       onChange={handleOnChange}
                       required
                      
                    ></input>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Note
                    </label>
                    <textarea
                        class="form-control"
                        id="text"
                        rows="10" // Set the number of visible rows you want
                        // Add a name for the field
                        value={book.text} // Bind it to a state variable (if using React)
                        onChange={handleOnChange} // Add a function to handle input changes
                    ></textarea>
                  </div>
                
          
               

                
                <div class="modal-footer">
                
                <button type="submit" class="btn btn-primary">Update</button>
                </div>

                </form>




        
    
   </div> 
      </div>
      
    </div>
  </div>
</div>
        </>
  );
}

export default Home;