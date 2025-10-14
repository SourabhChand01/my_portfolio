import { useState } from "react";
import emailjs from "@emailjs/browser"
import Alert from "./alert";
import { Particles } from "./particles";
const Contact=()=>{
    const[formData,setFormData]=useState({
        name:"",
        email:"",
        message:"",
    });

    const [showAlert,setShowAlert]=useState(false)
    const [isloading,setIsLoading]=useState(false);
    const[alertType,setalertType]=useState("success");
    const [alertMessage,setAllertMessage]=useState("");

const showAlertMessage=(type,message)=>{
    setalertType(type);
    setAllertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
        setShowAlert(false);
    }, 5000);
}

const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
}

const handlesubmit=async (e)=>{
    e.preventDefault();
    setIsLoading(true);
    try{
        console.log("form submitted:", formData)
    emailjs.send("service_z0moo0f","template_r51c26w",{
        from_name: formData.name,
        to_name:"Sourabh",
        from_email:formData.email,
        to_email:"sourabhchand05@gmail.com",
        message:formData.message,
    },"6p-yIlWjhFSxTIUZs");
    setIsLoading(false);
    showAlertMessage("success","Sent successfully");
    setFormData({name:"",email:"",message:""})
}catch(error){
    setIsLoading(false);
    console.log(error);
   
}
}

    return(
        <section className="relative flex items-center c-space " id="contact">
            <Particles
            className="absolute inset-0 -z-50"
            quantity={100}
            ease={80}
            color="#ffffff"
            refresh
            />
            {showAlert&& <Alert type={alertType} text={alertMessage}/> }
            <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
            <div className="flex flex-col items-start w-full gap-5 mb-10">
                <h2 className="text-heading">Let's Talk</h2>
                <p className="font-normal text-neutral-400">
                    Whether you're looking to build a new website, improve your existing
                    platform,or bring a unique project to life,I'm here to help
                </p>
            </div>
            <form className="w-full">
                <div className="mb-5">
                    <label htmlFor="name" className="field-label">
                        Full Name
                        </label>
                        <input 
                        id="name"
                        name="name"
                        type="text"
                        className="field-input field-input-focus" 
                        placeholder="Your Good Name!"
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        required/>

                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="field-label">
                        Email
                        </label>
                        <input 
                        id="email"
                        name="email"
                        type="email"
                        className="field-input field-input-focus" 
                        placeholder="YourEmail@email.com"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        required/>

                </div>

                <div className="mb-5">
                    <label htmlFor="message" className="field-label">
                        Message
                        </label>
                        <input 
                        id="message"
                        name="message"
                        type="text"
                        rows="4"
                        className="field-input field-input-focus" 
                        placeholder="Share your valuable thoughts..."
                        autoComplete="message"
                        value={formData.message}
                        
                        onChange={handleChange}
                        required/>

                </div>
                <button
                type="submit" className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial
                from-lavender to-royal hover-animation"
                onClick={handlesubmit}>{isloading?"Sending...":"Send"}</button>


            </form>
            </div>
        </section>
    )
}
export default Contact;