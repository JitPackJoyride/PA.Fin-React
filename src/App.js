import React, {Component} from 'react';
import icon from './icon.png';
import './App.css';
import { keyframes } from "styled-components";
import styled from 'styled-components';
import MainPage from './components/pages/MainPage';

// import { BrowserRouter as Router, Route} from 'react-router-dom';

const fadeIn = keyframes`
  0% { opacity: 0;}
  100% {opacity: 1;}
`;

const rotate = keyframes`
0% {transform: translate(-50%, -50%)  rotate(0deg)}
100% {transform: translate(-50%, -50%) rotate(360deg)}
`;

console.log(fadeIn)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0

      //0 icon page
      //1 main page
      //2 smart apply
      //3 my account
      //4 my data
      //5 account
      //6 saving account
      //7 credit card
      //8 loan
      //9 insurance
      //10  
      //11 
      //12 
      //13 
      //14 
    };
    this.scrollEl = React.createRef();
  }

  handleScroll = (event) => {
    console.log('handleScroll is called');
    console.log(event);
  }

  changeId = (inputId) => {
    this.setState({
      id: inputId
    });
  }

  refReady(ref) {
    if(ref) ref.addEventListener('click', e => this.handleScroll(e));
  }

  getBackgroundStyle = () => {
    return {
      position:"absolute", 

      backgroundColor:"rgb(48, 48, 48)", 
      height:"100vh", 
      top:"0", 
      left:"0", 
      width:"100vw"
    }
  }
  getDataBackgroundStyle = () => {
    return {
      position:"absolute", 

      backgroundColor:"rgb(48, 48, 48)", 
      height:"130vh", 
      top:"0", 
      left:"0", 
      width:"100vw"
    }
  }
  render = () => {

    const Image = styled.div`
    position: relative;
    top: 30vh;
    animation: ${fadeIn} 2s;
    
    `
    const Image2 = styled.div`
    margin: 2vh;
    `
    const IconText = styled.div`
    position: relative;
    top: 25vh;
    color: white;
      margin-top: 10vh;
      text-align: center;
      font-size: 6.5vw;
      white-space: nowrap;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      animation: ${fadeIn} 8s;
    `
    const OuterCirle = styled.div`
    position: absolute;
    background: linear-gradient(purple, darkblue);
    top: 30vh;
    left: 50vw;
    transform: translate(-50%, -50%);
    width: 60vw;
    height: 60vw;
    border-radius: 50%;
    animation: ${rotate} 3s infinite;
    `
    const InnerCirle = styled.div`
    position: absolute;
    background: radial-gradient(  rgb(48, 48, 48),rgba(48,48,48,0.4));
    
    top: 30vh;
    left: 50vw;
    transform: translate(-50%, -50%);
    width: 55vw;
    height: 55vw;
    border-radius: 50%;
    `
    var MainMenu = styled.div`
    position: absolute;
    top: 60vh;
    width: 100vw;
    height: 30vh;
    overflow-y:hidden;
    overflow-x:scroll;
    opacity: .8;
    `
    const MenuScrollArea = styled.div`
    display: flex;
    justify-content: space-around;
    width: 180vw;
    `
    const MenuItem = styled.div`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    border-radius: 1vw;
    width: 35vw;
    height: 30vh;
    background: radial-gradient(rgb(131, 131, 131), rgb(80,80,80));
    margin-right: 0.5vw;
    text-align: center;
    padding-top: 1vh;
    `
    const MenuIcon = styled.div`
    opacity: 1;
    font-size: 10vh;
    line-height: 15vh;
    `
    const MenuTxt = styled.div`
    color: rgb(215, 211, 211);
    opacity: 1.0;
    font-size: 7vw;
    `
    const FunctionItem = styled.div`
    color: white;
    font-weight: 900;
    background: linear-gradient(pink, red);
    
    height: 10vh;
    width: 90vw;
    margin: 5vw;
    margin-top: 6vh;
    margin-bottom: 6vh;
    border-radius: 3vw;
    line-height: 10vh;
    font-size: 5vw;
    `
    const AppBackground = styled.div`
    background-color: rgb(48,48,48);
    height: 100vh;
    width: 100vw;
    top:0;
    left:0;
    position: absolute;
    `
    const AccountGroup = styled.div`
    color: white;
    font-size: 7vw;
    font-weight: 600;
    text-align: left;
    margin-top: 2vh;
    margin-bottom:2vh;
    margin-left: 5vw;
    `
    const Account = styled.div`
    color: white;
    font-size: 6vw;
    margin-left: 15vw;
    text-align: left;
    margin-top: 2vh;
    margin-bottom:2vh;
    `

    const BackButton = styled.div`
    color: gray;
    font-size: 10vw;
    position: absolute;
    font-weight: 900;

    top: 3vh;
    left: 3vh;

    `
    const PersonRow = styled.div`
    color: white;
    padding-top: 1vh;
    padding-bottom: 1vh;
    display: flex;
    justify-content: space-between;
    font-size: 5vw;
    border-bottom: 2px black solid;
    `
    const PersonTitle = styled.div`
    text-align: left;
    margin-left: 3vw;
    
    `
    const PersonData = styled.div`
    text-align: right;
    margin-right: 3vw;
    `
    console.log(this.state.id);

    if(this.state.id == 0)
    {
      return (
        <div className="App"  onClick={() => this.changeId(1)}  style={this.getBackgroundStyle()}>
          <Image><img src={icon} alt="icon" width="150" height="150"></img></Image>
          <IconText>Inputing data has <br></br>never been this easy</IconText>
        </div>
        );
    }
        else if(this.state.id == 1)
        {
          return (
            <div className="App" style={this.getBackgroundStyle()}>
              <OuterCirle></OuterCirle>
              <InnerCirle></InnerCirle>
              
              <MainMenu>
                <div style={{ display: 'flex', justifyContent: 'space-around', width: '180vw' }} ref={ref => this.refReady(ref)} >

                <MenuItem  onClick={() => this.changeId(2)}> <MenuIcon> ✍️</MenuIcon> <MenuTxt>Smart<br></br>Apply</MenuTxt> </MenuItem>
                <MenuItem onClick={() => this.changeId(3)}> <MenuIcon> 📂 </MenuIcon> <MenuTxt>My<br></br>Account</MenuTxt></MenuItem>
                <MenuItem onClick={() => this.changeId(4)}> <MenuIcon> 📖 </MenuIcon> <MenuTxt>My<br></br>Data</MenuTxt></MenuItem>
                <MenuItem onClick={() => this.changeId(5)}> <MenuIcon> 📒 </MenuIcon> <MenuTxt>Account<br></br>History</MenuTxt></MenuItem>
              </div>
        </MainMenu>
            </div>
          );
        }
        else if(this.state.id == 2)
        {
          return (
            <div className="App" style={this.getBackgroundStyle()}>
              <h2 style={{textAlign:"center", fontSize:"8vw", color:"white", marginBottom: "1vh"}}>Smart Apply</h2>
              <BackButton onClick={() => this.changeId(1)}> {"<"} </BackButton>
              <Image2><img src={icon} alt="icon" width="100" height="100"></img></Image2>
              <FunctionItem onClick={() => this.changeId(6)}>Personal Accounts</FunctionItem>
              <FunctionItem onClick={() => this.changeId(7)}>Credit Cards</FunctionItem>
              <FunctionItem onClick={() => this.changeId(8)}>Loans</FunctionItem>
              <FunctionItem onClick={() => this.changeId(9)}>Insurance</FunctionItem>
              
            </div>
          );
        }
        else if(this.state.id == 3)
        {
          return (
            <div className="App" style={this.getBackgroundStyle()}>
            <h2 style={{textAlign:"center", fontSize:"8vw", color:"white", marginBottom: "1vh"}}>My Accounts</h2>
            <BackButton onClick={() => this.changeId(1)}> {"<"} </BackButton>
            <Image2><img src={icon} alt="icon" width="100" height="100"></img></Image2>
            <AccountGroup>Currnet Personal Account</AccountGroup>
            <Account>-HSBC</Account>
            <Account>-Citi</Account>
            <AccountGroup>Credit Cards</AccountGroup>
            <Account>-HSBC Gold Card</Account>
            <Account>-Citi </Account>
            <AccountGroup>Loans</AccountGroup>
            <Account>-Personal Loan</Account>
            <AccountGroup>Insurance</AccountGroup>
            <Account>-AIA</Account>
            <Account>-BUPA</Account>
              
            </div>
          );
        }
        else if(this.state.id == 4)
        {
          return (
            <div className="App" style={this.getDataBackgroundStyle()}>
            <BackButton onClick={() => this.changeId(1)}> {"<"} </BackButton>
              <h2 style={{textAlign:"center", fontSize:"8vw", color:"white", marginBottom: "1vh"}}>Account Data</h2>
              <Image2><img src={icon} alt="icon" width="100" height="100"></img></Image2>

              <PersonRow><PersonTitle>First Name:</PersonTitle><PersonData>Justin</PersonData></PersonRow>
              <PersonRow><PersonTitle>Last Name:</PersonTitle><PersonData>Das</PersonData></PersonRow>
              <PersonRow><PersonTitle>Birthday:</PersonTitle><PersonData>11/12/2000</PersonData></PersonRow>
              <PersonRow><PersonTitle>Gender:</PersonTitle><PersonData>Female</PersonData></PersonRow>
              <PersonRow><PersonTitle>Place of Birth:</PersonTitle><PersonData>Hong Kong</PersonData></PersonRow>
              <PersonRow><PersonTitle>Nationality:</PersonTitle><PersonData>Japanese</PersonData></PersonRow>
              <PersonRow><PersonTitle>ID number:</PersonTitle><PersonData>XXXXXXXX</PersonData></PersonRow>
              <PersonRow><PersonTitle>Passport number</PersonTitle><PersonData>---------</PersonData></PersonRow>
              <PersonRow><PersonTitle>Home Address:</PersonTitle><PersonData>12 Causeway Bay, HK</PersonData></PersonRow>
              <PersonRow><PersonTitle>Work Address:</PersonTitle><PersonData>13 Causeway Bay, HK</PersonData></PersonRow>
              <PersonRow><PersonTitle>Occupation:</PersonTitle><PersonData>Banker</PersonData></PersonRow>
              <PersonRow><PersonTitle>Marital Status:</PersonTitle><PersonData>Divorced</PersonData></PersonRow>
              <PersonRow><PersonTitle>Email:</PersonTitle><PersonData>yolo@gmail.com</PersonData></PersonRow>
              <PersonRow><PersonTitle>Mobile:</PersonTitle><PersonData>XXXXXXXX</PersonData></PersonRow>
              <PersonRow><PersonTitle>Emergency Contact:</PersonTitle><PersonData>Mother</PersonData></PersonRow>
              <PersonRow><PersonTitle>Emergency Contact Number:</PersonTitle><PersonData>XXXXXXXX</PersonData></PersonRow>
              
            </div>
          );
        }
        else if(this.state.id == 5)
        {
          return (
            <div className="App" style={this.getBackgroundStyle()}>
              <BackButton onClick={() => this.changeId(1)}> {"<"} </BackButton>
              
            </div>
          );
        }
        else if(this.state.id == 6)
        {
          return (
            <div className="App" style={this.getBackgroundStyle()}>
              <BackButton onClick={() => this.changeId(1)}> {"<"} </BackButton>

              
            </div>
          );
        }
        else if(this.state.id == 7)
        {
          return (
            <div className="App" style={this.getBackgroundStyle()}>
            <BackButton onClick={() => this.changeId(1)}> {"<"} </BackButton>

              
            </div>
          );
        }
        else if(this.state.id == 8)
        {
          return (
            <div className="App" style={this.getBackgroundStyle()}>

              
            </div>
          );
        }
        else if(this.state.id == 9)
        {
          return (
            <div className="App" style={this.getBackgroundStyle()}>

              
            </div>
          );
        }
}
}

// const

export default App;
