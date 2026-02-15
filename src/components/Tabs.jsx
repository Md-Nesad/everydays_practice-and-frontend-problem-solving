import React, { useState } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(null);

  const tabs = [
    { id: "tab1", label: "Tab 1", content: "This is Content 1" },
    { id: "tab2", label: "Tab 2", content: "This is Content 2" },
    { id: "tab3", label: "Tab 3", content: "This is Content 3" },
  ];

  return (
    <div style={{ width: "400px", margin: "50px auto", fontFamily: "Arial" }}>
      {/* Tab Buttons */}
      <div style={{ display: "flex", borderBottom: "2px solid #ddd" }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              flex: 1,
              padding: "10px",
              cursor: "pointer",
              border: "none",
              backgroundColor: activeTab === tab.id ? "#000" : "#f1f1f1",
              color: activeTab === tab.id ? "#fff" : "#000",
              fontWeight: activeTab === tab.id ? "bold" : "normal",
              transition: "0.3s",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div style={{ padding: "20px", border: "1px solid #ddd" }}>
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id}>{tab.content ?? "Default Content"}</div>
            ),
        )}
      </div>
    </div>
  );
}
