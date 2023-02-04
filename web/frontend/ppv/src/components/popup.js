import React from "react";
import "../styles/popup.css"
// import Filter from "./Filter";
// import SingleVideo from "./SingleVideo";

//popup for metamask
function Popup() {
    return (

        <div>
            {/* <Filter />
            <br/><br/> */}
            <div class="container">
            <h2>Modal Example</h2>
            <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>

            
            <div class="modal fade" id="myModal" role="dialog">
                <div class="modal-dialog">
                
                
                <div class="modal-content">
                    <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Modal Header</h4>
                    </div>
                    <div class="modal-body">
                    <button type="button" class="close_model btn btn-danger">button</button>

                    <input type="checkbox" name="ch" class="one"/>

                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
                
                </div>
            </div>
            
            </div>
        </div>
    );

}

// $(document).ready(function(){

//     $('.one:checked').on('click' , '.close_model' , function(){
    
//     dialog('close');
    
//     });
        
    
// });

export default Popup;