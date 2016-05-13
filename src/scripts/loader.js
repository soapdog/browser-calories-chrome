import JSXComponent from 'metal-jsx';

class Loader extends JSXComponent {
  render() {
    return (
      <div className="status">
        <img className="status-geek" src="../images/loader.png" alt="Geek" />
        <img className="status-rays" src="../images/rays.png" alt="Rays" />
        <div className="status-msg">
          <p>Measuring</p>
          <p>{this.props.url}</p>
        </div>
      </div>
    )
  }
}

export default Loader;
