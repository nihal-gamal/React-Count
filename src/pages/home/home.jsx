import myImg from "../../assets/images/imgTow.jpeg"

const Home = () => {
    const style = {
        
        borderRadius:'50%'
    }
  return (
    <div className="container">
        <div className="row justify-content-between align-items-center mt-5 pt-5">
      <h4 className="desc text-start col-12 col-md-6">
        Hello I’m Nihal Gamal ,
        <br></br>
        I’m a front-end engineer, and I create fun,
        innovative, accessible, and fast websites. I try to leave every bit of
        code I touch more readable, modular, performant and accessible than I
        found it.
      </h4>
      <div className="col-12 col-md-6">
      <img style={style} className="d-block mx-auto" src={myImg} alt="profile" />
      </div>
        </div>
    </div>
  );
};

export default Home;