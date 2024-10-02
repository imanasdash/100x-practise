import './App.css'
function App() {

  return (
    <>
      <div className="profile-card">
        <div className="profile-header">
          <img src="https://static.vecteezy.com/system/resources/previews/003/127/954/non_2x/abstract-template-blue-background-white-squares-free-vector.jpg" alt="" className="profile-background"/>
        </div>
        <div className="profile-info">
          <img src="img.jpeg" alt="" className="profile-picture"/>
          <h2>Manas Dash <span className="age">22</span></h2>
          <p>Mumbai</p>
        </div>
        <div className="profile-stats">
          <div>
            <strong>80K</strong>
            <span>Followers</span>
          </div>
          <div>
            <strong>803K</strong>
            <span>Likes</span>
          </div>
          <div>
            <strong>1.4K</strong>
            <span>Photos</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default App
