import React,{Component} from 'react'
class Ppn extends Component {
  render() {
    return(
      <div className="container">
      <div className="alert alert-danger">
      <div className="card-header">
      <h2 align="center"> Pajak Pertambahan Nilai </h2>
      <br />
      <div className="card-body">
      Harga Awal:
      <input type="number" id="berat" className="form-control" />
      PPN:
      <input className="form-control" type="number" id="tinggi"  />
      Diskon:
      <input className="form-control" type="number" id="diskon" />
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
export default Ppn;
