// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './CRMDashboard.css';

// export default function CRMDashboard() {
//   const [quotes, setQuotes] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const token = localStorage.getItem('adminToken');

//   useEffect(() => {
//     if (!token) {
//       navigate('/admin-login');
//       return;
//     }

//     fetch('http://127.0.0.1:8000/api/quotes/', {
//       headers: { 
//         'Authorization': `Token ${token}`,
//         'Content-Type': 'application/json'
//       }
//     })
//       .then(res => {
//         if (!res.ok) {
//           throw new Error('Unauthorized or Session Expired. Please login again.');
//         }
//         return res.json();
//       })
//       .then(data => {
//         setQuotes(Array.isArray(data) ? data : data.results || []);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error(err);
//         setError(err.message);
//         setLoading(false);
//         if (err.message.includes('Unauthorized')) {
//           localStorage.removeItem('adminToken');
//           navigate('/admin-login');
//         }
//       });
//   }, [token, navigate]);

//   const handleExport = async () => {
//     try {
//       const res = await fetch('http://127.0.0.1:8000/api/export-quotes/', {
//         headers: { 'Authorization': `Token ${token}` }
//       });
//       if (!res.ok) throw new Error('Export failed');
//       const blob = await res.blob();
//       const url = window.URL.createObjectURL(blob);
//       const a = document.createElement('a');
//       a.href = url;
//       a.download = 'cep_quotes_report.csv';
//       document.body.appendChild(a);
//       a.click();
//       a.remove();
//     } catch (err) {
//       alert('CSV export karne mein error aa gaya hai.');
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('adminToken');
//     navigate('/admin-login');
//   };

//   const filteredQuotes = Array.isArray(quotes) ? quotes.filter(q => 
//     (q.full_name && q.full_name.toLowerCase().includes(searchTerm.toLowerCase())) ||
//     (q.email && q.email.toLowerCase().includes(searchTerm.toLowerCase()))
//   ) : [];

//   if (loading) {
//     return <div style={{ color: '#fff', textAlign: 'center', marginTop: '150px' }}><h2>Loading CRM Dashboard...</h2></div>;
//   }

//   return (
//     <div className="crm-dashboard" style={{ paddingTop: '90px', minHeight: '100vh', backgroundColor: '#0f172a', color: '#fff', padding: '90px 20px 40px 20px' }}>
//       <header className="crm-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', flexWrap: 'wrap', gap: '15px', borderBottom: '1px solid #1e293b', paddingBottom: '20px' }}>
//         <h1 style={{ fontSize: '24px', margin: 0, fontWeight: 'bold' }}>CEP Estimation • CRM Dashboard</h1>
//         <div className="crm-actions" style={{ display: 'flex', gap: '10px' }}>
//           <button onClick={handleExport} className="btn-success" style={{ backgroundColor: '#10b981', color: '#fff', border: 'none', padding: '10px 18px', borderRadius: '6px', cursor: 'pointer', fontWeight: '500' }}>Download CSV Report</button>
//           <button onClick={handleLogout} className="btn-danger" style={{ backgroundColor: '#ef4444', color: '#fff', border: 'none', padding: '10px 18px', borderRadius: '6px', cursor: 'pointer', fontWeight: '500' }}>Logout</button>
//         </div>
//       </header>

//       {error && <p style={{ color: '#fc8181', marginBottom: '20px', backgroundColor: 'rgba(252, 129, 129, 0.1)', padding: '10px', borderRadius: '5px' }}>{error}</p>}

//       <div className="crm-stats" style={{ marginBottom: '25px' }}>
//         <div className="stat-card" style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '8px', width: '200px', border: '1px solid #334155' }}>
//           <h3 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#94a3b8' }}>Total Leads</h3>
//           <p style={{ margin: 0, fontSize: '28px', fontWeight: 'bold', color: '#38bdf8' }}>{quotes.length}</p>
//         </div>
//       </div>

//       <div className="crm-filter-bar" style={{ marginBottom: '25px' }}>
//         <input 
//           type="text" 
//           placeholder="Search by client name or email..." 
//           value={searchTerm} 
//           onChange={e => setSearchTerm(e.target.value)} 
//           style={{ width: '100%', maxWidth: '400px', padding: '12px 15px', borderRadius: '6px', border: '1px solid #334155', backgroundColor: '#1e293b', color: '#fff', outline: 'none' }}
//         />
//       </div>

//       <div className="table-responsive" style={{ overflowX: 'auto', backgroundColor: '#1e293b', borderRadius: '8px', border: '1px solid #334155' }}>
//         hydration-table-wrapper
//         <table className="crm-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
//           <thead>
//             <tr style={{ borderBottom: '1px solid #334155', color: '#94a3b8', fontSize: '13px' }}>
//               <th style={{ padding: '15px' }}>ID</th>
//               <th style={{ padding: '15px' }}>Client Name</th>
//               <th style={{ padding: '15px' }}>Email & Phone</th>
//               <th style={{ padding: '15px' }}>Project Type</th>
//               <th style={{ padding: '15px' }}>Service</th>
//               <th style={{ padding: '15px' }}>Status</th>
//               <th style={{ padding: '15px' }}>Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredQuotes.length > 0 ? (
//               filteredQuotes.map(q => (
//                 <tr key={q.id} style={{ borderBottom: '1px solid #334155' }}>
//                   <td style={{ padding: '15px' }}>#{q.id}</td>
//                   <td style={{ padding: '15px' }}><strong>{q.full_name}</strong></td>
//                   <td style={{ padding: '15px' }}>{q.email}<br/><span style={{ fontSize: '12px', color: '#94a3b8' }}>{q.phone}</span></td>
//                   <td style={{ padding: '15px' }}>{q.project_type}</td>
//                   <td style={{ padding: '15px' }}>{q.service}</td>
//                   <td style={{ padding: '15px' }}><span className={`badge ${q.status || 'new'}`} style={{ backgroundColor: '#0284c7', color: '#fff', padding: '4px 8px', borderRadius: '4px', fontSize: '11px' }}>{q.status || 'New'}</span></td>
//                   <td style={{ padding: '15px', fontSize: '13px', color: '#94a3b8' }}>{q.created_at ? new Date(q.created_at).toLocaleDateString() : 'N/A'}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="7" style={{ textAlign: 'center', padding: '30px', color: '#94a3b8' }}>No leads found in database.</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }


import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CRMDashboard.css';

export default function CRMDashboard() {
  const [quotes, setQuotes] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [activeTab, setActiveTab] = useState('quotes'); // 'quotes' ya 'contacts'
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedLead, setSelectedLead] = useState(null);
  const navigate = useNavigate();

  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    if (!token) {
      navigate('/admin-login');
      return;
    }

    // Quotes aur Contacts dono APIs se alag-alag data fetch karein
    Promise.all([
      fetch('http://127.0.0.1:8000/api/quotes/', {
        headers: { 'Authorization': `Token ${token}`, 'Content-Type': 'application/json' }
      }).then(res => res.ok ? res.json() : []),
      
      // Yahan check karein ke aapka backend endpoint '/api/contacts/' hai ya '/api/contact/'
      fetch('http://127.0.0.1:8000/api/contact/', { 
        headers: { 'Authorization': `Token ${token}`, 'Content-Type': 'application/json' }
      }).then(res => res.ok ? res.json() : [])
    ])
      .then(([quotesData, contactsData]) => {
        setQuotes(Array.isArray(quotesData) ? quotesData : quotesData.results || []);
        setContacts(Array.isArray(contactsData) ? contactsData : contactsData.results || []);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Failed to load dashboard data.');
        setLoading(false);
      });
  }, [token, navigate]);

  const handleExport = async () => {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/export-quotes/', {
        headers: { 'Authorization': `Token ${token}` }
      });
      if (!res.ok) throw new Error('Export failed');
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'cep_quotes_report.csv';
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (err) {
      alert('CSV export karne mein error aa gaya hai.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin-login');
  };

  // Active tab ke mutabiq data filter karein
  const currentData = activeTab === 'quotes' ? quotes : contacts;

  const filteredData = Array.isArray(currentData) ? currentData.filter(item => 
    Object.values(item).some(val => 
      val && typeof val === 'string' && val.toLowerCase().includes(searchTerm.toLowerCase())
    )
  ) : [];

  if (loading) {
    return <div style={{ color: '#fff', textAlign: 'center', marginTop: '150px' }}><h2>Loading CRM Dashboard...</h2></div>;
  }

  return (
    <div className="crm-dashboard" style={{ paddingTop: '90px', minHeight: '100vh', backgroundColor: '#0f172a', color: '#fff', padding: '90px 20px 40px 20px' }}>
      <header className="crm-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', flexWrap: 'wrap', gap: '15px', borderBottom: '1px solid #1e293b', paddingBottom: '20px' }}>
        <h1 style={{ fontSize: '24px', margin: 0, fontWeight: 'bold' }}>CEP Estimation • CRM Dashboard</h1>
        <div className="crm-actions" style={{ display: 'flex', gap: '10px' }}>
          <button onClick={handleExport} className="btn-success" style={{ backgroundColor: '#10b981', color: '#fff', border: 'none', padding: '10px 18px', borderRadius: '6px', cursor: 'pointer', fontWeight: '500' }}>Download CSV Report</button>
          <button onClick={handleLogout} className="btn-danger" style={{ backgroundColor: '#ef4444', color: '#fff', border: 'none', padding: '10px 18px', borderRadius: '6px', cursor: 'pointer', fontWeight: '500' }}>Logout</button>
        </div>
      </header>

      {error && <p style={{ color: '#fc8181', marginBottom: '20px', backgroundColor: 'rgba(252, 129, 129, 0.1)', padding: '10px', borderRadius: '5px' }}>{error}</p>}

      {/* STATS & TABS SWITCHER */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px', flexWrap: 'wrap', gap: '15px' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            onClick={() => { setActiveTab('quotes'); setSearchTerm(''); }}
            style={{ 
              backgroundColor: activeTab === 'quotes' ? '#3b82f6' : '#1e293b', 
              color: '#fff', border: '1px solid #334155', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' 
            }}
          >
            Quotes ({quotes.length})
          </button>
          <button 
            onClick={() => { setActiveTab('contacts'); setSearchTerm(''); }}
            style={{ 
              backgroundColor: activeTab === 'contacts' ? '#8b5cf6' : '#1e293b', 
              color: '#fff', border: '1px solid #334155', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' 
            }}
          >
            Contact Messages ({contacts.length})
          </button>
        </div>

        <input 
          type="text" 
          placeholder={`Search ${activeTab === 'quotes' ? 'quotes' : 'messages'}...`} 
          value={searchTerm} 
          onChange={e => setSearchTerm(e.target.value)} 
          style={{ width: '100%', maxWidth: '300px', padding: '10px 15px', borderRadius: '6px', border: '1px solid #334155', backgroundColor: '#1e293b', color: '#fff', outline: 'none' }}
        />
      </div>

      {/* TABLE */}
      <div className="table-responsive" style={{ overflowX: 'auto', backgroundColor: '#1e293b', borderRadius: '8px', border: '1px solid #334155' }}>
        <table className="crm-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '900px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #334155', color: '#94a3b8', fontSize: '13px' }}>
              <th style={{ padding: '15px' }}>ID</th>
              <th style={{ padding: '15px' }}>Name</th>
              <th style={{ padding: '15px' }}>Email & Phone</th>
              <th style={{ padding: '15px' }}>{activeTab === 'quotes' ? 'Project / Service' : 'Message / Subject'}</th>
              <th style={{ padding: '15px' }}>Date</th>
              <th style={{ padding: '15px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map(item => (
                <tr key={item.id} style={{ borderBottom: '1px solid #334155' }}>
                  <td style={{ padding: '15px' }}>#{item.id}</td>
                  <td style={{ padding: '15px' }}><strong>{item.full_name || item.name || 'N/A'}</strong></td>
                  <td style={{ padding: '15px' }}>
                    {item.email}<br/>
                    <span style={{ fontSize: '12px', color: '#94a3b8' }}>{item.phone || 'N/A'}</span>
                  </td>
                  <td style={{ padding: '15px', maxWidth: '250px', wordBreak: 'break-word' }}>
                    {activeTab === 'quotes' ? (
                      <>{item.project_type || 'N/A'}<br/><span style={{ fontSize: '12px', color: '#38bdf8' }}>{item.service || ''}</span></>
                    ) : (
                      <>{item.message || item.subject || 'No message'}</>
                    )}
                  </td>
                  <td style={{ padding: '15px', fontSize: '13px', color: '#94a3b8' }}>
                    {item.created_at ? new Date(item.created_at).toLocaleDateString() : 'N/A'}
                  </td>
                  <td style={{ padding: '15px' }}>
                    <button 
                      onClick={() => setSelectedLead(item)}
                      style={{ backgroundColor: '#334155', color: '#fff', border: '1px solid #475569', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', fontWeight: '500' }}
                    >
                      View All Info
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center', padding: '30px', color: '#94a3b8' }}>
                  No {activeTab} found in database.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* POPUP MODAL FOR ALL FIELDS */}
      {selectedLead && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, padding: '20px' }}>
          <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px', width: '100%', maxWidth: '600px', maxHeight: '85vh', overflowY: 'auto', padding: '25px', color: '#fff' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid #334155', paddingBottom: '10px' }}>
              <h2 style={{ margin: 0, fontSize: '18px', color: '#38bdf8' }}>{activeTab === 'quotes' ? 'Quote' : 'Contact'} Details (# {selectedLead.id})</h2>
              <button onClick={() => setSelectedLead(null)} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '20px', cursor: 'pointer' }}>&times;</button>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {Object.entries(selectedLead).map(([key, value]) => {
                if (key === 'files' && Array.isArray(value)) {
                  return (
                    <div key={key} style={{ borderBottom: '1px solid #334155', paddingBottom: '8px' }}>
                      <strong style={{ color: '#94a3b8', textTransform: 'uppercase', fontSize: '12px' }}>{key}:</strong>
                      <div style={{ marginTop: '4px' }}>
                        {value.length > 0 ? value.map((f, i) => (
                          <div key={f.id || i}>
                            <a href={f.file} target="_blank" rel="noopener noreferrer" style={{ color: '#38bdf8', textDecoration: 'underline', fontSize: '13px' }}>
                              Download Uploaded File {i + 1}
                            </a>
                          </div>
                        )) : <span style={{ fontSize: '13px' }}>No files uploaded</span>}
                      </div>
                    </div>
                  );
                }

                return (
                  <div key={key} style={{ borderBottom: '1px solid #334155', paddingBottom: '8px' }}>
                    <strong style={{ color: '#94a3b8', textTransform: 'uppercase', fontSize: '12px' }}>{key.replace(/_/g, ' ')}:</strong>
                    <div style={{ fontSize: '14px', marginTop: '2px', wordBreak: 'break-word' }}>
                      {typeof value === 'object' && value !== null ? JSON.stringify(value) : (value !== null && value !== undefined && value !== '' ? String(value) : 'N/A')}
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ marginTop: '20px', textAlign: 'right' }}>
              <button onClick={() => setSelectedLead(null)} style={{ backgroundColor: '#475569', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}