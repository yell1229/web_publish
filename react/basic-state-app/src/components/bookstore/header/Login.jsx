import React,{useState, useRef} from 'react';

export default function Login() {
    const idRef = useRef(null);
    const passwordRef = useRef(null);
    const init = {"id" :"" , "password":""};
    const [formData, setFormData] = useState(init);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]:value});     
    }
    const sendSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        
    }

    return (
        <div className="login">
            <form onSubmit={sendSubmit}>
                <label>id : <input type="text" name="id" value={formData.id} ref={idRef} onChange={handleChange} /></label>
                <label>pw: <input type="password" name="password" value={formData.password} ref={passwordRef} onChange={handleChange} /></label>
                <button>login</button>
            </form>
        </div>
    );
}

