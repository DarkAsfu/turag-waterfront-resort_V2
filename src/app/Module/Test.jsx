import axios from "axios";

const Test = () =>{
    const res = axios.get("http://localhost:8000/sitemap.xml")
    console.log(res);
    return(
        <div>
            <h1>Test</h1>
        </div>
    )
}

export default Test;