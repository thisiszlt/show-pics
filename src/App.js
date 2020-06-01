import React from 'react';
import { Grid, Modal} from "antd-mobile";
import 'antd-mobile/dist/antd-mobile.css';

const picData = Array.from(new Array(4)).map((val, index) => ({
  picture: index + ".PNG"
}));
const winHeight=window.innerHeight;
const winWidth = window.innerWidth;

function closest(el, selector) {
  const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pic0: false,
      pic1: false,
      pic2: false,
      pic3: false
    };
  }

  showModal = key => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    console.log(key);
    this.setState({
      [key]: true,
    });
  }

  onClose = key => () => {
    this.setState({
      [key]: false,
    });
  }
  onWrapTouchStart = (e) => {
    // fix touch to scroll background page on iOS
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      return;
    }
    const pNode = closest(e.target, '.am-modal-content');
    if (!pNode) {
      e.preventDefault();
    }
  }

  render(){
    const PicDetail = Array.from(new Array(4)).map((val, index) => {
      var pic = `pic${index}`;
      return (
      <Modal
        visible={this.state[pic]}
        transparent
        onClose={this.onClose(pic)}
        closable={true}
        popup
        wrapProps={{ onTouchStart: this.onWrapTouchStart }}
        key={pic}
      >
        <div style={{ position:"relative",display:"flex",alignItems:"center",height: winHeight, overflow: 'scroll',margin:"0 auto" }}>
          <img src={`${index}.PNG`} alt="" style={{flex:"auto",width:winWidth-50,objectFit:"cover"}}></img>
        </div>
      </Modal>);
    });
    
    return (
      <div style={{position: "absolute",transform: "translate(-50%,50%)",bottom: "50%",left:"50%"}}>
        <Grid data={picData}
        columnNum={2}
        square={false}
        hasLine={false}
        renderItem={(dataItem, index) => (
          <div style={{ padding: 0 }} onClick={this.showModal(`pic${index}`)}>
            <img src={dataItem.picture} style={{height:winHeight/2 - 100 }} alt="" />
          </div>
        )}
        itemStyle={{padding:0}}
        // onClick={(dataItem, index)=>{
        //   this.showModal("pic"+index)();
        // }}
        >
        </Grid>

        {PicDetail}

      </div>
  
    );
  }

}

export default App;
