import React, { useEffect } from 'react';
import './PostReview.css';

const PostReviewPage = () => {
  useEffect(() => {
    const dropArea = document.querySelector(".drop_box");
    const button = dropArea.querySelector("button");
    const input = dropArea.querySelector("input");

    button.onclick = () => {
      input.click();
    };

    input.addEventListener("change", function (e) {
      var fileName = e.target.files[0].name;
      let filedata = `
        <form action="" method="post">
        <div class="form">
        <h4>${fileName}</h4>
        <input type="email" placeholder="Enter email to upload file">
        <button class="btn">Upload</button>
        </div>
        </form>`;
      dropArea.innerHTML = filedata;
    });
  }, []); // The empty array [] ensures that this code runs once after the component mounts.

  return (
    <div className='everything'>
      
     <div>
       <div class="container">
        <div class="card">
          <h3 className='Thumbnail'>Upload Thumbnail</h3>
          <div class="drop_box">
            <header>
              <h4>Select a thumbnail here</h4>
            </header>
            <input type="file" hidden accept=".doc,.docx,.pdf" id="fileID" style={{ display: 'none' }} />
            <button class="btn">Choose File</button>
          </div>
        </div>
      </div>
      <div>

      <label className='Tags' for="fname">Post Your Review here</label>
  <textarea className='TagsText' type="text" id="fname" name="fname" />

      </div>
      </div>
      <div className='Right-Side'>
      <div className='Title-Area'>
      <form>
  <label className='fname' for="fname">Choose A title</label>
  <input className='Inpput' type="text" id="fname" name="fname" />
</form>
      </div>
      <div className='Title-Area'>
      <form>
  <label className='fname' for="fname">Post Your Review here</label>
  <textarea className='Inpput2' type="text" id="fname" name="fname" />
</form>
<svg  className="PutTheImages"
width="65" height="66" viewBox="0 0 73 66" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1666 11H21.2916L27.3749 5.5H45.6249L51.7082 11H60.8332C62.4466 11 63.994 11.5795 65.1348 12.6109C66.2757 13.6424 66.9166 15.0413 66.9166 16.5V49.5C66.9166 50.9587 66.2757 52.3576 65.1348 53.3891C63.994 54.4205 62.4466 55 60.8332 55H12.1666C10.5532 55 9.00586 54.4205 7.86502 53.3891C6.72417 52.3576 6.08325 50.9587 6.08325 49.5V16.5C6.08325 15.0413 6.72417 13.6424 7.86502 12.6109C9.00586 11.5795 10.5532 11 12.1666 11ZM36.4999 19.25C32.4664 19.25 28.5981 20.6987 25.746 23.2773C22.8939 25.8559 21.2916 29.3533 21.2916 33C21.2916 36.6467 22.8939 40.1441 25.746 42.7227C28.5981 45.3013 32.4664 46.75 36.4999 46.75C40.5334 46.75 44.4017 45.3013 47.2538 42.7227C50.1059 40.1441 51.7082 36.6467 51.7082 33C51.7082 29.3533 50.1059 25.8559 47.2538 23.2773C44.4017 20.6987 40.5334 19.25 36.4999 19.25ZM36.4999 24.75C38.92 24.75 41.241 25.6192 42.9523 27.1664C44.6635 28.7135 45.6249 30.812 45.6249 33C45.6249 35.188 44.6635 37.2865 42.9523 38.8336C41.241 40.3808 38.92 41.25 36.4999 41.25C34.0798 41.25 31.7588 40.3808 30.0476 38.8336C28.3363 37.2865 27.3749 35.188 27.3749 33C27.3749 30.812 28.3363 28.7135 30.0476 27.1664C31.7588 25.6192 34.0798 24.75 36.4999 24.75Z" fill="black"/>
</svg>

      </div>
      </div>
    </div>
  );
}

export default PostReviewPage;
