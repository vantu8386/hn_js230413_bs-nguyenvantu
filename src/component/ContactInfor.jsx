export default function ContactInfor({ contactInfo }) {
  return (
    <div>
      <h1>Contact infor</h1>
      <div>
        <label>Name</label> <br />
        <input type="text" value={contactInfo.name} readOnly />
      </div>
      <div>
        <label>Email</label> <br />
        <input type="text" value={contactInfo.email} readOnly />
      </div>
      <div>
        <label>Phone Number</label> <br />
        <input type="text" value={contactInfo.phone} readOnly />
      </div>
      <div>
        <label>Message</label> <br />
        <input type="text" value={contactInfo.message} readOnly />
      </div>
    </div>
  );
}
