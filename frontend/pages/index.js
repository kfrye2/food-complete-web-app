import React from "react";
import {getInfo} from '../lib/utils.js';
import Layout from '../comps/MyLayout';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state={search:"", display: false};
  }

  async handleUpdate(evt) {
    this.setState({search: evt.target.value, display: false});
    const food = await getInfo(evt.target.value);
    const tf = (food === null && this.state.search!='' ? true : false);
    this.setState({display: tf});
    return this.setState({food});
  }

  render() {
    return (
      <Layout>
        <div>
          <div>
            <div className='input-holder'>
              <p><input className='input-box' type='text' placeholder="Enter food name" value={this.state.search} onChange={this.handleUpdate.bind(this)} /></p>
              {this.state.display ? <p className='warning'>Foods Matching <b>{this.state.search}</b> Not Found</p> : null }
            </div>
          {this.state.food && this.state.search!='' ? 
            <div>
                <table id="food-table">
                  <thead>
                    <tr>
                      <th>Description</th>
                      <th>Kcal</th>
                      <th>Protein (g)</th>
                      <th>Fat (g)</th>
                      <th>Carbs (g)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.food.profile.food.map((item, key)=>
                        <tr key={item.description}>
                          <td>{item.description}</td>
                          <td>{item.kcal}</td>
                          <td>{item.protein_g}</td>
                          <td>{item.fat_g}</td>
                          <td>{item.carbohydrate_g}</td>
                        </tr>
                    )}
                  </tbody>
                </table>
            </div> : null }
            
          </div> 
          

          <style jsx>{`
          
            #food-table {
              font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
              border-collapse: collapse;
              width: 100%;
            }            
            #food-table td, #food-table th {
              border: 1px solid #ddd;
              padding: 8px;
            }
            #food-table tr {
              font-family: "Verdana";
              font-size: 10px;
              padding: .75rem;
              vertical-align: top;
              border-top: 1px solid #dee2e6;
            }            
            #food-table tr:nth-child(even){
              background-color: #f2f2f2;
            }            
            #food-table tr:hover {
              background-color: rgba(202, 221, 95, 0.5);
            }            
            #food-table th {
              font-family: "Verdana";
              font-size: 14px;
              padding-top: 12px;
              padding-bottom: 12px;
              text-align: left;
              background-color: #013220;
              color: white;
            }            
            .warning {
              font-family: "Verdana";
              text-align: center;
              padding: 10px;
              color: #856404;
              background-color: rgba(252, 208, 0,0.6);
              border: 3px solid #ffeeba;
              width: 23%;
              border-radius: 5px;
              margin: 45px auto auto;
            }
            .input-holder {
              width: 100%;
              text-align: center;
            }
            .input-box {
              padding: 10px;
              border-radius: 7px;
              font-family: "Verdana";
              text-align: center;
              font-size: "12px";
              box-shadow: 2px 2px 4px #888888;
              border: 2px solid #cadd5f !important;
              width = 50% !important;
            }
            input {
              width: 45%;
              font-size: "12px";
            }
          `}</style>
        </div>
      </Layout>
    );
  }
}

export default Search;
