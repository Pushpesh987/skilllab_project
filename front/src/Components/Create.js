// src/components/NoteForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Home() {

    const navigate = useNavigate();

    const [inputValue, setInputValue] = useState({
        title: "",
        text: "",
        
      });
      const { title  , text} = inputValue;
  
  
    const handleOnChange = (e) => {
    const {id, value } = e.target;
    setInputValue({
        ...inputValue,
        [id]: value,
    });
    };


    const Close = () => {
        navigate("/");

        
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          const response = await axios.post(
            "http://localhost:4000/addbook",
            {
              ...inputValue,
            }
          );
          console.log('Note created:', response.data);
          setInputValue({
            ...inputValue,
            title: "",
            text: ""
          
            
          });
          alert("saved")
        } catch (error) {
          console.log(error);
        }
        
      };
    

  return (
    <div>
      <center><h2>Create a New Note</h2></center>
      <form  onSubmit={handleSubmit}>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Title
                    </label>
                    <input
                       type="text"
                       className="form-control"
                       id="title"
                       placeholder="Enter title"
                       value={title}
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
                        value={text} // Bind it to a state variable (if using React)
                        onChange={handleOnChange} // Add a function to handle input changes
                    ></textarea>
                  </div>
                
          
               

                
                <div class="modal-footer">
                <button class="btn btn-outline-danger" onClick={Close}>close</button>
                <button type="submit" class="btn btn-primary">Create</button>
                </div>

                </form>
    </div>
  );
}

export default Home;
