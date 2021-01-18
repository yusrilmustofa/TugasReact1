import React, {Component} from 'react'
class BodyIndex extends Component {
  script(){
      let berat = document.getElementById('berat').value;
      let tinggi = document.getElementById('tinggi').value;
      let hasil = berat * tinggi;
       document.getElementById('hasil').value = hasil;
  }
  render() {
    return(
      <div className="container">
      <div className="alert alert-danger">
      <div className="card-header">
      <br />
      <h2 align="center"> BodyMassIndex </h2>
      <br />
      <div className="card-body">
      Berat:
      <input type="number" id="berat" className="form-control" />
      Tinggi:
      <input className="form-control" type="number" id="tinggi"  />
      <br />
      <button type="submit" className="btn btn-info btn-block" onclick="script">Hitung</button>
      Hasil:
      <input type="text" id="hasil" className="form-control" readonly />
      </div>
      </div>
      </div>
      </div>
    );
  }
}
export default BodyIndex;
