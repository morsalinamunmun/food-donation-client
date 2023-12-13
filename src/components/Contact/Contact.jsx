//import Swal from "sweetalert2";

const Contact = () => {
    /* const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const message = form.message.value;
        

        const messageInfo = {email, message }

        //send form data to server
        fetch('https://food-donation-server-five.vercel.app/message ', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(messageInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                }
            })
    } */
    return (
        <div className="px-5 flex justify-center">
            <form className="">
                <h2 className='text-2xl font-semibold py-7 text-orange-500'>Message us below</h2>
                    <input type="email" name="email" id=""placeholder="Email" className="py-2 px-3 border-2 my-5 rounded-full border-orange-500 w-72"/>
                    <br/>
                    <textarea type='text' name="message" className="textarea textarea-bordered mt-5 pt-5 border-2 rounded-full border-orange-500 w-72" placeholder="Comment"></textarea>
                     <br />
                    <button  className="bg-orange-500 text-white px-5 py-3 my-5 rounded-full">Submit</button>
            </form>
        </div>
    );
};

export default Contact;