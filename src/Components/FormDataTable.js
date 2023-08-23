import React from 'react';
import './FormDataTable.css';
import jsPDF from 'jspdf';

function FormDataTable({ tableData }) {
  if (!tableData) {
    return <div>No data available</div>;
  }

const handleDownloadPDF = () => {
    const pdf = new jsPDF();
    
    // Table headers
    const headers = ['Fields', 'Values'];

    // Table data
    const data = [
      ['Project Name', tableData.projectName],
      ['Project Description', tableData.projectDescription],
      ['Client', tableData.client],
      ['Contractor', tableData.contractor],
      ['max_X', tableData.max_x],
      ['min_X', tableData.min_x],
      ['max_Y', tableData.max_y],
      ['min_Y', tableData.min_y],
      ['max_Z', tableData.max_z],
      ['min_Z', tableData.min_z],
    ];

    // Set table header styles
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(12);
    pdf.text(headers[0], 15, 20);
    pdf.text(headers[1], 80, 20);

    // Set table data styles
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(10);
    
    let y = 30;
    for (const row of data) {
      const [field, value] = row;
      pdf.text(field, 15, y);
      pdf.text(value, 80, y);
      y += 10;
    }

    // Save the PDF
    pdf.save('result.pdf');
  };
  return (
    <div className="form-data-table">
     <span>
     <h2>Result Table</h2>
      <button onClick={handleDownloadPDF}>download data</button>
     </span>
      <table>
        <thead>
          <tr>
            <th>Fields</th>
            <th>Values</th>
          </tr>
        </thead>
        <tbody>
            <tr>
            <td>Project Name</td> 
            <td>{tableData.projectName}</td>
            </tr>

            <tr>
            <td>Project Description</td> 
            <td>{tableData.projectDescription}</td>
            </tr>

            <tr>
            <td>Client</td> 
            <td>{tableData.client}</td>
            </tr>

            <tr>
            <td>Contractor</td> 
            <td>{tableData.contractor}</td>
            </tr>
            <tr>
            <td>max_X</td> 
            <td>{tableData.max_x}</td>
            </tr>
            <tr>
            <td>min_X</td> 
            <td>{tableData.min_x}</td>
            </tr>
            <tr>
            <td>max_Y</td> 
            <td>{tableData.max_y}</td>
            </tr>
            <tr>
            <td>min_Y</td> 
            <td>{tableData.min_y}</td>
            </tr>

            <tr>
            <td>max_Z</td> 
            <td>{tableData.max_z}</td>
            </tr>

            <tr>
            <td>min_Z</td> 
            <td>{tableData.min_z}</td>
            </tr>
            
        </tbody>
      </table>
    </div>
  );
}

export default FormDataTable;
