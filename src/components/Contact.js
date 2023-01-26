

function Contact() {
    return (
        <div className="container m-5">
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">UserName</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="UserName" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Massage</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="mb-3">
                <button className="btn btn-info">Send</button>
            </div>
        </div>
    )
}
export default Contact;