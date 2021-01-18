import React,{Component} from 'react'
class Bank extends Component {
  render() {
    return(
      <div className="container">
      <div className="alert alert-danger">
      <div className="card-header">
      <h2 align="center"> Cicilan Bank </h2>
      <br />
      <div className="card-body">
      Nominal:
      <input type="number" id="berat" className="form-control" />
      Bunga:
      <input className="form-control" type="number" id="tinggi"  />
      Periode:
      <input className="form-control" type="number" id="periode"  />
      <br />
      <button type="submit" className="btn btn-info btn-block" onclick="script">Hitung</button>
      Hasil:
      <input type="text" id="hasil" className="form-control" readonly />
      </div>
      </div>
      </div>
      </div>
    )
  }
}
export default Bank;
