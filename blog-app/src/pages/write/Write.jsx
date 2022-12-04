import "./write.css"
import { MdAddAPhoto } from 'react-icons/md';

export default function Write() {
  return (
    <div className="write">
        <img className="writeImg" src="https://img.freepik.com/premium-photo/woman-works-office-blue-background-concept-workspace-working-computer-freelance-banner_164357-1144.jpg?w=2000" alt="" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <MdAddAPhoto className="writeIcon"/>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell your story..." className="writeInput writeText"></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form> 
    </div>
  )
}
